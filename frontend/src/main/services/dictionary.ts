export const dictionary = {
    de: {
        de: ["Deutsch"],
        en: ["German"],
    },
    en: {
        de: ["Englisch"],
        en: ["English"],
    },
    yes: {
        de: ["Ja"],
        en: ["Yes"],
    },
    no: {
        de: ["Nein"],
        en: ["No"],
    },
    ok: {
        de: ["Ok"],
        en: ["Ok"],
    },
    cancel: {
        de: ["Abbruch"],
        en: ["Cancel"],
    },
    back: {
        de: ["Zurück"],
        en: ["Back"],
    },
    thousandSeparator: {
        de: ["."],
        en: [","],
    },
    decimalSeparator: {
        de: [","],
        en: ["."],
    },
    formattedNumber: {
        de: ["Formatierte Zahl"],
        en: ["Formatted number"],
    },
    sign_in: {
        de: ["Anmelden"],
        en: ["Sign in"],
    },
    sign_out: {
        de: ["Abmelden"],
        en: ["Sign out"],
    },
    billion: {
        de: ["Mrd."],
        en: ["B"],
    },
    year: {
        de: ["Jahr", "Jahre"],
        en: ["year", "years"],
    },
    million: {
        de: ["Mio."],
        en: ["M"],
    },
    thousand: {
        de: ["Tsd."],
        en: ["K"],
    },
    perform_config_action: {
        de: ["Konfiguration anpassen"],
        en: ["Perform config action"],
    },
    read_secured_information: {
        de: ["Lese gesicherte Information"],
        en: ["Read secured information"],
    },
    write_information: {
        de: ["Schreibe Information"],
        en: ["Write information"],
    },

};

export type dictionaryKeyType = keyof typeof dictionary;
export type dictionaryType = typeof dictionary;
