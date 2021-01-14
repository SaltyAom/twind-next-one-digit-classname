import { tw } from 'twind'

import AppLayout from '@layouts/app'

const Test = () => (
    <AppLayout>
        <h1 className={tw`text(yellow-400)`}>Test Page</h1>
    </AppLayout>
)

export default Test
