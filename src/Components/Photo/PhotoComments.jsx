import React from 'react';
import { UserContext } from '../../UserContext';
import PhotoCommentsForm from './PhotoCommentsForm';

const PhotoComments = () => {
  const { login } = React.useContext(UserContext);

  return <div>{login && <PhotoCommentsForm id={props.id} />}</div>;
};

export default PhotoComments;
