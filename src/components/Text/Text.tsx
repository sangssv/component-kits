import * as React from 'react';
import { Text as RNText, TextProps as RNTextProps, StyleSheet } from 'react-native';
import Colors from '../../theme/colors';

const defaultProps = {
  weight: 'normal',
  size: 14,
  color: Colors.default,
};

interface TextProps extends RNTextProps {
  children: string | React.ReactNode;
  style?: any;
  color?: string;
  weight?: 'light' | 'normal' | 'medium' | 'semi-bold' | 'bold' | 'extra-bold';
  size?: number;
}

function Text({ children, style, color, weight, size, ...props }: TextProps) {
  let fontWeight;
  if (weight) {
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
  }

  let textStyles = [
    styles.defaultStyle,
    color && { color },
    size && { fontSize: size },
    fontWeight && { fontWeight },
  ];

  return (
    <RNText {...props} style={[textStyles, style]}>
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

Text.defaultProps = defaultProps;

export default Text;
