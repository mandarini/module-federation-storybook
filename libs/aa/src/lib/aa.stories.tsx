import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Aa } from './aa';

export default {
  component: Aa,
  title: 'Aa',
} as ComponentMeta<typeof Aa>;

const Template: ComponentStory<typeof Aa> = (args) => <Aa {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
