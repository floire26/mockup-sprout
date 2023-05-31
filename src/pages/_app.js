import { pokemon } from '@/fonts/fonts'
import '../app/globals.css'
import "nes.css/css/nes.min.css"

export const metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

export default function App({ Component, pageProps }) {
    return (
            <main className={`${pokemon.className}`}>
                <Component {...pageProps} />
            </main>
    )
}