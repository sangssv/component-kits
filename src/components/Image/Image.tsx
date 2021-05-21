import React from 'react';
import PropTypes, { InferProps } from 'prop-types';
import FastImage from 'react-native-fast-image';

function Image({ source, ...props }: InferProps<typeof Image.propTypes>) {
  return (
    <FastImage
      {...props}
      source={{
        ...source,
        priority: FastImage.priority.normal,
      }}
      resizeMode={FastImage.resizeMode.contain}
    />
  );
}

Image.propTypes = {
  source: PropTypes.any.isRequired,
  style: PropTypes.any,
};

export default Image;
