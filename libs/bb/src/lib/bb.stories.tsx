import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Bb } from './bb';

export default {
  component: Bb,
  title: 'Bb',
} as ComponentMeta<typeof Bb>;

const Template: ComponentStory<typeof Bb> = (args) => <Bb {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
