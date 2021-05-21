import * as React from 'react';
import PropTypes, { InferProps } from 'prop-types';
import { Text as RNText, StyleSheet } from 'react-native';
import Colors from '../Colors/Colors';

function Text({ children, style, color, weight, size, numberOfLines, ...props }: InferProps<typeof Text.propTypes>) {
  let textStyles = [styles.defaultStyle, style];

  if (color) textStyles.push({ color });

  if (size) textStyles.push({ fontSize: size });

  if (weight) {
    let fontWeight;

    switch (weight) {
      case 'light':
        fontWeight = '300';
        break;
      case 'normal':
        fontWeight = '400';
        break;
      case 'medium':
        fontWeight = '500';
        break;
      case 'semi-bold':
        fontWeight = '600';
        break;
      case 'bold':
        fontWeight = '700';
        break;
      case 'extra-bold':
        fontWeight = '800';
        break;
      default:
        fontWeight = '400';
        break;
    }

    textStyles.push({ fontWeight });
  }

  return (
    <RNText {...props} numberOfLines={numberOfLines} style={textStyles}>
      {children}
    </RNText>
  );
}

const styles = StyleSheet.create({
  defaultStyle: {
    fontSize: 14,
    color: Colors.default,
  },
});

Text.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.string,
  ]).isRequired,
  color: PropTypes.string,
  weight: PropTypes.oneOf([
    'light',
    'normal',
    'medium',
    'semi-bold',
    'bold',
    'extra-bold',
  ]),
  size: PropTypes.number,
  style: PropTypes.any,
  numberOfLines: PropTypes.any,
};

export default Text;
