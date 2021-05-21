import * as React from 'react';
import PropTypes, { InferProps } from 'prop-types';
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native';
import Colors from '../Colors/Colors';
import Text from '../Text/Text';

const { width } = Dimensions.get('screen');

function Voucher({
  imageSource,
  name,
  fullWidth,
  quantity,
  locked,
  lockedText,
  unlimited,
  expires,
  onPress,
}: InferProps<typeof Voucher.propTypes>) {
  const _renderQuantity = () => {
    let content;
    let backgroundColor;

    if (locked) {
      backgroundColor = '#636363';
      content = (
        <Text weight="medium" color="white" style={{ padding: 5 }}>
          {lockedText}
        </Text>
      );
    } else if (!unlimited) {
      backgroundColor = Colors.primary;
      content = (
        <Text
          weight="medium"
          color="white"
          style={{ padding: 5 }}
        >{`${quantity}x`}</Text>
      );
    } else {
      content = (
        <Image
          style={styles.unlimitedIcon}
          source={require('../../assets/icons/unlimited.png')}
        />
      );
    }
    return (
      <View style={[styles.quantityContainer, { backgroundColor }]}>
        {content}
      </View>
    );
  };

  const renderExpires = (): React.ReactNode => {
    if (typeof expires === 'function') {
      return expires();
    }

    return expires;
  };

  const renderName = (): React.ReactNode => {
    if (typeof name === 'string') {
      return (
        <Text numberOfLines={2} weight="medium" style={styles.voucherName}>
          {name}
        </Text>
      );
    }

    return name;
  };

  return (
    <TouchableWithoutFeedback onPress={() => onPress && onPress()}>
      <View style={[styles.wrapper, fullWidth && styles.fullWidth]}>
        <View style={[styles.container]}>
          <View style={styles.contentWrapper}>
            <View style={styles.imageContainer}>
              {locked && <View style={styles.overlay} />}
              <Image
                style={[styles.image, fullWidth && styles.imageFullWidth]}
                source={imageSource}
              />
              {_renderQuantity()}
            </View>
            <View style={styles.content}>
              {renderName()}
              <View style={styles.expiresContainer}>{renderExpires()}</View>
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

Voucher.propTypes = {
  imageSource: PropTypes.any.isRequired,
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  fullWidth: PropTypes.bool,
  quantity: PropTypes.number,
  locked: PropTypes.bool,
  lockedText: PropTypes.any,
  unlimited: PropTypes.bool,
  expires: PropTypes.oneOfType([PropTypes.node.isRequired, PropTypes.func]),
  onPress: PropTypes.func,
};

Voucher.defaultProps = {
  lockedText: 'Locked',
};

export default Voucher;

const VOUCHER_SIZE = (width - 3 * 15) / 2;

const styles = StyleSheet.create({
  wrapper: {
    width: 160,
  },
  fullWidth: {
    width: '100%',
  },
  container: {
    padding: 0,
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
  contentWrapper: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  imageContainer: {
    position: 'relative',
  },
  overlay: {
    ...(StyleSheet.absoluteFill as object),
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    zIndex: 1,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  image: {
    height: 160,
    width: 160,
    resizeMode: 'contain',
  },
  imageFullWidth: {
    width: VOUCHER_SIZE,
    height: VOUCHER_SIZE,
  },
  content: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  voucherName: {
    fontSize: 14,
  },
  expiresContainer: {
    marginTop: 10,
  },
  expires: {
    fontSize: 12,
  },
  unlockText: {
    fontSize: 12,
    color: '#ef9837',
  },
  unlimitedIcon: {
    width: 28,
    height: 28,
    resizeMode: 'contain',
  },
  quantityContainer: {
    position: 'absolute',
    bottom: -7,
    right: 10,
    zIndex: 999,
    borderRadius: 5,
  },
});
