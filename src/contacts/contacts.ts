import Contacts from '../../components/personal-card/elements/Contacts';

export type ContactType = 'tg' | 'mail' | 'twitter' | 'github' | 'linkedin' | 'twitch';

export interface Contact {
  id: string;
  type: ContactType;
}

type MapType = { [key in ContactType]: (id: string) => string };

const typeToFormer: MapType = {
  tg: (id) => `https://t.me/${id}`,
  mail: (id) => `mailto:${id}`,
  twitter: (id) => `https://twitter.com/${id}`,
  github: (id) => `https://github.com/${id}`,
  linkedin: (id) => `https://linkedin.com/in/${id}`,
  twitch: (id) => `https://www.twitch.tv/${id}`
};

export function contactToLink(contact: Contact): string {
  return typeToFormer[contact.type](contact.id);
}
