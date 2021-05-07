import * as React from 'react';
import { Tag } from '../../../src/posts/post';

type Props = {
  tags: Tag[];
};

export default ({ tags }: Props) => (
  <div className={'flex flex-row py-2 space-x-2'}>
    {tags.map((t) => (
      <div className={'flex rounded-md text-sm text-gray-500 hover:text-black underline'}>
        <a>{'#' + t.text}</a>
      </div>
    ))}
  </div>
);
