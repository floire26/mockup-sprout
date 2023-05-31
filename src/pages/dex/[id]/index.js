import { fetchPokemonInfo } from '@/fetchers/fetch';
import { useRouter } from 'next/router'
import useSWR from 'swr'
import { useState } from 'react';
import Image from 'next/image'

export default function Page({ params, searchParams }) {

    // const params = useParams();
    const router = useRouter();
    const [option, setOption] = useState(0);
    const { id } = router.query;

    console.log(router.query);
    const { data, isLoading } = useSWR(`/dex/${id}`, () => {
        return fetchPokemonInfo(id)
    } , {
        keepPreviousData: true
    })

    if (isLoading) return (
        <p>Loading...</p>
    )

    function handleBack() {
        setOption(4)
        setTimeout(() => router.push('/dex'), 2_000)
    }

    function StatusBox({ data }) {
        switch (option) {
            case 0:
                return (
                    <div className='basis-1/2 flex flex-row items-center'>
                        <p className='text-6xl capitalize basis-full justify-self-center'>What will you do?</p>
                    </div>
                )

            case 1:
                return <>
                    <div className='basis-1/2 flex flex-row items-center'>
                        <p className='text-6xl capitalize basis-full'>Name: { data.name }</p>
                        <p className='text-6xl capitalize basis-full'>Type: { data.types.join(' ') }</p>
                    </div>
                    <div className='basis-1/2 flex flex-row items-center'>
                        <p className='text-6xl capitalize basis-full'>Height: { data.height / 10 }cm</p>
                        <p className='text-6xl capitalize basis-full'>Weight: { data.weight }kg</p>
                    </div>
                </>

            case 2:
                return <>
                    <div className='basis-1/2 flex flex-row items-center'>
                        {
                            data.stats.slice(0, 3).map(stat =>
                                <p className='text-6xl capitalize basis-full'>{stat.name}  : { stat.value }</p>
                            )
                        }
                    </div>
                    <div className='basis-1/2 flex flex-row items-center'>
                        {
                            data.stats.slice(3).map(stat => {
                                stat.name = stat.name[3] === 'c' ? `${stat.name.slice(0, 2)}. ${stat.name.slice(7)}` : stat.name
                                return <p className='text-6xl capitalize basis-full'>{stat.name}  : { stat.value }</p>
                            })
                        }
                    </div>
                </>

            case 3:
                return (
                    <div className='basis-1/2 flex flex-row items-center'>
                        <span className='text-6xl basis-full justify-self-center'>{ data.flavor_text }</span>
                    </div>
                )

            default:
                return <>
                    <div className='basis-1/2 flex flex-row items-center'>
                        <p className='text-6xl basis-full justify-self-center'>Got away safely!</p>
                    </div>
                </>
        }

    }

    return (
        <div className="bg-green-500 bg-contain bg-top bg-no-repeat min-h-screen h-screen flex flex-row flex-wrap place-content-center place-items-center">
            <div className='basis-3/5 h-2/3 flex-none bg-info bg-cover bg-repeat flex flex-row'>
                <div className='basis-1/2 w-full bg-gray-200/50 flex items-end justify-center'>
                    <Image
                        src={'/images/trainer.png'}
                        alt="trainer.png"
                        width={200}
                        height={400}
                    />
                </div>
                <div className='basis-1/2 w-full bg-gray-200/70 flex items-center justify-center'>
                    <Image
                        loader={() => data.sprite}
                        src="pokemon.png"
                        alt="pokemon.png"
                        width={400}
                        height={400}
                        className='mb-20'
                    />
                </div>
            </div>
            <div className="bg-slate-500 flex-none basis-full h-1/3 flex flex-row justify-items-center">
                <div className='basis-2/3 nes-container is-rounded is-dark flex flex-col justify-center'>
                    <StatusBox
                        data={data}
                    />
                </div>
                <div className='basis-1/3 nes-container is-rounded is-dark flex flex-col justify-center'>
                    <div className='basis-full flex flex-row items-center'>
                        <a
                            onClick={() => setOption(1)}
                            className='text-6xl uppercase basis-full'>INFO</a>
                        <a
                            onClick={() => setOption(2)}
                            className='text-6xl uppercase basis-full'>BASE STATS</a>
                    </div>
                    <div className='basis-full flex flex-row items-center'>
                        <a
                            onClick={handleBack}
                            className='text-6xl uppercase basis-full'>run</a>
                        <a
                            onClick={() => setOption(3)}
                            className='text-6xl uppercase basis-full'>description</a>
                    </div>

                </div>
            </div>
        </div>
    )
}
