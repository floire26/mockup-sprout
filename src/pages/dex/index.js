import DexCard from "@/components/DexCard";
import { fetchPokedex } from "@/fetchers/fetch";
import { useEffect, useState } from "react";
import useSWR from 'swr'

export default function Page() {
    const [offset, setOffset] = useState(0)

    const { data, error, isValidating, isLoading, mutate } = useSWR('/dex', () => {
        console.log({ offset });
        return fetchPokedex(offset)
    } , {
        keepPreviousData: true
    })

    if (error) return (
        <p>Failed to load</p>
    )

    return (
        <main className="bg-white flex flex-row justify-center mt-5 mb-5">
            {/* { console.log(data) } */}
            <div class="nes-container with-title is-centered is-rounded w-4/5 min-h-screen">
                <p className="text-8xl">Pokédex</p>
                {
                    isLoading || isValidating ? <p className="h-full">Loading...</p> : <div className="grid grid-cols-3 grid-rows-3 w-full justify-items-center gap-y-4 gap-x-2 mb-5">
                    {
                        data.map(pokemon => <DexCard props={pokemon}/>)
                    }
                </div>
                }

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
        </main>
    )
}
