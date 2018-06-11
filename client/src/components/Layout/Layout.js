import React from 'react';

import Wrapper from '../Wrapper/Wrapper';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import { AuthContext } from '../../context/AuthContext';

const layout = (props) => {
  return (
    <Wrapper>
      <AuthContext.Consumer>
        {context => <Navigation context={context} />}
      </AuthContext.Consumer>
      {props.children}
      <Footer/>
    </Wrapper>
  )
};

export default layout;
