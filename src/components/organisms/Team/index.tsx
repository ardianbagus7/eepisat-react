import { SectionTitle } from 'components/molecules';
import React, { useContext, useEffect } from 'react';
import { SectionVariants } from 'components/molecules/SectionTitle';
import { RoundedButton } from 'components/atoms';
import { LanguageContext } from 'contexts';
import TeamCard from 'components/molecules/TeamCard';
import Decorations from 'components/decorations';
import TeamsSectionProps from 'components/organisms/Team/types';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Animated from 'components/animations';
import { forwardRef } from 'react';

const Team = forwardRef<HTMLElement | undefined, TeamsSectionProps>(
  ({ title, content, className }: TeamsSectionProps, ref) => {
    const controls = useAnimation();
    const [refView, inView] = useInView({
      threshold: 0.1,
    });
    const language = useContext(LanguageContext);
    const { items } = content;

    const bulletsClasses = 'w-32 h-32 text-indigo-300 md:w-40 md:h-40';

    useEffect(() => {
      if (inView) {
        controls.start('show');
      }
    }, [controls, inView]);

    return (
      <section
        id="team"
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
        <SectionTitle
          variant={SectionVariants.CENTER}
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

        {items.map((item, index) => (
          <Animated.FadeIn key={index} animate={controls} custom={index} delay={0.2}>
            <TeamCard
              data={item}
              className="h-full transition-all transform hover:scale-110 focus-within:scale-110  py-10"
            />
          </Animated.FadeIn>
        ))}


        {/* <Animated.FromDirection className="flex justify-center mt-8" from="bottom" animate={controls} custom={2} delay={1}>
          <RoundedButton as="a" href="https://github.com/itsfaqih">
            {language.value === 'en' ? 'See more' : 'Lihat Selengkapnya'}
          </RoundedButton>
        </Animated.FromDirection> */}
      </section>
    );
  }
);

export default Team;
