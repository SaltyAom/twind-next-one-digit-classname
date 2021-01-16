import { useEffect, useState } from 'react'

import Head from 'next/head'
import { AppProps } from 'next/app'
import { useRouter } from 'next/router'

import { getStyleTag } from 'twind/sheets'

import { isProduction, sheet } from '@services'

import '@styles/init.sass'

const App = ({ Component, pageProps }: AppProps) => {
    let router = useRouter()

    let [styleTag, updateStyleTag] = useState('')

    useEffect(() => {
        document.addEventListener('touchstart', () => null, {
            passive: true
        })
    }, [])

    useEffect(() => {
        if (process.env.NODE_ENV === 'production') {
            updateStyleTag(
                getStyleTag(sheet)
                    .replace(`<style id="__twind">`, '')
                    .replace('</style>', '')
            )

            let twindInit = document.getElementById('__twind_init')
            twindInit?.parentElement?.removeChild(twindInit)
        }
    }, [router.pathname])

    return (
        <>
            {isProduction ? (
                <Head>
                    <style
                        dangerouslySetInnerHTML={{
                            __html: styleTag
                        }}
                    />
                </Head>
            ) : null}
            <Component {...pageProps} />
        </>
    )
}

export default App
