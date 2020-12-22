import { MeetTeam } from 'components/templates';
import LanguageContext from 'contexts/language';
import {
    header as headerData,
    team as teamsData,
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

export default function Team() {
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
        <MeetTeam
            sections={locale.sections}
            data={{
                header: {
                    data: headerData,
                    text: locale.header,
                },
                team: {
                    items: teamsData,
                },
                about: {
                    text: locale.about.text,
                },
                contact: contactData
            }}
            locale={{ value: languange.value, change: languange.change }}
        />
    );
}
