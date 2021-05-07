import { DateTime } from 'luxon';
import * as React from 'react';

import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const twitterShareLink = 'https://twitter.com/intent/tweet';

type Props = {
  link: string;
  text: string;
};

function buildTwitterShareLink(link: string, text: string): string {
  return `${twitterShareLink}?text=${escape(text.slice(0, 279))}&url=${encodeURI(link)}`;
}

export default ({ link, text }: Props) => {
  const twitterUrl = buildTwitterShareLink(link, text);
  return (
    <div className={'text-gray-500 flex flex-row space-x-3 items-center'}>
      <div>Share:</div>
      <a
        className={'text-blue-500 hover:text-blue-700 text-3xl '}
        href={twitterUrl}
        target="_blank">
        <FontAwesomeIcon icon={faTwitter} />
      </a>
    </div>
  );
};
