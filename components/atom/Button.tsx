import * as React from 'react';

type Props = {
  text: string;
};

export default ({ text }: Props) => (
  <button className={'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'}>
    {text}
  </button>
);
