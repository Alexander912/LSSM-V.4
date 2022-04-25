module.exports = {
    arrCounter: {
        resetTexts: {
            counter: 'Licznik ZR',
            highlight: 'Granica ZR',
            selection: 'Wybór pojazdów',
            counter_highlight: 'Licznik ZR / granica',
            counter_selection: 'Licznik ZR i wybór pojazdów',
            highlight_selection: 'Granica ZR i wybór pojazdów',
            counter_highlight_selection:
                'Licznik ZR / granica i wybór pojazdów',
            reset: 'Resetuj licznik ZR',
        },
        reset: 'Resetuj licznik ZR',
    },
    arrHover: {
        reset: 'Wybór pojazdu jest resetowany przed!',
        headers: {
            set: 'Usawienie',
            attribute: 'Nazwa',
            free: 'Wolne',
            max: 'Maks',
            status: 'Status',
        },
        titles: {
            set: 'Tak często ta kombinacja jest wybierana po naciśnięciu ZR',
            attribute: 'Kombinacja opisana w tym wierszu',
            free: 'Tak często ta kombinacja jest dostępna',
            max: 'Możesz wybrać ten ZR, dopóki ta kombinacja nie będzie już dostępna',
        },
        arrSpecs: {
            any_traffic_car: 'Radiowóz WRD',
            automatic_text_color: 'Automatyczny kolor tekstu',
            boot: 'Łodzie (ogólne)',
            building_ids: 'Posterunki',
            caption: '* Nazwa',
            category_id: 'Kategoria',
            color: 'Kolor',
            column_number: 'Numer kolumny',
            dlk: 'SH lub SD',
            elw: 'SLOp lub SLRr',
            elw2: 'Samochód dowodzenia i łączności',
            fire: 'Samochody pożarnicze',
            flood_equipment: 'Sprzęt przeciwpowodziowy',
            fly_car_any: 'Pomoc medyczna',
            foam: 'Samochód z zbiornikiem na pianę',
            foam_amount: 'Litry piany gaśniczej',
            fustw: 'Radiowóz OPI',
            fustw_or_police_motorcycle: 'Radiowóz OPI lub Motocykl Policyjny',
            fwk: 'Dźwig SP',
            gw_taucher: 'Samochód SLRw',
            gw_wasserrettung: 'Rozbudowa ratownictwa wodnego',
            gwa: 'SPGaz',
            gwgefahrgut: 'Ratownictwo chemiczne',
            gwhoehenrettung: 'SRWys',
            gwl2wasser: 'Cysterna z wodą',
            hlf_only: 'GBARt',
            hose_trucks: 'Pojazd z wężami',
            hotkey: 'Skrót',
            k9: 'Jednostka z psami',
            ktw: 'Ambulans T',
            ktw_or_rtw: 'Ambulans P, S lub T',
            mzb: 'Łódź wielozadaniowa',
            police_motorcycle: 'Motocykl Policyjny',
            polizeihubschrauber: 'Helikopter Policyjny',
            reset: 'Wyczyść poprzedni wybór w oknie wezwania.',
            rth_only: 'Śmigłowiec',
            rtw: 'Ambulans P lub S',
            rw: 'Samochód Ratownictwa Technicznego',
            swat: 'SPKP',
            swat_armored_vehicle: 'Opanerzony Pojazd SPKP',
            swat_suv: 'SUV SPKP',
            text_color: 'Kolor tekstu',
            wasser_amount: 'Litry wody',
        },
    },
    enhancedMissingVehicles: {
        vehicle: 'Vehicle type',
        missing: 'Missing on mission',
        driving: 'En-route',
        total: 'Still needed',
        tip: {
            dragging: 'drag window',
            textMode: 'textmode on/off',
            minified: 'collapse',
            overlay: 'overlay',
            reload: 'reload',
            pushRight: 'show this box above vehicle list',
            pushLeft: 'show this box at original position',
        },
        selected: 'Selected',
        water: 'litrów wody',
        foam: 'litrów piany gaśniczej',
        staffPrefix: [],
        staff: {
            [/^policjanci SPKP$/u]: [15, 18],
        },
        vehiclesByRequirement: {
            [/^– SH lub SD$/u]: [2, 13],
            [/^– Rchem$/u]: [41, 7],
            [/^cystern(a|\(-y\)) z wodą?$/u]: [47, 6, 61, 64],
            [/^Dźwig SP$/u]: [25],
            [/^Helikopter(ów)? Policyjny(ch)?$/u]: [14],
            [/^Jednost(ek|ka) K-9?$/u]: [16],
            [/^pojazdów SPKP$/u]: [15, 18],
            [/^radiowóz OPI$/u]: [8],
            [/^Radiowoz(u|ów) WRD?$/u]: [30],
            [/^samoch(ód|ody\(-ów\)) pożarnicz(y|e\(-ych\))?$/u]: [
                0, 1, 29, 55, 56, 38, 12, 39, 44,
            ],
            [/^Samoch(ód|odów) Ratownictwa Technicznego$/u]: [
                4, 38, 12, 39, 37, 40,
            ],
            [/^samoch(ód|ody\(-ów\)) dowodzenia i łączności?$/u]: [43, 11],
            [/^Samoch(ód|odów) Ratownictwa wysokościowego$/u]: [27],
            [/^Samoch(ód|odów) wężowy(ch)?$/u]: [61, 64],
            [/^Samoch(ód|odów) ze zbiornikiem na pianę?$/u]: [
                55, 56, 57, 58, 59, 44,
            ],
            [/^SLOp lub SLRr$/u]: [3, 28],
            [/^SPGaz$/u]: [10, 42],
        },
    },
    tailoredTabs: {
        allTab: 'All',
        occupiedTab: 'Follow-up',
        vehicleMissing: {
            title: 'One vehicle is not present in any tab | Several vehicles are not present in any tab',
            text: 'The following vehicle types are only present in the "All" tab:',
            hide: 'Hide Note',
            close: 'Close Note till change',
        },
    },
    patientCollapse: {
        combis: 'Combinations',
        amount: 'Ilość',
        summary: {
            total: 'Pacjęci',
            treated: 'Leczeni',
        },
    },
    hideVehicleList: {
        show: 'Pokaż listę pojazdów',
        hide: 'Ukryj listę pojazdów',
    },
    vehiclePlayerCounter: {
        ' ': '',
        'driving': 'W drodze',
        'atScene': 'Na miejscu',
        'total': 'Całkowity',
        'vehicles': 'Pojazdy',
        'players': 'Gracze',
    },
};
