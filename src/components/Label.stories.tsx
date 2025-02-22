import React from 'react';
import Label from './Label';

// Default export defines metadata for Storybook
export default {
  title: 'Components/Label',  // The title is the path to the story in Storybook
  component: Label,
};

// Template to create label stories
const Template = (args) => <Label {...args} />;

// Story variations
export const Enabled = Template.bind({});
Enabled.args = {
  text: 'This is an enabled label',
  htmlFor: 'input-field',
};

export const Disabled = Template.bind({});
Disabled.args = {
  text: 'This is a disabled label',
  htmlFor: 'input-field',
  disabled: true,
};
