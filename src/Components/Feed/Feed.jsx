import React from 'react';
import FeedPhotos from './FeedPhotos';
import FeedModal from './FeedModal';

const Feed = () => {
  // Estado reativo
  const [modalPhoto, setModalPhoto] = React.useState(null);

  return (
    <div>
      {modalPhoto && (
        <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} />
      )}
      <FeedPhotos setModalPhoto={setModalPhoto} />
    </div>
  );
};

export default Feed;
