import { FunctionComponent } from 'react'

import Footer from '@components/footer'

const AppLayout: FunctionComponent<{}> = ({ children }) => (
    <>
        {children}
        <Footer />
    </>
)

export default AppLayout
