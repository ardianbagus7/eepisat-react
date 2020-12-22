import { SectionTitle } from 'components/molecules';
import React, { useContext, useEffect } from 'react';
import { SectionVariants } from 'components/molecules/SectionTitle';
import { RoundedButton, ContentTitle } from 'components/atoms';
import { LanguageContext } from 'contexts';
import ProjectCard from 'components/molecules/ProjectCard';
import Decorations from 'components/decorations';
import ProjectsSectionProps from 'components/organisms/Projects/types';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Animated from 'components/animations';
import { forwardRef } from 'react';
import Slider from "react-slick";


const News = forwardRef<HTMLElement | undefined, ProjectsSectionProps>(
    ({ title, content, className }: ProjectsSectionProps, ref) => {
        const controls = useAnimation();
        const [refView, inView] = useInView({
            threshold: 0.4,
        });
        const language = useContext(LanguageContext);
        const { items } = content;

        const bulletsClasses = 'w-32 h-32 text-indigo-400 md:w-40 md:h-40';

        useEffect(() => {
            if (inView) {
                controls.start('show');
            }
        }, [controls, inView]);


        return (
            <section
                id="news"
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
                <div className="relative grid grid-cols-1 md:grid-cols-3 gap-3 mt-10 md:mt-8">
                    <Animated.FromDirection
                        from="top"
                        animate={controls}
                        custom={1}
                        delay={1.8}
                        className="absolute -top-8 -left-12 md:-top-9 md:-left-16 -z-10"
                    >
                        <Decorations.Bullets className={bulletsClasses} />
                    </Animated.FromDirection>
                    <Animated.FromDirection
                        from="bottom"
                        animate={controls}
                        custom={1}
                        delay={1.8}
                        className="absolute -bottom-8 -right-12 md:-bottom-9 md:-right-16 -z-10"
                    >
                        <Decorations.Bullets className={bulletsClasses} />
                    </Animated.FromDirection>
                    <Animated.FromDirection className="relative md:col-span-2 h-96" from="right" animate={controls} custom={1} delay={0.3} duration={0.8}>
                        <Animated.Reveal from="right" className="rounded-3xl w-full h-96" animate={controls} delay={0.8} duration={1.2}>
                            <a href="https://www.pens.ac.id/2019/08/28/tim-dirgantara-pens-sabet-juara-umum-komurindo-kombat-2018-2019/" target="_blank">
                                <img className="w-full h-full object-cover rounded-lg transition-all duration-500 transform hover:scale-110" src="./img/news/1.jpg" alt="Tim Komurindo Kombat PENS Juara Umum Komurindo Kombat 2018-2019" />
                                <div className="absolute bottom-3 left-3">
                                    {/* <div className="bg-yellow-200 rounded-md text-center py-1 px-4 mb-2">
                                        <p>Aug 28, 2019</p>
                                    </div> */}
                                    <ContentTitle className="text-white">Tim Dirgantara PENS Sabet Juara Umum Komurindo-Kombat 2018/2019</ContentTitle>
                                </div>
                            </a>
                        </Animated.Reveal>
                    </Animated.FromDirection>
                    <div className="grid gap-6">
                        <Animated.FromDirection className="relative md:col-span-2" from="left" animate={controls} custom={1} delay={0.6} duration={0.8}>
                            <Animated.Reveal from="left" className="rounded-3xl w-full h-96 md:h-44" animate={controls} delay={0.8} duration={1.2}>
                                <a href="https://www.pens.ac.id/2018/11/05/tim-dirgantara-pens-raih-penghargaan-poster-terbaik-dalam-workshop-komurindo-kombat/" target="_blank"></a>
                                <img className="w-full h-full object-cover rounded-lg transition-all duration-500 transform hover:scale-110" src="./img/news/2.jpg" alt="Tim Komurindo Kombat PENS Raih penghargaan poster terbaik" />
                                <div className="absolute bottom-3 left-3">
                                    {/* <div className="bg-yellow-200 rounded-md text-center py-1 px-4 mb-2">
                                        <p className="md:text-xs">Nov 5, 2018</p>
                                    </div> */}
                                    <ContentTitle className="text-white md:text-sm">Tim Dirgantara PENS Raih Penghargaan Poster Terbaik Dalam Workshop Komurindo Kombat</ContentTitle>
                                </div>
                            </Animated.Reveal>
                        </Animated.FromDirection>
                        <Animated.FromDirection className="relative md:col-span-2" from="left" animate={controls} custom={1} delay={0.6} duration={0.8}>
                            <Animated.Reveal from="left" className="rounded-3xl w-full h-96 md:h-44" animate={controls} delay={0.8} duration={1.2}>
                                <a href="https://www.pens.ac.id/2017/09/03/2017-09-03-9-644-tim-dirgantara-pens-kembali-jaya-di-ajang-komurindo-kombat-2017/" target="_blank">
                                    <img className="w-full h-full object-cover rounded-lg transition-all duration-500 transform hover:scale-110" src="./img/news/3.jpg" alt="Tim Komurindo Kombat PENS Juara Umum Komurindo Kombat 2017" />
                                    <div className="absolute bottom-3 left-3">
                                        {/* <div className="bg-yellow-200 rounded-md text-center py-1 px-4 mb-2">
                                            <p className="md:text-xs">Sep 3, 2017</p>
                                        </div> */}
                                        <ContentTitle className="text-white md:text-sm"> Tim Dirgantara PENS, Kembali Jaya di Ajang Komurindo-Kombat 2017</ContentTitle>
                                    </div>
                                </a>
                            </Animated.Reveal>
                        </Animated.FromDirection>
                    </div>
                </div>

                {/* <Animated.FromDirection className="flex justify-center mt-8" from="bottom" animate={controls} custom={2} delay={1}>
                    <RoundedButton as="a" href="https://github.com/itsfaqih">
                        {language.value === 'en' ? 'See more' : 'Lihat Selengkapnya'}
                    </RoundedButton>
                </Animated.FromDirection> */}
            </section>
        );
    }
);

export default News;
