import { storiesOf } from '@storybook/react';
import { DateTime } from 'luxon';
import PostOverviewCard, { PostOverviewCardProps } from './PostOverviewCard';

storiesOf('Components/Post Overview Card', module)
  .add('static', () => {
    const defaultPreview: PostOverviewCardProps = {
      createdAt: DateTime.now(),
      createdBy: {
        name: 'fido_node',
        avatar: 'avatar.jpg'
      },
      path: '/blog/asdasdasdasd',
      title: ' The Ultimate Web Developer Resources List 🔥Awesome 200+ Resources',
      preview: {},
      tags: [{ text: 'asdf' }, { text: 'ghjkl' }, { text: 'qwertyuioio' }]
    };

    return <PostOverviewCard {...defaultPreview} />;
  })
  .add('with preview', () => {
    const defaultPreview: PostOverviewCardProps = {
      createdAt: DateTime.now(),
      createdBy: {
        name: 'fido_node',
        avatar: 'avatar.jpg'
      },
      path: '/blog/asdasdasdasd',
      title: 'How to create your personal static blog and do not lost your mind. 🔥',
      preview: {
        headerMedia: {
          key: 'Image',
          url: './pattern.png',
          alt: 'awesome pattern'
        }
      },
      tags: [
        { text: 'next.js' },
        { text: 'typescript' },
        { text: 'tailwind' },
        { text: 'storybook' }
      ]
    };

    return <PostOverviewCard {...defaultPreview} />;
  })
  .add('without tags', () => {
    const defaultPreview: PostOverviewCardProps = {
      createdAt: DateTime.now(),
      createdBy: {
        name: 'fido_node',
        avatar: 'avatar.jpg'
      },
      path: '/blog/asdasdasdasd',
      title: ' The Ultimate Web Developer Resources List 🔥Awesome 200+ Resources',
      preview: {},
      tags: []
    };

    return <PostOverviewCard {...defaultPreview} />;
  });
