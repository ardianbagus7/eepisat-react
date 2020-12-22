import Animated from 'components/animations';
import { Avatar, HeaderText } from 'components/atoms';
import Decorations from 'components/decorations';
import { TextIconButton } from 'components/molecules';
import HeaderProps from 'components/organisms/SubHeader/types';
import { LanguageContext } from 'contexts';
import React, { useContext } from 'react';

export default function SubHeader({ data, text, lowerSectionRef }: HeaderProps) {
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
          className="group text-white mb-20"
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
    </header>
  );
}
