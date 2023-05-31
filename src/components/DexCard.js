import { useRouter } from "next/router"
import Image from 'next/image'

export default function DexCard({ props }) {
    const router = useRouter();

    return (
        <div
            onClick={() => router.push(`/dex/${props.name}`)}
            className="nes-container with-title is-centered is-rounded w-11/12 flex flex-col items-center">
            <p className="text-4xl">#{props.id}</p>
            { console.log(props) }
            <Image
                loader={() => props.sprite}
                src="pokemon.png"
                alt="pokemon.png"
                width={300}
                height={300}
                className="w-3/4 h-3/4 ml-5"/>
            <p className="text-4xl capitalize">{props.name}</p>
        </div>
    )
}
