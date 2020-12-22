import { ContentTitle } from 'components/atoms';
import Icons from 'components/icons';
import { LanguageContext } from 'contexts';
import React, { useContext } from 'react';
import classNames from 'classnames';
import DivisionCardProps from 'components/molecules/DivisionCard/types';

export default function DivisionCard({ data, className }: DivisionCardProps) {
  const language = useContext(LanguageContext);
  const { title, description, image} = data;

  return (
    <article
      className={classNames('flex flex-col bg-white rounded-xl shadow py-4 px-6 text-center items-center', className)}
    >
      <img className="w-20 h-20" src={image} alt=""/>
      <ContentTitle className="mt-4">{title}</ContentTitle>
      <p className="mt-2 mb-8 text-sm text-gray-700">{description}</p>
     
    </article>
  );
}
