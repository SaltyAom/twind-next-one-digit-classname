import { setup } from 'twind'
import { virtualSheet } from 'twind/sheets'

import oneClassName from '1-classname'

const sheet = virtualSheet()

setup({
    preflight: false,
    mode: 'strict',
    hash: (string) => oneClassName(string),
    darkMode: 'class',
    sheet
})

sheet.reset()

export { sheet }
