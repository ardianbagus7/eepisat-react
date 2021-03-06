import { Container } from 'components/atoms';
import { About, Blogs, Contact, Header, Navigation, Projects, Skills, News, Sponsorship, Achievement, Division } from 'components/organisms';
import { AboutSectionContentProps } from 'components/organisms/About/types';
import { BlogsSectionContentProps } from 'components/organisms/Blogs/types';
import { ContactSectionContentProps } from 'components/organisms/Contact/types';
import HeaderProps from 'components/organisms/Header/types';
import { ProjectsSectionContentProps } from 'components/organisms/Projects/types';
import { SkillsSectionContentProps } from 'components/organisms/Skills/types';
import { LocaleProps } from 'contexts/language';
import React, { useState, useEffect } from 'react';
import { useRef } from 'react';
import Sponsorships from 'components/organisms/Sponsorship';
import classNames from 'classnames';
import { DivisionSectionContentProps } from 'components/organisms/Division/types';

interface Props {
  data: {
    header: HeaderProps;
    about: AboutSectionContentProps;
    projects: ProjectsSectionContentProps;
    blogs: BlogsSectionContentProps;
    skills: SkillsSectionContentProps;
    contact: ContactSectionContentProps;
    division: DivisionSectionContentProps;
  };
  locale: LocaleProps;
  sections: { about: string; projects: string; blogs: string; skills: string; contact: string };
}

export default function Landing({ data, locale, sections }: Props) {
  const { header, about, projects, blogs, skills, contact, division } = data;
  const lowerSectionRef = useRef();

  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);

  return (
    <>
      <Navigation className={classNames("fixed z-30 py-4 transition duration-500", scroll ? "bg-white" : "")} locale={locale} sections={sections} />
      <Header data={header.data} text={header.text} lowerSectionRef={lowerSectionRef} />
      <Container className="pt-32">
        <div className="flex flex-wrap">
          <main className="w-full mt-12">
            <Division
              title='Our Division'
              content={{
                items: division.items,
              }}
              className="pt-12 mt-40"
            />
            <About
              title={sections.about}
              content={{
                text: about.text,
              }}
              className="pt-32 mt-24"
              ref={lowerSectionRef}
            />
            {/* <Projects
              title={sections.projects}
              content={{
                items: projects.items,
              }}
              className="pt-12 mt-40"
            /> */}
            {/* <Blogs
              title={sections.blogs}
              content={{ items: blogs.items }}
              className="mt-12 pt-28"
            /> */}
            <News
              title='Our News'
              content={{
                items: projects.items,
              }}
              className="pt-12 mt-40"
            />
            <Achievement
              title='Our Achievements'
              content={{
                items: projects.items,
              }}
              className="pt-12 mt-40"
            />
            <Sponsorships
              title='Sponsorship'
              content={{ text: skills.text, items: skills.items }}
              className="pt-24 mt-28"
            />
            {/* <Skills
              title={sections.skills}
              content={{ text: skills.text, items: skills.items }}
              className="pt-24 mt-28"
            /> */}
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
