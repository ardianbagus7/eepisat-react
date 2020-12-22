import { ContentTitle, TitleLine } from 'components/atoms';
import Icons from 'components/icons';
import { LanguageContext } from 'contexts';
import React, { useContext } from 'react';
import classNames from 'classnames';
import TeamCardProps from 'components/molecules/TeamCard/types';

export default function TeamCard({ data, className }: TeamCardProps) {
  const language = useContext(LanguageContext);
  const { title, description, image } = data;

  return (
    <article className={classNames('grid grid-rows-2 mt-6 lg:grid-cols-2 lg:grid-rows-1', className)}>
      <div className="mx-auto mt-6 lg:mr-0 lg:ml-auto lg:mt-0">
        <img src={image} alt="" />
      </div>
      <div className="pl-10 self-center">
        <ContentTitle className="">
          {title}
          <TitleLine
            className={classNames({
              'ml-0 -mt-0': 'left',
            })}
          /> </ContentTitle>

        <p className="mt-5 mb-8 text-sm text-gray-700">{description}</p>
      </div>
    </article>
    
  );
}
