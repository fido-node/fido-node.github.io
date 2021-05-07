import * as React from 'react';

type Props = {
  imgUrl: string;
};

export default ({ imgUrl }: Props) => (
  <img src={imgUrl} className={'border rounded-full w-10 h-10 m-2'}></img>
);
