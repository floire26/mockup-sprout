import { useRouter } from "next/router"
import Image from 'next/image'
import { useState } from "react";

export default function DexCard({ props }) {
    const router = useRouter();
    const [animate, setAnimate] = useState(false);

    return (
        <div
            onMouseEnter={() => setAnimate(true)}
            onMouseLeave={() => setAnimate(false)}
            onClick={() => router.push(`/dex/${props.name}`)}
            className="nes-container with-title is-centered is-rounded w-11/12 flex flex-col items-center hover:bg-slate-500 hover:text-white">
            <p className="text-4xl">#{props.id}</p>
            {/* { console.log(props) } */}
            <Image
                loader={() => props.sprite}
                src={props.sprite}
                alt="pokemon.png"
                width={140}
                height={140}
                className={`w-3/4 h-3/4 ml-5 ${animate ? 'animate-bounce' : ''}`}/>
            <p className="text-4xl capitalize">{props.name}</p>
        </div>
    )
}
