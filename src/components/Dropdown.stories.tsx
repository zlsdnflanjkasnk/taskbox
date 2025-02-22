import React from 'react';
import Dropdown from './Dropdown';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
};

const Template = (args) => <Dropdown {...args} />;

export const Enabled = Template.bind({});
Enabled.args = {
  label: 'Select an option',
  options: ['Option 1', 'Option 2', 'Option 3'],
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Select an option',
  options: ['Option 1', 'Option 2', 'Option 3'],
  disabled: true,
};
