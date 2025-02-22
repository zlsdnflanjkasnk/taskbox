import React from 'react';
import Img from './Img';

export default {
  title: 'Components/Img',
  component: Img,
};

const Template = (args) => <Img {...args} />;

export const Enabled = Template.bind({});
Enabled.args = {
  src: 'https://images.unsplash.com/photo-1739047855450-27615bc98bc5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8',
  alt: 'Enabled Image',
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  src: "",
  alt: 'Disabled Image',
  disabled: true,
};
