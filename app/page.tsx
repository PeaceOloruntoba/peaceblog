import AboutCoverSection from '@/components/About/AboutCoverSection'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='flex items-center font-bold text-5xl justify-center p-96'>
      Hello World
      <AboutCoverSection />
    </div>
  )
}
