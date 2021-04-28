import * as React from 'react';
import '@fortawesome/fontawesome-svg-core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
  faTelegram,
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
    <a
      className={'text-5xl p-3 text-gray-600' + ' ' + iconDescr[1]}
      href={contactToLink({ id, type })}
      target="_blank">
      <FontAwesomeIcon key={type} icon={iconDescr[0]} />
    </a>
  );
};

export default ({ contacts }: Props) => (
  <div className={'text-center'}>{contacts.map((c) => ContactComp(c))}</div>
);
