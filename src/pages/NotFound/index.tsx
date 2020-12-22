import { Landing } from 'components/templates';
import LanguageContext from 'contexts/language';
import { Link } from 'react-router-dom';

import {
    header as headerData,
    projects as projectsData,
    blogs as blogsData,
    skills as skillsData,
    contact as contactData
} from 'data';
import {
    sections as sectionsEn,
    header as headerEn,
    about as aboutEn,
    skills as skillsEn,
} from 'localization/en';
import {
    sections as sectionsId,
    header as headerId,
    about as aboutId,
    skills as skillsId,
} from 'localization/id';
import React, { useContext } from 'react';

export default function NotFound() {
    const languange = useContext(LanguageContext);

    let locale;

    if (languange.value === 'en') {
        locale = {
            sections: sectionsEn,
            header: headerEn,
            about: aboutEn,
            skills: skillsEn,
        };
    } else {
        locale = {
            sections: sectionsId,
            header: headerId,
            about: aboutId,
            skills: skillsId,
        };
    }

    return (
        <div className="bg-indigo-600 text-white min-h-screen flex items-center ">
            <div className="container mx-auto p-4 flex flex-wrap items-center">
                <div className="w-full md:w-5/12 text-center p-4">
                    <img src="../img/logo/not-found.svg" alt="Not Found" />
                </div>
                <div className="w-full md:w-7/12 text-center md:text-left p-4">
                    {/* <div className="text-6xl font-medium">404</div> */}
                    <div className="text-xl md:text-3xl font-medium mb-4">
                        Oops. This page has gone missing.
            </div>
                    <div className="text-lg mb-8">
                        You may have mistyped the address or the page may have moved.
            </div>
                    <a href="#" className="border border-white rounded p-4">    <Link to="/">Go Home</Link></a>
                </div>
            </div>
        </div>
    );
}
