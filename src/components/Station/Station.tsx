import * as React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Image } from 'react-native';
import Block from '../Block/Block';
import Text from '../Text/Text';
import Button from '../Button/Button';
import Colors from '../../theme/colors';
import Spacing from '../../theme/spacing';

export interface StationProps {
  imageSource?: any;
  title: string;
  buttonTitle: string;
  style?: any;
}

function Station({ imageSource, title, buttonTitle, style }: StationProps) {
  return (
    <Block row middle space="between" style={[styles.container, style]}>
      <Image
        source={imageSource}
        style={styles.icon}
      />
      <Block width={Spacing.L} />
      <Block flex>
        <Text weight="medium" size={16} color={Colors.white}>{title}</Text>
        <Block height={10} />
        <Button
          type="secondary"
          size="large"
          fullWidth
          title={<Text weight="medium" color={Colors.white}>{buttonTitle}</Text>}
        />
      </Block>
    </Block>
  );
}

Station.propTypes = {
  title: PropTypes.string.isRequired,
};

Station.defaultProps = {
  title: 'TOUCH IS WIN',
};

export default Station;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#4DB856',
    padding: Spacing.L,
  },
  btn: {
    backgroundColor: '#F3D01F',
    width: '100%',
  },
  icon: {
    width: 105,
    height: 105,
    resizeMode: 'contain',
  },
});
