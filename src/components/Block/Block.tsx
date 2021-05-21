import React from 'react';
import PropTypes, { InferProps } from 'prop-types';
import { View, StyleSheet } from 'react-native';

function Block({
  row,
  flex,
  center,
  middle,
  top,
  bottom,
  right,
  left,
  shadow,
  space,
  start,
  end,
  fluid,
  height,
  shadowColor,
  width,
  children,
  style,
  ...rest
}: InferProps<typeof Block.propTypes>) {
  const styleBlock = [
    styles.block,
    row && styles.row,
    flex && { flex: flex === true ? 1 : flex },
    center && styles.center,
    middle && styles.middle,
    top && styles.top,
    bottom && styles.bottom,
    right && styles.right,
    left && styles.left,
    space && { justifyContent: `space-${space}` },
    start && { justifyContent: `flex-start` },
    end && { justifyContent: `flex-end` },
    shadow && styles.shadow,
    fluid && styles.fluid,
    height && { height },
    width && { width },
    shadowColor && { shadowColor },
    style,
  ];

  return (
    <View style={styleBlock} {...rest}>
      {children}
    </View>
  );
}

Block.defaultProps = {
  row: false,
  flex: false,
  center: false,
  middle: false,
  top: false,
  bottom: false,
  right: false,
  left: false,
  shadow: false,
  start: false,
  end: false,
  space: null,
  fluid: false,
  height: null,
  width: null,
  shadowColor: null,
  styles: {},
};

Block.propTypes = {
  row: PropTypes.bool,
  flex: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  center: PropTypes.bool,
  middle: PropTypes.bool,
  top: PropTypes.bool,
  bottom: PropTypes.bool,
  start: PropTypes.bool,
  end: PropTypes.bool,
  right: PropTypes.bool,
  left: PropTypes.bool,
  shadow: PropTypes.bool,
  space: PropTypes.string,
  fluid: PropTypes.bool,
  height: PropTypes.number,
  width: PropTypes.number,
  shadowColor: PropTypes.string,
  children: PropTypes.node,
  style: PropTypes.any,
  theme: PropTypes.any,
};

const styles = StyleSheet.create({
  block: {
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row',
  },
  middle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  center: {
    alignItems: 'center',
    alignSelf: 'center',
  },
  left: {
    alignItems: 'flex-start',
  },
  right: {
    alignItems: 'flex-end',
  },
  top: {
    alignItems: 'flex-start',
    alignSelf: 'flex-start',
  },
  bottom: {
    alignItems: 'flex-end',
    alignSelf: 'flex-end',
  },
  fluid: {
    width: 'auto',
  },
  shadow: {
    backgroundColor: 'white',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
});

export default Block;
