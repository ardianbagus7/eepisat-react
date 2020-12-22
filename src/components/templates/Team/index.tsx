import { Container } from 'components/atoms';
import { About, Contact, SubHeader, Navigation, Sponsorship, Team } from 'components/organisms';
import { AboutSectionContentProps } from 'components/organisms/About/types';
import { TeamSectionContentProps } from 'components/organisms/Team/types';
import { ContactSectionContentProps } from 'components/organisms/Contact/types';
import HeaderProps from 'components/organisms/Header/types';
import { ProjectsSectionContentProps } from 'components/organisms/Projects/types';
import { SkillsSectionContentProps } from 'components/organisms/Skills/types';
import { LocaleProps } from 'contexts/language';
import React, { useState, useEffect } from 'react';
import { useRef } from 'react';
import Sponsorships from 'components/organisms/Sponsorship';
import classNames from 'classnames';

interface Props {
    data: {
        header: HeaderProps;
        about: AboutSectionContentProps;
        contact: ContactSectionContentProps;
        team: TeamSectionContentProps;
    };
    locale: LocaleProps;
    sections: { about: string; projects: string; blogs: string; skills: string; contact: string };
}

export default function MeetTeam({ data, locale, sections }: Props) {
    const { header, about, contact, team } = data;
    const lowerSectionRef = useRef();

    const [scroll, setScroll] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 50);
        });
    }, []);

    return (
        <>
            <Navigation className={classNames("fixed z-30 py-4 transition duration-500", scroll ? "bg-white" : "")}  locale={locale} sections={sections} />
            <SubHeader data={header.data} text={header.text} lowerSectionRef={lowerSectionRef} />
            <Container className="">
                <div className="flex flex-wrap">
                    <main className="w-full mt-12">
                        <Team
                            title='Meet EEPISAT Team'
                            content={{
                                items: team.items,
                            }}
                            className="pt-12 mt-10"
                        />
                        <Sponsorships
                            title='Sponsorship'
                            content={{ text: '', items: [''] }}
                            className="pt-24 mt-28"
                        />
                    </main>
                    <footer className="w-full pt-20 pb-16 mt-32">
                        <Contact
                            title={sections.contact}
                            content={{
                                email: contact.email,
                                socials: contact.socials,
                            }}
                        />
                    </footer>
                </div>
            </Container>
        </>
    );
}
