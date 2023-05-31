import { title } from '@/fonts/fonts'
import Image from 'next/image'
import { useRouter } from 'next/router'

export default function Page() {
  const router = useRouter();

  return (
    <main
      className="bg-pokemon bg-cover flex min-h-screen flex-col items-center justify-between p-24"
      onClick={() => router.push('/dex')}>
      <Image
        src={'/images/icon.png'}
        height={300}
        width={600}/>
      <Image
        src={'/images/sub-title.png'}
        height={150}
        width={300}
        style={"image-rendering: pixelated;"}/>
      <p className='text-5xl text-slate-300'>Press anywhere to continue</p>
    </main>
  )
}
