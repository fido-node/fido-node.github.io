import * as React from 'react';

type Props = {
  href: string;
  children: string;
};

export default ({ href, children }: Props) => (
  <a className={'underline'} href={href}>
    {children}
  </a>
);
