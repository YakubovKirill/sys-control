import { sizeConfig } from '@/app/globalConfig';
import React from 'react';

type WidthBoxPropType = {
  children: React.ReactNode,
}

const WidthBox = ({ children }: WidthBoxPropType) => {
  const style = [
    `max-w-[${sizeConfig.MEDIA.Small}px]`,
    'flex',
    'items-center',
    'justify-center',
  ].join(' ');

  return (
    <div className={style}>{ children }</div>
  );
};

export default WidthBox;
