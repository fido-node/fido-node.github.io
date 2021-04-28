import * as React from 'react';

type Props = {
  imgUrl: string;
};

export default ({ imgUrl }: Props) => (
  <img src={imgUrl} className={'border rounded-full h-48 sm mx-auto'}></img>
);
