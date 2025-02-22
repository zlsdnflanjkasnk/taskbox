import React from 'react';
import Card from './Card';

export default {
  title: 'Components/Card',
  component: Card,
};

const Template = (args) => <Card {...args} />;

export const Enabled = Template.bind({});
Enabled.args = {
  title: 'Card Title',
  content: 'This is an example card with content.',
  imageSrc: 'https://images.unsplash.com/photo-1739531944447-2c68bc64d728?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8',
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  title: 'Disabled Card',
  content: 'This card is disabled.',
  imageSrc: '',
  disabled: true,
};
