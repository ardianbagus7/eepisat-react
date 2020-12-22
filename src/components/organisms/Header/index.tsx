import Animated from 'components/animations';
import { Avatar, HeaderText } from 'components/atoms';
import Decorations from 'components/decorations';
import { TextIconButton } from 'components/molecules';
import HeaderProps from 'components/organisms/Header/types';
import { LanguageContext } from 'contexts';
import React, { useContext } from 'react';

export default function Header({ data, text, lowerSectionRef }: HeaderProps) {
  const languange = useContext(LanguageContext);
  const { profilePicture, name, job } = data;
  const { headerText } = text;
  const { greetings, intro, preTitle } = headerText;

  return (
    <header className="pt-10 text-center justify-center h-max bg-indigo md:px-5" style={{
      backgroundImage: " linear-gradient(rgba(55, 48, 163, 0.7), rgba(55, 48, 163, 0.7)),url(./img/hero/h1_hero.png)",
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    }}>
      <HeaderText className="flex flex-col items-center mt-6 md:mt-15 mb-6 p-5 md:self-center">
        <div className="relative inline-flex">
          <Animated.FromDirection
            from="bottom"
            custom={0}
            delay={0.3}
            className="mx-auto mt-6"
          >
            <Animated.Letter
              className="font-bold text-md md:text-4xl text-white pt-10"
              text={` ${name}`}
              custom={0}
              delay={1}
            />
          </Animated.FromDirection>
        </div>
      </HeaderText>
      <Animated.FromDirection
        from="top"
        custom={0}
        delay={0.3}
        className="mx-auto mt-6 p-5"
      >
        <span className="font-hairline text-sm text-gray-200 sm:text-lg">PENS Aerospace Team consists of motivated-students</span>
        <br />
        <span className="font-hairline text-sm  text-gray-200 sm:text-lg"> with the same enthusiasm to learn and develop the aerospace technology of PENS.</span>
      </Animated.FromDirection>
      <Animated.FromDirection
        from="top"
        custom={8}
        delay={0.3}
        className="mx-auto mt-6"
      >
        <TextIconButton
          className="group text-white"
          onClick={() => lowerSectionRef?.current?.scrollIntoView({ behavior: 'smooth' })}
          text={languange.value === 'en' ? 'Scroll down' : 'Scroll ke bawah'}
          icon={
            <svg
              className="transition-all transform group-hover:translate-y-1"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          }
        />
      </Animated.FromDirection>
      <div className="mb-10 justify-center flex">
        <Animated.FromDirection className="relative max-w-screen-lg -mb-32 p-10" from="top" custom={1} delay={0.3} duration={0.8}>
          <Animated.FromDirection
            from="top"
            delay={2.2}
            duration={1}
            className="absolute -top-4 -left-4 z-1 "
          >
            <Decorations.Bullets className="w-24 h-24 text-indigo-300 md:w-40 md:h-40" />
          </Animated.FromDirection>
          <Animated.FromDirection
            from="bottom"
            custom={1}
            delay={2.2}
            className="absolute -bottom-4 -right-4  z-1"
          >
            <Decorations.Bullets className="w-24 h-24 text-indigo-300 md:w-40 md:h-40" />
          </Animated.FromDirection>
          <Animated.Reveal from="top" className="rounded-3xl" delay={0.8} duration={1.2}>
            <img className="object-cover border-4 border-yellow-200 rounded-3xl shadow-xl " src={profilePicture} alt="Profile Picture" />
          </Animated.Reveal>
        </Animated.FromDirection>
      </div>

    </header>
  );
}
