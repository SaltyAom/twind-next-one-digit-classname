import Document, { Html, Head, Main, NextScript } from 'next/document'

import { getStyleTag } from 'twind/sheets'
import { sheet } from '@services'

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head />
                <head
                    dangerouslySetInnerHTML={{
                        __html: getStyleTag(sheet).replace(
                            '__twind',
                            '__twind_init'
                        )
                    }}
                />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
