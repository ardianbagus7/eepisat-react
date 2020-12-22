import React from 'react';
import { Icon } from '@iconify/react';
import { HighlightedTextIcon } from 'components/molecules';
import { AboutSectionContentProps } from 'components/organisms/About/types';
import reactIcon from '@iconify/icons-logos/react';
import tailwindcssIcon from '@iconify/icons-logos/tailwindcss-icon';

const Text = () => (
  <>
    EEPISAT is a part of PENS Aerospace Team which under the {' '}
    <span className="font-bold text-gray-800">Dirgantara PENS</span>. 
    It has the ambition to continue the goals to the  <span className="font-bold text-gray-800">International Competition</span>. 
    After the previous winning for the National Competition at <span className="font-bold text-gray-800">Komurindo Kombat</span>.
    held by LAPAN RI.{' '}
    {/* <HighlightedTextIcon
      as="a"
      href="https://tailwindcss.com"
      className="mx-2"
      icon={<Icon icon={tailwindcssIcon} />}
    >
      TailwindCSS
    </HighlightedTextIcon>{' '} */}
    {/* and{' '} */}
  </>
);

const about: AboutSectionContentProps = {
  text: <Text />,
};

export default about;
