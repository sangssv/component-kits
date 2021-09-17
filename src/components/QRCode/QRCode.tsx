import * as React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import QRCodeSVG from 'react-native-qrcode-svg';

export interface QRCodeProps {
  value: string;
  size: number;
}

function QRCode({ value, size }: QRCodeProps) {
  return (
    <View style={styles.container}>
      <QRCodeSVG value={value} size={size} />
    </View>
  );
}

QRCode.propTypes = {
  value: PropTypes.string.isRequired,
  size: PropTypes.number,
};

QRCode.defaultProps = {
  size: 100,
};

export default QRCode;

const styles = StyleSheet.create({
  container: {
    padding: 5,
    backgroundColor: 'white',
    borderRadius: 5,
  },
});
