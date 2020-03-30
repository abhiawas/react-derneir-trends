import React from 'react';
import './custom-button-google-styles.css'


const GoogleButton = ({children,...otherProps}) => (
    <div id="customBtn">
      <span class="icon"></span>
      <span {...otherProps}>{children}</span>
    </div>
)

export default GoogleButton;