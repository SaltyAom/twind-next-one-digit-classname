import { tw } from 'twind'

import AppLayout from '@layouts/app'

const Landing = () => (
    <AppLayout>
        <h1 className={tw`font-bold text(blue-500)`}>Hello World</h1>
    </AppLayout>
)

export default Landing
