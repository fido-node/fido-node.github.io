import { DateTime } from 'luxon';
import { User } from '../user/user';

export type Post = {
  createdAt: DateTime;
  createdBy: User;
  title: string;
  preview: Preview;
  tags: Tag[];
  postBody: PostBody;
};

export type Preview = {
  readTime?: number;
  headerMedia?: MediaElement;
};

export type Tag = {
  text: string;
};

export type PostBody = {
  elements: Element[];
};

type Paragraph = {
  key: 'Paragraph';
  text: string;
};

type Image = {
  key: 'Image';
  url: string;
  alt: string;
};

type MediaElement = Image;

type Element = Paragraph | MediaElement;
