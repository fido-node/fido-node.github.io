import { storiesOf } from '@storybook/react';
import PersonalCard from './PersonalCard';

storiesOf('Components/Personal Card', module).add('with emoji', () => {
  return <PersonalCard />;
});
