import Link from 'next/link'

import { tw } from 'twind'

const link = [
    { title: 'home', link: '/' },
    { title: 'hello', link: '/hello' },
    { title: 'test', link: '/test' }
]

const Footer = () => (
    <footer>
        <ul>
            {link.map(({ title, link }) => (
                <li key={link}>
                    <Link href={link}>
                        <a className={tw`no-underline text(red-400)`}>{title}</a>
                    </Link>
                </li>
            ))}
        </ul>
    </footer>
)

export default Footer
