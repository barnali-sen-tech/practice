import React from 'react';
import Card from './Card';

const storyConfig = {
  title: 'Molecule/Card',
  component: Card,
  argTypes: {
    title: { control: 'text' },
    content: { control: 'text' },
  },
};

export default storyConfig;

const Template = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Sample Card Title',
  content: 'This is a sample card content.',
};

export const WithLongContent = Template.bind({});
WithLongContent.args = {
  title: 'Card with Long Content',
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, eget aliquam massa nisl quis neque.',
};