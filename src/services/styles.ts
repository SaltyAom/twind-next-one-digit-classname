import { setup } from 'twind'
import { virtualSheet } from 'twind/sheets'

import oneClassName from '1-classname'

import { isProduction } from './runtime'

const sheet = virtualSheet()

if (isProduction) {
    setup({
        preflight: false,
        mode: 'strict',
        hash: (string) => oneClassName(string),
        darkMode: 'class',
        sheet
    })

    sheet.reset()
}

export { sheet }
