import * as React from 'react';
import '@fortawesome/fontawesome-svg-core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
  faTwitter,
  faGithub,
  faLinkedin,
  faTwitch,
  faTelegramPlane
} from '@fortawesome/free-brands-svg-icons';

import { IconDefinition, IconName, IconPrefix } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Contact, contactToLink, ContactType } from '../../../src/contacts/contacts';

type Props = {
  contacts: Contact[];
};

const typeToIcon: { [key in ContactType]: [IconDefinition, string?] } = {
  tg: [faTelegramPlane],
  mail: [faEnvelope],
  twitter: [faTwitter],
  github: [faGithub],
  linkedin: [faLinkedin],
  twitch: [faTwitch]
};

const ContactComp = ({ id, type }: Contact) => {
  const iconDescr = typeToIcon[type];
  return (
    <div className={'p-3'}>
      <a
        className={'text-5xl text-gray-500' + ' ' + iconDescr[1]}
        href={contactToLink({ id, type })}
        target="_blank">
        <FontAwesomeIcon key={type} icon={iconDescr[0]} />
      </a>
    </div>
  );
};

export default ({ contacts }: Props) => (
  <div className={'flex flex-row  justify-center'}>{contacts.map((c) => ContactComp(c))}</div>
);
