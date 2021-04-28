import * as React from 'react';

type Props = {
  text: string;
};

export default ({ text }: Props) => <button className={'border rounded'}>{text}</button>;
