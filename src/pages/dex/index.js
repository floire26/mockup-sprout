import DexCard from "@/components/DexCard";
import { fetchPokedex } from "@/fetchers/fetch";
import placeholder from "@/fetchers/placeholder";
import { useRouter } from "next/router";
import { useState } from "react";
import useSWR from 'swr'

export default function Page() {
    const [offset, setOffset] = useState(0);
    const [input, setInput] = useState('');
    const router = useRouter();
    const { data, error, isValidating, isLoading, mutate } = useSWR('/dex', () => {
        // console.log({ offset });
        return fetchPokedex(offset)
    } , {
        keepPreviousData: true
    })

    if (error) return (
        <p>Failed to load</p>
    )

    return (
        <main className="bg-black flex flex-row justify-center">
            {/* { console.log(placeholder) } */}
            <div className="nes-container bg-white with-title is-centered is-rounded w-4/5 min-h-screen flex flex-col items-center">
                <button
                    onClick={() => router.push('/')}
                    type="button"
                    className="nes-btn is-error text-3xl self-end">Exit</button>
                <p className="text-8xl">Pokédex</p>
                <div className="nes-field w-1/3 flex flex-row mb-10 pr-4 pl-4">
                    <input
                        onChange={e => {
                            setInput(e.target.value)
                        }}
                        type="text"
                        id="name_field"
                        className="nes-input text-3xl focus:bg-slate-500 focus:text-white focus:placeholder:text-white" placeholder="Enter Pokémon Name..."/>
                    <button
                        onClick={() => router.push(`/dex/${input}`)}
                        type="button"
                        className="nes-btn is-success text-3xl">Search</button>
                </div>
                    <div className="grid grid-cols-3 grid-rows-3 w-full justify-items-center gap-y-4 gap-x-2 mb-5">
                {
                    isLoading || isValidating ?
                        placeholder.map(pokemon => <DexCard props={pokemon}/>) :
                        data.map(pokemon => <DexCard props={pokemon} key={pokemon.order}/>)
                }
                    </div>
                    <div>

                        {
                            offset === 0 ? null : <a
                            onClick={() => {
                                setOffset(offset - 9);
                                setTimeout(() => mutate(), 500)
                            }}
                            className="text-6xl mr-10">{'<<'}</a>
                        }
                        {
                            offset >= 1278 ? null : <a onClick={() => {
                                setOffset(offset + 9);
                                setTimeout(() => mutate(), 500)
                            }}
                            className="text-6xl">{'>>'}</a>
                        }
                    </div>
                </div>
        </main>
    )
}
