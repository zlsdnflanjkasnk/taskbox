import React from 'react';
import Button from './Button';

// Default export defines metadata for Storybook
export default {
  title: 'Components/Button',  // The title is the path to the story in Storybook
  component: Button,
};

// Template to create button stories
const Template = (args) => <Button {...args} />;

// Story variations
export const Default = Template.bind({});
Default.args = {
  label: 'Hello',
  onClick: () => alert('Hello!'),
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled',
  onClick: () => alert('This should not trigger'),
  disabled: true,
};
