import { useRouter } from 'next/router'

export default function Page() {
  const router = useRouter();

  return (
    <main
      className="bg-pokemon bg-cover flex min-h-screen flex-col items-center justify-between p-20"
      onClick={() => router.push('/dex')}>
      <img
        src={'/images/icon.png'}
        height={600}
        width={600}
        className='position-absolute mb-10'/>
      <p className='animate-pulse text-5xl text-slate-500'>Click anywhere to continue</p>
    </main>
  )
}
