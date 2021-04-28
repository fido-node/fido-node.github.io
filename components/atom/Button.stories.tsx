import { storiesOf } from '@storybook/react';
import Button from './Button';

storiesOf('Design System/Atoms/Button', module).add('with text', () => {
  return <Button text="Hello World" />;
});

storiesOf('Design System/Atoms/Button', module).add('with emoji', () => {
  return <Button text="😀 😎 👍 💯" />;
});
