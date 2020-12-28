import React from 'react';
// import './custom-button.styles.scss';
import { CustomButtonContainer } from './custom-button.styles';

const CustomButton = ({ children, ...props }) => (
  <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
);

export default CustomButton;


// import React from 'react';

// 
// //new styled-componet are below
// import {CustomButtonContainer} from './custom-button.styles.jsx'

// const CustomButton =({children,...props})=>(
// <CustomButtonContainer {...props}>
// {children}

// </CustomButtonContainer>
// );

// 

//below are old styles method will cause problems to Main Css and no longer distructure anymore all in style java script
// const CustomButton =({children,isGoogleSignIn ,inverted,...otherProps})=>(
// <button className={`${inverted?'inverted':''} ${isGoogleSignIn?'google-sign-in':''} custom-button`} {...otherProps}>
// {children}
// </button>
// );
// export default CustomButton;