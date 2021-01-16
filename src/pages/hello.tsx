import { tw } from 'twind'

import AppLayout from '@layouts/app'

const Hello = () => (
    <AppLayout>
        <h1 className={tw`font-semibold text(red-500)`}>Page is helloed</h1>
    </AppLayout>
)

export default Hello
