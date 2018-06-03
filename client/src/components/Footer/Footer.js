import React from 'react';
import { Segment } from 'semantic-ui-react';

export default () => {
  return (
    <footer>
      <Segment inverted>
        <p>Copyright &copy; {new Date().getFullYear()}</p>
      </Segment>
    </footer>
  )
};
