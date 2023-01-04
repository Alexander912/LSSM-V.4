import * as fs from 'fs';
import path from 'path';

import yaml from 'js-yaml';

interface Workflow {
    jobs: {
        build: {
            steps: { name: string; run?: string; id?: string }[];
        };
    };
}

type Job = Workflow['jobs']['build']['steps'][0];

const excludedSteps = [
    'get_node_yarn_versions',
    'yarn_cache_dir',
    'generate_token',
    'output',
    'git_prepare',
    'import_gpg',
    'git_push',
];
const shortcuts = {
    dependencies: ['yarn_setup', 'versions', 'yarn_install', 'browserslist'],
    quick: ['env', 'format', 'eslint', 'tsc', 'webpack'],
    full: [],
};

const script = [
    `#!/usr/bin/env bash
# DO NOT EDIT THIS FILE AS IT IS AUTOGENERATED!

# exit script when any command fails
set -e`,
];

const getStepName = (step: string) => `_run_step_${step}`.toUpperCase();

try {
    const workflow = yaml.load(
        fs.readFileSync(
            path.join(__dirname, '..', '.github', 'workflows', 'build.yml'),
            'utf8'
        )
    ) as Workflow;

    const steps = [
        {
            name: '[⬆️] Setup Node.js',
            run:
                'curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/master/install.sh | bash\n' +
                // not a JS template string but bash
                // eslint-disable-next-line no-template-curly-in-string
                'NVM_DIR=$([ -z "${NVM_DIR-}" ] && printf %s "$NVM_DIR" || [ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")\n' +
                'echo "$NVM_DIR"\n' +
                '[ -s "$NVM_DIR/nvm.sh" ] && \\. "$NVM_DIR/nvm.sh"\n' +
                'nvm install "$NODE_VERSION"',
            id: 'node',
        } as Job,
    ].concat(
        workflow.jobs.build.steps.filter(
            step => step.run && !excludedSteps.includes(step.id ?? '')
        )
    );
    const stepIds = steps.map(step => step.id ?? '');

    script.push(
        `
# default values of variables set from params
${stepIds.map(id => `${getStepName(id)}=false`).join('\n')}
MODE="development"

while :; do
    case "\${1-}" in
${stepIds.map(id => `        --${id}) ${getStepName(id)}=true ;;`).join('\n')}
${Object.entries(shortcuts)
    .map(
        ([shortcut, steps]) => `        --${shortcut})
          ${(shortcut === 'full' ? stepIds : steps)
              .map(step => `${getStepName(step)}=true`)
              .join('\n          ')} ;;`
    )
    .join('\n')}
        -p | --production) MODE="production" ;;
        -?*)
          echo "Unknown option: $1"
          exit 1 ;;
        *) break ;;
    esac
    shift
done`,
        'total_start_time=$(date +%s%N)',
        "NODE_VERSION=$(grep '\"node\":' ./package.json | awk -F: '{ print $2 }' | sed 's/[\",]//g' | sed 's/\\^v//g' | tr -d '[:space:]')\n" +
            "YARN_VERSION=$(grep '\"packageManager\":' ./package.json | awk -F: '{ print $2 }' | sed 's/[\",]//g' | sed 's/yarn@//g' | tr -d '[:space:]')\n" +
            'REF=$(git show-ref --heads --abbrev "$(git branch --show-current)" | grep -Po "(?<=[a-z0-9]{9} ).*$" --color=never)',
        ...steps.map(step =>
            [
                `# ${step.name}`,
                `if [[ $${getStepName(step.id ?? '')} = true ]]; then
    start_time=$(date +%s%N)
    echo "### ${step.name} ###"
    ${
        (step.id === 'env'
            ? step.run?.match(
                  /(?<=# ===BEGIN \$BRANCH===).*?(?=# ===END \$BRANCH===)/su
              )?.[0]
            : step.run
        )
            ?.trim()
            .replace(/\n/gu, '\n    ')
            .replace(/\$\{\{ env\.MODE \}\}/gu, '$MODE')
            .replace(/\$\{\{ env\.BRANCH \}\}/gu, '$BRANCH')
            .replace(/\$\{\{ env\.NODE_VERSION \}\}/gu, '$NODE_VERSION')
            .replace(/\$\{\{ env\.YARN_VERSION \}\}/gu, '$YARN_VERSION')
            .replace(/\$\{\{ inputs\.label \}\}/gu, '🦄 branch label')
            .replace(/\$\{\{ (github|inputs)\.ref \}\}/gu, '$REF') ?? ''
    }
    end_time=$(date +%s%N)
    echo "=== ${step.name}: $(((end_time - start_time) / 1000000))ms ==="
fi`,
            ].join('\n')
        ),
        'total_end_time=$(date +%s%N)',
        'echo "=== Total: $(((total_end_time - total_start_time) / 1000000))ms ==="'
    );

    const scriptPath = path.join(__dirname, '..', 'build', 'build.sh');

    fs.writeFileSync(scriptPath, script.join('\n\n'));
    fs.chmodSync(scriptPath, 0o755);
} catch (e) {
    console.log(e);
}
