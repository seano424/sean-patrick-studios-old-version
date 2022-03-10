import { useState, useEffect } from 'react'
import TextTransition, { presets } from 'react-text-transition'
import { getDatabase } from 'lib/notion'
import AboutSection from '@/components/AboutSection'

const TEXTS = [
  'coffee enthusiast ☕️',
  'scuba diver 🤿 🐠',
  'movie lover 🎥 🍿',
  'world traveler 🌏',
]
export default function Home({ posts }) {
  const [textIndex, setTextIndex] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(
      () => setTextIndex((textIndex) => textIndex + 1),
      3000
    )
    return () => clearTimeout(intervalId)
  }, [])

  return (
    <>
      <section className='border-8 h-screen flex flex-col justify-between'>
        <div className="absolute -top-36 -left-2 z-40">
          <img
            className="w-80 h-80 transform rotate-[120deg]"
            src="/images/leafy-branch.svg"
            alt="leafy branch"
          />
        </div>

        <div className="text-[#002DDB] w-full  lg:h-auto pt-40 flex flex-col justify-center mx-auto m-0 left-9 text-left text-[40px] font-black lg:text-7xl z-30 bg-white">
          <div className="w-max mx-auto">
            <h1>Hey there, I'm Sean! </h1>
            <p>A teacher turned developer</p>
            <h1 className="flex gap-2">
              and{' '}
              <TextTransition
                className="text-orange-500"
                text={TEXTS[textIndex % TEXTS.length]}
                springConfig={presets.wobbly}
              />
            </h1>
          </div>
        </div>
        <div className="w-full relative transform rotate-180">
          <img src="/images/bg-gradient-blue.svg" alt="" />
        </div>
        <div className="absolute top-[30rem] md:top-[27rem] lg:top-96 xl:top-[25rem] right-8 lg:right-12 z-40">
          <img
            className="w-full h-56 lg:h-96 transform"
            src="/images/chill.png"
            alt="leafy branch"
          />
        </div>
      </section>
      <AboutSection />
    </>
  )
}

export const getStaticProps = async () => {
  const database = await getDatabase()

  return {
    props: {
      posts: database,
    },
    revalidate: 1,
  }
}
