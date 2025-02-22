import React, { useState } from 'react';
import RadioButton from './RadioButton';

export default {
  title: 'Components/RadioButton',
  component: RadioButton,
};

const Template = (args) => {
  const [selected, setSelected] = useState('');

  return (
    <div>
      <RadioButton {...args} value="option1" checked={selected === 'option1'} onChange={setSelected} />
      <RadioButton {...args} value="option2" checked={selected === 'option2'} onChange={setSelected} />
    </div>
  );
};

export const Enabled = Template.bind({});
Enabled.args = {
  label: 'Option',
  name: 'radio-group',
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Option',
  name: 'radio-group',
  disabled: true,
};
