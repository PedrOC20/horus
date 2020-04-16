import React from 'react';

import './custom-button.styles.scss';

const CustomButton = props => (
  <button className='button'>
    {props.icon ? props.icon : null}
    {props.children}
  </button>
);

export default CustomButton;