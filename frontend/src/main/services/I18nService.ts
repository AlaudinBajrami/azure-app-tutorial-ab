import {createContext} from 'react'
import {dictionary, dictionaryKeyType} from './dictionary'

export type LocaleCode = 'de' | 'en'

export class I18nService {
    localeCode: LocaleCode = 'de'

    constructor() {
        if (navigator.language && navigator.language.startsWith('en')) {
            this.setLocale('en')
        }
    }

    word = (key: dictionaryKeyType, plural?: boolean, formatValues?: string[]): string => {
        if (formatValues && formatValues.length > 0) {
            return this.format(key, formatValues, plural)
        }
        return dictionary[key] ? dictionary[key][this.localeCode][plural ? 1 : 0] : key
    }

    formattedNumber = (num: number | undefined, fractionDigits?: number): string => {
        if (!num) {
            return "--";
        }

        let englishFormat = num.toFixed(fractionDigits);
        let parts = englishFormat.toString().split(".");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, this.word("thousandSeparator"));
        return parts.join(this.word("decimalSeparator"));
    }

    getKey(word: string) {
        for (const [key, value] of Object.entries(dictionary)) {
            if (
                value.de.some(
                    (value) => value.toLocaleLowerCase() === word.toLocaleLowerCase()
                ) ||
                value.en.some(
                    (value) => value.toLocaleLowerCase() === word.toLocaleLowerCase()
                )
            ) {
                return key
            }
        }
        return undefined
    }

    setLocale = (language: LocaleCode) => (this.localeCode = language)

    private format(key: dictionaryKeyType, formatValues: string[], plural?: boolean) {
        let result = dictionary[key][this.localeCode][plural ? 1 : 0]
        formatValues.forEach((value, idx) => {
            result = result.replace(`$__${idx}__`, value)
        })
        return result
    }

}

export const I18nContext = createContext<I18nService>(new I18nService());
