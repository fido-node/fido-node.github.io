import { DateTime } from 'luxon';
import * as React from 'react';

type Props = {
  name: string;
  date: DateTime;
};

export default ({ name, date }: Props) => (
  <div className="flex-row pt-1 text-gray-500">
    <div className={'hover:text-black'}>{name}</div>
    <div className={'text-sm hover:text-black'}>
      {date.toLocaleString({ month: 'long', day: 'numeric' })}
    </div>
  </div>
);
