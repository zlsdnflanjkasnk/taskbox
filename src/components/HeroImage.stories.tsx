import React from 'react';
import HeroImage from './HeroImage';

export default {
  title: 'Components/HeroImage',
  component: HeroImage,
};

const Template = (args) => <HeroImage {...args} />;

export const Enabled = Template.bind({});
Enabled.args = {
  title: 'Welcome to Our Site',
  subtitle: 'Discover amazing experiences',
  imageSrc: 'https://images.unsplash.com/photo-1738522477430-6a09da138bbb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8',
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  title: 'Disabled Hero Image',
  subtitle: '',
  imageSrc: '',
  disabled: true,
};
