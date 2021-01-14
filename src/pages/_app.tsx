import { useEffect, useLayoutEffect, useState } from 'react'

import Head from 'next/head'
import { AppProps } from 'next/app'
import { useRouter } from 'next/router'

import { getStyleTag } from 'twind/sheets'

import { sheet } from '@services'

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
        updateStyleTag(getStyleTag(sheet))

        let twindInit = document.getElementById(
            '__twind_init'
        )
        twindInit?.parentElement?.removeChild(twindInit)
    }, [router.pathname])

    return (
        <>
            <Head>
                <style
                    dangerouslySetInnerHTML={{
                        __html: styleTag
                            .replace(`<style id="__twind">`, '')
                            .replace('</style>', '')
                    }}
                />
            </Head>
            <Component {...pageProps} />
        </>
    )
}

export default App
