import Document, { Html, Head, Main, NextScript } from 'next/document'

import { getStyleTag } from 'twind/sheets'
import { isProduction, sheet } from '@services'

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head />
                {isProduction ? (
                    <head
                        dangerouslySetInnerHTML={{
                            __html: getStyleTag(sheet).replace(
                                '__twind',
                                '__twind_init'
                            )
                        }}
                    />
                ) : null}
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
