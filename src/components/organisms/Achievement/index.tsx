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



const Achievement = forwardRef<HTMLElement | undefined, ProjectsSectionProps>(
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

        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };


        return (
            <section
                id="achievement"
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

                <div className="relative mt-10 md:mt-8">
                    {/* <Animated.FromDirection
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
                    </Animated.FromDirection> */}


                    <div className="relative wrap overflow-hidden py-10 h-full">
                        <div className="border-2-2 absolute border-opacity-100 border-indigo-400 h-full border md:left-1/2 left-10 hidden md:flex" ></div>

                        <div className="mb-8 flex justify-between md:flex-row-reverse items-center w-full left-timeline">
                            <div className="order-1 md:w-5/12"></div>
                            <div className="z-20  items-center order-1 bg-yellow-200 shadow-lg w-auto h-auto px-5 py-1 rounded-full hidden md:flex">
                                <h1 className="mx-auto font-semibold text-lg text-gray-500 ">2019</h1>
                            </div>
                            <Animated.FromDirection className="order-1 bg-gray-100 rounded-lg shadow-lg w-full md:w-5/12" from="right" animate={controls} custom={1} delay={1.2} duration={0.8}>
                                <Animated.Reveal from="right" className=" px-4 py-4" animate={controls} delay={1.4} duration={1.2}>
                                    <Slider {...settings} className="mb-10 rounded-lg w-full h-auto">
                                        <div>
                                            <img className="rounded-lg w-full h-auto" src="./img/achievement/timeline-2019.jpg" alt="" />
                                        </div>
                                        <div>
                                            <img className="rounded-lg w-full h-auto" src="./img/achievement/achievment-1.png" alt="" />
                                        </div>
                                        <div>
                                            <img className="rounded-lg w-full h-auto" src="./img/achievement/achievment-2.png" alt="" />
                                        </div>
                                        <div>
                                            <img className="rounded-lg w-full h-auto" src="./img/achievement/achievment-3.png" alt="" />
                                        </div>
                                    </Slider>

                                    <ContentTitle className="mb-3 font-bold text-gray-800 text-xl"> Juara Umum Komurindo Kombat 2018-2019</ContentTitle>
                                    <ul className="list-disc ml-5">
                                        <li><p className="text-sm  text-gray-900 text-opacity-100">Juara 1 Divisi Muatan Roket</p></li>
                                        <li><p className="text-sm  text-gray-900 text-opacity-100">Juara 1 Divisi Wahana Sistem Kendali</p></li>
                                        <li><p className="text-sm  text-gray-900 text-opacity-100">Juara 3 Divisi Muatan Balon Atmosfer</p></li>
                                        <li><p className="text-sm  text-gray-900 text-opacity-100">Presentasi Terbaik Divisi Wahana Sistem Kendali</p></li>
                                    </ul>

                                </Animated.Reveal>
                            </Animated.FromDirection>
                        </div>

                        <div className="mb-8 flex justify-between items-center w-full right-timeline">
                            <div className="order-1 md:w-5/12"></div>
                            <div className="z-20  items-center order-1 bg-yellow-200 shadow-lg w-auto h-auto px-5 py-1 rounded-full hidden md:flex">
                                <h1 className="mx-auto font-semibold text-lg text-gray-500">2017</h1>
                            </div>
                            <Animated.FromDirection className="order-1 bg-gray-100 rounded-lg shadow-lg w-full md:w-5/12" from="left" animate={controls} custom={1} delay={1.6} duration={0.8}>
                                <Animated.Reveal from="left" className=" px-4 py-4" animate={controls} delay={1.8} duration={1.2}>
                                    <Slider {...settings} className="mb-10 rounded-lg w-full h-auto">
                                        <div>
                                            <img className="rounded-lg w-full h-auto" src="./img/achievement/timeline-2017.jpg" alt="" />
                                        </div>
                                    </Slider>
                                    <ContentTitle className="mb-3 font-bold text-gray-800 text-xl"> Juara Umum Komurindo Kombat 2017</ContentTitle>
                                    <ul className="list-disc ml-5">
                                        <li><p className="text-sm  text-gray-900 text-opacity-100">Juara 1 Divisi Muatan Balon Atmosfer</p></li>
                                        <li><p className="text-sm  text-gray-900 text-opacity-100">Juara 2 Divisi Muatan Roket</p></li>
                                        <li><p className="text-sm  text-gray-900 text-opacity-100">Juara 2 Divisi Wahana Sistem Kendali</p></li>
                                    </ul>
                                </Animated.Reveal>
                            </Animated.FromDirection>
                        </div>

                        <div className="mb-8 flex justify-between md:flex-row-reverse items-center w-full left-timeline">
                            <div className="order-1 md:w-5/12"></div>
                            <div className="z-20  items-center order-1 bg-yellow-200 shadow-lg w-auto h-auto px-5 py-1 rounded-full hidden md:flex">
                                <h1 className="mx-auto font-semibold text-lg text-gray-500">2016</h1>
                            </div>
                            <Animated.FromDirection className="order-1 bg-gray-100 rounded-lg shadow-lg w-full md:w-5/12 px-4 py-4" from="right" animate={controls} custom={1} delay={2.0} duration={0.8}>
                                <Animated.Reveal from="right" className="px-4 py-4" animate={controls} delay={2.2} duration={1.2}>
                                    <Slider {...settings} className="mb-10 rounded-lg w-full h-auto">
                                        <div>
                                            <img className="rounded-lg w-full h-auto" src="./img/achievement/timeline-2016.jpg" alt="" />
                                        </div>
                                    </Slider>
                                    <ContentTitle className="mb-3 font-bold text-gray-800 text-xl"> Juara Umum Komurindo Kombat 2016</ContentTitle>
                                    <ul className="list-disc ml-5">
                                        <li><p className="text-sm  text-gray-900 text-opacity-100">Juara 1 Divisi Muatan Balon Atmosfer</p></li>
                                        <li><p className="text-sm  text-gray-900 text-opacity-100">Juara 2 Divisi Muatan Roket</p></li>
                                        <li><p className="text-sm  text-gray-900 text-opacity-100">Juara 2 Divisi Wahana Sistem Kendali</p></li>
                                        <li><p className="text-sm  text-gray-900 text-opacity-100">Desain Terbaik Divisi Muatan Roket</p></li>
                                    </ul>

                                </Animated.Reveal>
                            </Animated.FromDirection>
                        </div>

                    </div>
                </div >

                {/* <Animated.FromDirection className="flex justify-center mt-8" from="bottom" animate={controls} custom={2} delay={1}>
                    <RoundedButton as="a" href="https://github.com/itsfaqih">
                        {language.value === 'en' ? 'See more' : 'Lihat Selengkapnya'}
                    </RoundedButton>
                </Animated.FromDirection> */}
            </section >
        );
    }
);

export default Achievement;
