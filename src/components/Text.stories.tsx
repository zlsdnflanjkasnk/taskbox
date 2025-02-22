import React from 'react';
import Text from './Text';

export default {
  title: 'Components/Text',
  component: Text,
};

const Template = (args) => <Text {...args} />;

export const Enabled = Template.bind({});
Enabled.args = {
  content: 'This is an enabled text component',
};

export const Disabled = Template.bind({});
Disabled.args = {
  content: 'This is a disabled text component',
  disabled: true,
};
