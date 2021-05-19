import { DateTime } from 'luxon';
import * as React from 'react';
import { PostBody, Preview, Tag } from '../../src/posts/post';
import { User } from '../../src/user/user';
import { isDefined } from '../../src/util/types';
import Avatar from './elements/Avatar';
import NameAndData from './elements/NameAndData';
import Share from './elements/Share';
import Tags from './elements/Tags';

export type PostOverviewCardProps = {
  createdAt: DateTime;
  createdBy?: User;
  path: string;
  title: string;
  preview: Preview;
  tags: Tag[];
};

export default ({ createdBy, createdAt, title, tags, path, preview }: PostOverviewCardProps) => (
  <div className={'flex flex-col border rounded-2xl border-gray-300 overflow-hidden max-w-4xl'}>
    {isDefined(preview.headerMedia) ? (
      <img
        src={preview.headerMedia.url}
        alt={preview.headerMedia.alt}
        className={'object-cover h-52 w-full'}></img>
    ) : null}

    {isDefined(createdBy) ? (
      <div className={'flex flex-row pt-2 pl-2'}>
        <Avatar imgUrl={createdBy.avatar} />
        <NameAndData name={createdBy.name} date={createdAt} />
      </div>
    ):  <div className={'flex flex-row pt-16'}></div>}
  
    <div className={'flex flex-row px-16'}>
      <a className={'text-4xl font-bold hover:text-purple-500 '} href={path}>
        {title}
      </a>
    </div>
    {tags.length > 0 ? (
      <div className={'flex flex-row pl-16 pt-2'}>
        <Tags tags={tags} />
      </div>
    ) : null}

    <div className={'flex flex-row  px-16 self-end'}>
      <Share link={path} text={title} />
    </div>

    <div className={'flex flex-row  pl-16 pb-6'}></div>
  </div>
);
