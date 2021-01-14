import { tw } from 'twind'

import AppLayout from '@layouts/app'

const Hello = () => (
    <AppLayout>
        <h1 className={tw`font-bold text(red-500)`}>Page is helloed</h1>
    </AppLayout>
)

export default Hello
