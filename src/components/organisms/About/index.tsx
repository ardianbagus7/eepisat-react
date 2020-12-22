import Animated from 'components/animations';
import { ContentText, RoundedButton } from 'components/atoms';
import { SectionTitle } from 'components/molecules';
import { LanguageContext } from 'contexts';
import React, { useContext } from 'react';
import AboutSectionProps from 'components/organisms/About/types';
import { useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { forwardRef } from 'react';

const About = forwardRef<HTMLElement | undefined, AboutSectionProps>(
  ({ title, content, className }: AboutSectionProps, ref) => {
    const controls = useAnimation();
    const [refView, inView] = useInView({
      threshold: 0.5,
    });
    const language = useContext(LanguageContext);

    useEffect(() => {
      if (inView) {
        controls.start('show');
      }
    }, [controls, inView]);

    return (
      <section
        id="about"
        className={className}
        ref={section => {
          refView(section);
          if (ref) {
            if (typeof ref === 'function') {
              ref(section);
            } else {
              ref.current = section;
            }
          }
        }}
      >

        <div className="grid grid-rows-2 mt-6 lg:grid-cols-2 lg:grid-rows-1 justify-center">
          <Animated.FromDirection
            className=""
            from="right"
            animate={controls}
            custom={0}
            delay={1}
          >
              <SectionTitle
                lineProps={{
                  animate: controls,
                  custom: 1,
                  transition: {
                    delay: 1,
                  },
                }}
              >
                <Animated.Letter text={title} animate={controls} custom={0} delay={1} />
              </SectionTitle>
              <ContentText className="lg:text-left">{content.text}</ContentText>
              <Animated.FromDirection className="flex justify-center lg:justify-start mt-5" from="bottom" animate={controls} custom={2} delay={1}>
                <RoundedButton as="a" href="#">
                  {language.value === 'en' ? 'See more' : 'Lihat Selengkapnya'}
                </RoundedButton>
              </Animated.FromDirection>
          </Animated.FromDirection>

          <div className="mx-auto mt-6 lg:mr-0 lg:ml-auto lg:mt-0">
            <Animated.FromDirection
              className=""
              from="left"
              animate={controls}
              custom={0}
              delay={1}
            >
              <Animated.Reveal from="left" animate={controls} custom={1} delay={1}>

                <img src="./img/person.png" alt="" />

              </Animated.Reveal>
            </Animated.FromDirection>
          </div>
        </div>
      </section>
    );
  }
);

export default About;
