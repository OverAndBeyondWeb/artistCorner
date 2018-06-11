import React from 'react';
import { Image } from 'semantic-ui-react';

const Avatar = (props) => {
  return (
    <div>
    <Image src={props.avatarURL} avatar />
    <span>{props.username}</span>
  </div>
  )
};

export default Avatar;
