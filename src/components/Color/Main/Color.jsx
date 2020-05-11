import React from 'react';
import { AlphaPicker as Picker } from 'react-color';

// lets use different films and layers that add cultural context

// the color pickers need to be in tooltips

const red = { r: 255, g: 0, b: 0, a: 1 };


const Color = () => (
  <div>
    <h1>COLOR</h1>
    <Picker rgb={red} direction='vertical' height='316px' width='16px'/>
  </div>
);

export default Color