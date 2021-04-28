import * as React from 'react';
import Avatar from './elements/Avatar';
import Contacts from './elements/Contacts';
import Description from './elements/Description';
import Title from './elements/Title';

type Props = {};

export default ({}: Props) => (
  <div className={'flex flex-col sm mx-auto  lg:w-1/3 '}>
    <Avatar imgUrl="./avatar.jpg" />
    <Title />
    <Description />
    <Contacts />
  </div>
);
