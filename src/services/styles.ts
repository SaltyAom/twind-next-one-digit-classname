import { setup } from 'twind'
import { virtualSheet } from 'twind/sheets'

const sheet = virtualSheet()

const styleMap: Record<string, string> = {}
let counter = 0

const generateStyleHash = (value: string) => {
    if (styleMap[value]) return styleMap[value]

    let localCounter = counter
    let hash = ''

    while (localCounter >= 0) {
        let charCode = localCounter % 26

        hash += String.fromCharCode(97 + charCode)

        localCounter -= 26
    }

    styleMap[value] = hash
    counter++

    return hash
}

setup({
    preflight: false,
    mode: 'strict',
    hash: (string) => generateStyleHash(string),
    darkMode: 'class',
    sheet
})

sheet.reset()

export {
    sheet
}