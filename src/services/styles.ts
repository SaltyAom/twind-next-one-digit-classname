import { setup } from 'twind'
import { virtualSheet } from 'twind/sheets'

const sheet = virtualSheet()

const styleMap: Record<string, string> = {}
let counter = 0

// 0-51 = a-z & A-Z
// 52-2755 = aa - az && Aa - ZZ
const generateStyleHash = (value: string) => {
    if (styleMap[value]) return styleMap[value]

    let hash = ''
    let localCounter = counter

    let genDivisor = () => 52 ** hash.length
    let genDecrement = () => 52 ** (hash.length + 1)

    while (localCounter >= 0) {
        let charCode = Math.floor(localCounter / genDivisor()) % 52

        localCounter = localCounter - genDecrement()

        // a-z and A-Z otherwise start new className
        if (charCode < 26) hash += String.fromCharCode(97 + charCode)
        else hash += String.fromCharCode(65 + charCode - 26)
    }

    hash = hash.split('').reverse().join('')

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

export { sheet }
