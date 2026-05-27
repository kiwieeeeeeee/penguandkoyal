"use client";
import Image from "next/image";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
export default function Home() {
  const [entered, setEntered] = useState(false);
  const [chosen, setChosen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const [walkAwayPos, setWalkAwayPos] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const bgMusic = document.getElementById(
      "bgMusic"
    ) as HTMLAudioElement;

    const voiceNote = document.getElementById(
      "voiceNote"
    ) as HTMLAudioElement;

    if (!bgMusic || !voiceNote) return;

    const lowerMusic = () => {
      bgMusic.volume = 0.15;
    };

    const restoreMusic = () => {
      bgMusic.volume = 0.5;
    };

    voiceNote.addEventListener("play", lowerMusic);
    voiceNote.addEventListener("pause", restoreMusic);
    voiceNote.addEventListener("ended", restoreMusic);

    return () => {
      voiceNote.removeEventListener("play", lowerMusic);
      voiceNote.removeEventListener("pause", restoreMusic);
      voiceNote.removeEventListener("ended", restoreMusic);
    };
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      {!entered && (

  <div className="fixed inset-0 z-[999] bg-black flex items-center justify-center">

    <div className="text-center">

      <p className="uppercase tracking-[0.4em] text-pink-300 text-sm mb-8">
        Us, in this moment
      </p>

      <h1 className="text-6xl md:text-8xl font-black mb-10">
        from my heart to yours,
        <span className="block text-pink-400">
          let's discover our story again.
         </span>
         <span className="block text-pink-300 mt-4">
          click below to enter.
         </span>
      </h1>

      <button
        onClick={() => {
          setEntered(true);

          const music = document.getElementById("bgMusic") as HTMLAudioElement;

          if (music) {
            music.volume = 0.5;
            music.play();
          }
        }}
        className="px-10 py-4 rounded-full bg-pink-500 hover:bg-pink-400 transition-all duration-300 text-white text-lg shadow-2xl shadow-pink-500/30 hover:scale-105"
      >
        enter
      </button>

    </div>

  </div>

)}
     <audio
  id="bgMusic"
  loop
  autoPlay={entered}
>
  <source src="/music/love.mp3" type="audio/mp3" />
</audio>
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[40rem] h-[40rem] bg-pink-500/20 blur-[150px] rounded-full" />

      <div className="absolute bottom-0 right-0 w-[35rem] h-[35rem] bg-purple-500/20 blur-[150px] rounded-full" />

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-6">

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="uppercase tracking-[0.4em] text-pink-300 text-sm mb-6"
        >
         For The Person I Always Choose
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-6xl md:text-8xl font-black leading-none"
        >
          Hey, my pengu
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="max-w-2xl mt-10 text-zinc-300 text-lg leading-relaxed"
        >
          despite everything,
           my heart will always choose you.
        </motion.p>

      </section>
     <section className="relative z-10 py-32 px-6">

  <div className="max-w-4xl mx-auto backdrop-blur-xl bg-white/5 border border-white/10 rounded-[40px] p-10 md:p-16 shadow-2xl">

    <p className="text-pink-300 uppercase tracking-[0.3em] text-sm mb-6">
      A Letter For You
    </p>

    <h2 className="text-5xl font-black mb-10">
      hey my pengu,
    </h2>

    <div className="space-y-8 text-zinc-300 leading-relaxed text-lg">

      <p>
        i know things became really messy between us.
        and i know i hurt you too.
        maybe i should never have talked to him,
        and i regret it more than i can explain.
      </p>

      <p>
        but through all this chaos,
        one thing never changed —
        i only love you.
        i only wanted you.
      </p>

      <p>
        since you left,
        everything feels incomplete.
        days feel heavier,
        food doesn’t taste the same,
        nothing feels exciting anymore.
        it genuinely feels like a part of my life disappeared with you.
      </p>

      <p>
        and maybe what hurts the most is remembering how happy we used to be.
        how comfortable we were together.
        how we used to laugh at the smallest things.
      </p>

      <p>
        sometimes i still sit and wonder…
        how did we go from that
        to this silence between us?
      </p>

      <p>
        but pengu,
        if we both made mistakes…
        then why are we fighting this alone?
      </p>

      <p>
        relationships aren’t about one person winning
        and one person losing.
        they’re about two people sitting together
        and fixing what broke.
      </p>

      <p>
        let’s talk once.
        properly.
        honestly.
        calmly.
      </p>

      <p>
        from the beginning again if we have to.
      </p>

      <p>
        no lies.
        no hurting each other.
        no repeating the same mistakes.
      </p>

      <p>
        just us,
        trying again with more honesty
        and more love.
      </p>

      <p>
        please don’t shut me out completely.
        your koyal still waits for you
        in every little thing.
      </p>

      <p className="text-pink-300 text-2xl italic">
        and even after all this pain…
        my heart will always choose you.
      </p>

      <p className="text-right text-pink-200 pt-8">
        — your koyal ♡
      </p>

    </div>

  </div>
  <section className="relative z-10 py-32 px-6">

  <div className="text-center mb-20">

    <p className="uppercase tracking-[0.3em] text-pink-300 text-sm mb-4">
      our memories
    </p>

    <h2 className="text-5xl md:text-7xl font-black">
      moments i still hold close.
    </h2>

  </div>

  <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">

    {[
      {
        image: "/images/pic1.jpeg",
        caption: "one of my favorite smiles ever.",
      },
      {
        image: "/images/pic2.jpeg",
        caption: "us being happy without even trying.",
      },
      {
        image: "/images/pic3.jpeg",
        caption: "a moment i wish i could relive forever.",
      },
      {
        image: "/images/pic4.jpeg",
        caption: "home always felt like you.",
      },
    ].map((photo, index) => (

      <div
        key={index}
        className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-xl"
      >

        <div className="overflow-hidden">

          <Image
            src={photo.image}
            alt="memory"
            width={800}
            height={1000}
            className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-110"
          />

        </div>

        <div className="p-6">

          <p className="text-zinc-300 text-lg italic">
            {photo.caption}
          </p>

        </div>

      </div>

    ))}

  </div>

</section>
<section className="relative z-10 py-40 px-6">

  <div className="max-w-4xl mx-auto rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-xl p-10 md:p-16 text-center overflow-hidden relative">
    {/* Rain Overlay */}
<div className="absolute inset-0 overflow-hidden pointer-events-none">

 {mounted &&
  [...Array(50)].map((_, i) => (

    <div
      key={i}
      className="absolute bg-white/20"
      style={{
        left: `${Math.random() * 100}%`,
        top: `-${Math.random() * 100}px`,
        width: "1px",
        height: `${50 + Math.random() * 50}px`,
        animation: `rain ${0.5 + Math.random()}s linear infinite`,
        animationDelay: `${Math.random() * 2}s`,
      }}
    />

  ))}

</div>
    {/* Glow */}
    <div className="absolute inset-0 bg-pink-500/5 blur-3xl" />

    <div className="relative z-10">

      <p className="uppercase tracking-[0.3em] text-pink-300 text-sm mb-6">
        one last thing
      </p>

      <h2 className="text-5xl md:text-7xl font-black leading-tight mb-10">
        play this
        <span className="block text-pink-400">
          when you miss me.
        </span>
      </h2>

      <p className="text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed mb-12">
        maybe hearing my voice will remind you
        that my love for you was always real.
      </p>

      {/* Voice Note Player */}
      <div className="flex flex-col items-center gap-8">

        <div className="w-32 h-32 rounded-full bg-pink-500/20 flex items-center justify-center text-6xl animate-pulse shadow-2xl shadow-pink-500/30">
          🎧
        </div>

       <audio id="voiceNote" controls className="w-full max-w-xl">
        <source src="/music/voicenote.mp3" type="audio/mp3" />
        </audio>

      </div>

    </div>

  </div>

</section>
<section className="relative z-10 py-40 px-6">

  <div className="max-w-5xl mx-auto text-center">

    <p className="uppercase tracking-[0.4em] text-pink-300 text-sm mb-10">
      things i still wanted to say
    </p>

    <div className="space-y-20">

      {[
        "I check my phone hoping it’s you.",
        "Our old conversations play in my mind on loop.",
        " I miss the way you hold me in your arms.",
        "Every version of me alwauys love every version of you.",
        "Please.. come back home, baby.",
        " I miss you more than words can say.",
      ].map((line, index) => (

        <motion.p
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: index * 0.2 }}
          className="text-3xl md:text-5xl font-light text-zinc-200 leading-relaxed"
        >
          {line}
        </motion.p>

      ))}

    </div>

  </div>

</section>
<section className="relative z-10 min-h-screen flex flex-col items-center justify-center overflow-hidden px-6">

  {/* Stars */}
  <div className="absolute inset-0">

    <div className="absolute top-20 left-20 w-2 h-2 bg-white rounded-full animate-pulse" />
    <div className="absolute top-40 right-40 w-3 h-3 bg-pink-300 rounded-full animate-pulse" />
    <div className="absolute bottom-40 left-32 w-2 h-2 bg-white rounded-full animate-pulse" />
    <div className="absolute bottom-20 right-20 w-2 h-2 bg-pink-200 rounded-full animate-pulse" />
    <div className="absolute top-1/2 left-1/3 w-2 h-2 bg-white rounded-full animate-pulse" />
    <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-pink-300 rounded-full animate-pulse" />

  </div>

  {/* Constellation Text */}
  <div className="relative z-10 text-center">

    <p className="uppercase tracking-[0.4em] text-pink-300 text-sm mb-8">
      written somewhere in the stars
    </p>

    <h2 className="text-6xl md:text-8xl font-black leading-tight">

      <span className="text-white">
        pengu
      </span>

      <span className="mx-6 text-pink-400">
        ♡
      </span>

      <span className="text-pink-300">
        koyal
      </span>

    </h2>

    <p className="mt-12 text-zinc-400 text-xl max-w-2xl leading-relaxed">
      even the universe still remembers us.
    </p>

  </div>

</section>
<section className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

  <div className="relative z-10 max-w-4xl">

    {!chosen ? (

      <>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="uppercase tracking-[0.4em] text-pink-300 text-sm mb-8"
        >
          one last question
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="text-5xl md:text-7xl font-black leading-tight"
        >
          if love still exists
          somewhere between us…
          <span className="block text-pink-400 mt-4">
            what would you choose?
          </span>
        </motion.h2>

        <div className="flex gap-8 justify-center mt-20 flex-wrap">

          {/* WALK AWAY BUTTON */}
          <button
            onMouseEnter={() => {
              setWalkAwayPos({
                x: Math.random() * 300 - 150,
                y: Math.random() * 200 - 100,
              });
            }}
            style={{
              transform: `translate(${walkAwayPos.x}px, ${walkAwayPos.y}px)`,
            }}
            className="px-8 py-4 border border-zinc-500 rounded-full text-zinc-400 transition-all duration-300"
          >
            walk away
          </button>

          {/* CHOOSE AGAIN BUTTON */}
          <button
            onClick={() => setChosen(true)}
            className="px-10 py-4 rounded-full bg-pink-500 hover:bg-pink-400 transition-all duration-300 text-white shadow-2xl shadow-pink-500/30 hover:scale-105"
          >
            choose us again
          </button>

        </div>
      </>

    ) : (

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="space-y-10"
      >

        <h2 className="text-6xl md:text-8xl font-black text-pink-300">
          you know broken things
          can still be loved properly.
        </h2>

        <p className="text-zinc-300 text-xl max-w-2xl mx-auto leading-relaxed">
          this story still deserves another chapter.
        </p>

        <div className="text-7xl animate-pulse">
          💖
        </div>

        <p className="italic text-pink-200 text-2xl">
          your koyal will always wait for you.
        </p>

      </motion.div>

    )}

  </div>

</section>

</section>

    </main>
  );
}
