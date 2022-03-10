import React from 'react'

function AboutSection() {
  return (
    <div className="h-screen bg-slate-50 flex flex-col items-center py-20">
      <div className="uppercase self-start max-w-5xl w-full mx-auto flex flex-col gap-3 pb-4">
        <h4 className="text-4xl text-teal-400 font-kalam tracking-wider font-black">
          About
        </h4>
        <h3 className="text-4xl font-black text-blue-700">Who is Sean?</h3>
      </div>
      <div className="flex gap-4 lg:gap-10 justify-between w-full  max-w-5xl">
        <img
          className="w-64 h-64 lg:h-80 lg:w-80 rounded-full object-cover"
          src="/images/me.jpg"
          alt="Image of Sean"
        />
        <div className=" flex-1 flex flex-col gap-2 leading-relaxed">
          <h4 className="text-2xl font-black text-blue-700">
            A curiosity-driven Front-End Developer with design chops.
          </h4>
          <p className="para">
            I'm passionate about bringing both the technical and visual aspects
            of digital products to life. User experience, beautiful pixels and
            writing clean accessible, human code matters to me. I sweat the
            details. And as a follower of John Maeda’s Laws Of Simplicity, I
            agree that less is more.
          </p>
          <p className="para">
            I have a BA in Multimedia Design from Curtin University 🇦🇺, a
            Certificate of Web Development Immersive from Juno College (Formerly
            HackerYou) 🇨🇦, (and an Advanced Scuba Diving License from PADI 🇵🇭!)
          </p>
          <p className="para">
            I'm happiest when I'm creating, learning, exploring and thinking
            about how to make things better. Currently solving deceptively
            simple problems at UsePastel.Com. I'm not available for any
            freelance work, but feel free to reach out and say hello! I promise
            I don't bite 😉
          </p>
          <button className="font-kalam flex text-xl underline underline-offset-2 decoration-4  decoration-teal-300">
            Get In Touch!
          </button>
        </div>
      </div>
    </div>
  )
}

export default AboutSection
