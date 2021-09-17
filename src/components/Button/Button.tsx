import * as React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import Radius from '../../theme/radius';
import Colors from '../../theme/colors';
import Text from '../Text/Text';
import Spacing from '../../theme/spacing';

const defaultProps = {
  size: 'giant',
  type: 'primary',
  appearance: 'filled',
};

type ButtonProps = {
  appearance?: 'filled' | 'link';
  type?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large' | 'giant';
  title: string | React.ReactNode;
  buttonStyle?: any;
  titleStyle?: any;
  onPress?: () => void;
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
} & typeof defaultProps;

function Button({
  title,
  disabled,
  loading,
  buttonStyle,
  titleStyle,
  fullWidth,
  type,
  size,
  appearance,
  ...rest
}: ButtonProps) {
  const buttonStyles = [
    styles.defaultButton,
    styles[type],
    disabled && styles.disabled,
    styles[size],
    fullWidth && styles.fullWidth,
    buttonStyle,
  ];

  const renderContent = () => {
    const textStyles = [styles.customText, titleStyle];
    const isString = title && typeof title === 'string';

    if (isString) {
      return <Text style={textStyles}>{title}</Text>;
    }

    return title;
  };

  if (appearance === 'link') {
    return (
      <TouchableWithoutFeedback style={buttonStyle} {...rest}>
        <Text weight="medium" style={[styles.link, titleStyle]}>
          {title}
        </Text>
      </TouchableWithoutFeedback>
    );
  }

  return (
    <TouchableOpacity disabled={disabled} activeOpacity={0.8} style={buttonStyles} {...rest}>
      {renderContent()}
    </TouchableOpacity>
  );
}

Button.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large', 'giant']),
  type: PropTypes.oneOf(['primary', 'secondary']),
  appearance: PropTypes.oneOf(['filled', 'link']),
};

Button.defaultProps = defaultProps;

export default Button;

const styles = StyleSheet.create({
  defaultButton: {
    borderRadius: Radius.S,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    paddingHorizontal: Spacing.L,
  },
  fullWidth: {
    width: '100%',
  },
  giant: {
    height: 48,
  },
  small: {
    height: 28,
  },
  medium: {
    height: 40,
  },
  large: {
    height: 44,
  },
  primary: {
    backgroundColor: Colors.primary,
  },
  secondary: {
    backgroundColor: Colors.orange,
  },
  customText: {
    color: Colors.white,
  },
  disabled: {
    backgroundColor: Colors.disabled,
  },
  link: {
    color: Colors.link,
    paddingVertical: 3,
  },
});
