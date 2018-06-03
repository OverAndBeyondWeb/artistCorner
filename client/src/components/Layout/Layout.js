import React from 'react';

import Wrapper from '../Wrapper/Wrapper';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';

const layout = (props) => {
  return (
    <Wrapper>
      <Navigation/>
      {props.children}
      <Footer/>
    </Wrapper>
  )
};

export default layout;
