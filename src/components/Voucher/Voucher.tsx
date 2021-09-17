import * as React from 'react';
import {
  View,
  ViewStyle,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';
import Colors from '../../theme/colors';
import Text from '../Text/Text';
// import Image from '../Image/Image';

const { width } = Dimensions.get('screen');

interface Voucher {
  id: number;
  name: string;
  description: string;
  expired_at: number;
  image_url: string;
  grayscale_image_url: string;
  quantity: number;
  exchange_point: number;
  [key: string]: any;
}

interface VoucherProps {
  data: Voucher;
  image: React.ReactNode;
  progress: number;
  headerText: string | React.ReactNode;
  name: string | React.ReactNode;
  fullWidth: boolean;
  quantity: number | undefined;
  locked: boolean;
  lockedText: string | React.ReactNode;
  useText: string | React.ReactNode;
  unlimited: boolean;
  expires: string | React.ReactNode;
  [key: string]: any;
}

const Separator = () => {
  return (
    <>
      {Array(6)
        .fill('')
        .map((_, index) => (
          <View
            key={index}
            style={{
              backgroundColor: Colors.border,
              width: 2,
              height: 8,
              borderRadius: 1,
              marginVertical: 3,
            }}
          />
        ))}
    </>
  );
};

const Voucher: React.FC<VoucherProps> = ({
  data,
  progress,
  imageSource,
  headerText,
  name,
  fullWidth,
  quantity,
  locked,
  lockedText,
  useText,
  unlimited,
  expires,
  onPress,
}) => {
  // const _renderQuantity = () => {
  //   let content;
  //   let backgroundColor;

  //   if (locked) {
  //     backgroundColor = '#636363';
  //     content = (
  //       <Text weight="medium" color="white" style={{ padding: 5 }}>
  //         {lockedText}
  //       </Text>
  //     );
  //   } else if (!unlimited) {
  //     backgroundColor = Colors.primary;
  //     content = (
  //       <Text
  //         weight="medium"
  //         color="white"
  //         style={{ padding: 5 }}
  //       >{`${quantity}x`}</Text>
  //     );
  //   } else {
  //     content = (
  //       <Image
  //         style={styles.unlimitedIcon}
  //         source={require('../../assets/icons/unlimited.png')}
  //       />
  //     );
  //   }
  //   return (
  //     <View style={[styles.quantityContainer, { backgroundColor }]}>
  //       {content}
  //     </View>
  //   );
  // };

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

  const _renderHeader = () => {
    // let content;
    // if (exchange_point) {
    //   if (selectedCampaign) {
    //     content = `${t('exchange')} ${exchange_point}${selectedCampaign.campaign_unit}`;
    //   } else {
    //     content = `${t('exchange')} ${exchange_point} ${t('rewards_points')}`;
    //   }
    // } else {
    //   content = `${t('voucher')} ${selectedCampaign ? selectedCampaign.campaign_name : '7REWARDS'}`;
    // }

    return (
      <View
        style={{
          paddingHorizontal: 15,
          paddingTop: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <Text numberOfLines={1} size={12}>
          {headerText}
        </Text>
      </View>
    );
  };

  const _renderQuantity = () => {
    const backgroundColor = locked ? '#636363' : Colors.primary;

    if (locked || !unlimited) {
      return (
        <View style={[styles.quantityContainer, { backgroundColor }]}>
          <Text color="white" size={12}>{`x${quantity}`}</Text>
        </View>
      );
    }

    return null;
  };

  const _renderCallToAction = () => {
    let ctaText = locked ? lockedText : useText;
    let ctaColor = locked ? '#636363' : Colors.primary;

    return (
      <Text size={13} color={ctaColor}>
        {ctaText}
      </Text>
    );
  };

  const _renderProgressBar = () => {
    return (
      <View
        style={{
          height: '100%',
          width: 10,
          borderTopRightRadius: 4,
          borderBottomRightRadius: 4,
          backgroundColor: '#636363',
          position: 'absolute',
          right: 0,
        }}
      >
        <View
          style={{
            height: `${progress}%`,
            width: 10,
            backgroundColor: Colors.primary,
            borderTopLeftRadius: progress >= 100 ? 0 : 5,
            borderTopRightRadius: progress >= 100 ? 4 : 5,
            borderBottomRightRadius: 4,
            position: 'absolute',
            right: 0,
            bottom: 0,
          }}
        ></View>
        {/* <Image
          source={GiftIcon}
          style={{
            width: 20,
            height: 20,
            position: 'absolute',
            bottom: `${progress}%`,
            left: -6,
            transform: [{
              translateY: progress === 0 ? 0 : progress === 100 ? 15 : 10,
            }, {
              rotate: '-10deg'
            }]
          }}
        /> */}
      </View>
    );
  };

  const _renderExpire = () => {
    if (typeof expires === 'function') {
      return expires();
    }

    return expires;
  };

  return (
    <TouchableWithoutFeedback onPress={() => onPress && onPress()}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <View
          style={[
            styles.leftContainer,
            fullWidth && styles.leftContainerFullWidth,
          ]}
        >
          {_renderHeader()}
          <View style={styles.contentContainer}>
            <View style={styles.imageContainer}>
              {locked && <View style={styles.overlay} />}
              <Image
                source={imageSource}
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: 4,
                }}
              />
            </View>
            <View
              style={{
                flexGrow: 1,
                flexShrink: 1,
                flexBasis: 'auto',
                paddingLeft: 10,
              }}
            >
              <Text
                weight="medium"
                size={14}
                numberOfLines={3}
                style={styles.voucherName}
              >
                {data.name}
              </Text>
              <View height={5} />
              {_renderExpire()}
            </View>
          </View>
        </View>
        <View style={styles.separatorContainer}>
          <Separator />
        </View>
        <View style={styles.rightContainer}>
          {_renderQuantity()}
          {_renderCallToAction()}
          {_renderProgressBar()}
        </View>
      </View>
      {/* <View style={[styles.wrapper, fullWidth && styles.fullWidth]}>
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
      </View> */}
    </TouchableWithoutFeedback>
  );
};

// Voucher.propTypes = {
//   imageSource: PropTypes.any.isRequired,
//   name: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
//   fullWidth: PropTypes.bool,
//   quantity: PropTypes.number,
//   locked: PropTypes.bool,
//   lockedText: PropTypes.any,
//   unlimited: PropTypes.bool,
//   expires: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
//   onPress: PropTypes.func,
// };

Voucher.defaultProps = {
  lockedText: 'Locked',
  useText: 'Use',
  progress: 0,
};

export default Voucher;

const VOUCHER_SIZE = width - 2 * 15 - 40;
const VOUCHER_FULL_WIDTH = width - 2 * 15;
const VOUCHER_HEIGHT = 128;
const CTA_WIDTH = 100;
const styles = StyleSheet.create({
  wrapper: {
    width: 160,
  },
  fullWidth: {
    width: '100%',
  },
  leftContainer: {
    width: VOUCHER_SIZE - CTA_WIDTH,
    height: VOUCHER_HEIGHT,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: -2,
      height: 0,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    borderRadius: 4,
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
    // borderLeftWidth: 8,
    // borderLeftColor: isLocked ? '#636363' : rewardsTheme.COLORS.PRIMARY,
  },
  leftContainerFullWidth: {
    width: VOUCHER_FULL_WIDTH - CTA_WIDTH,
    backgroundColor: 'white',
  },
  rightContainer: {
    width: CTA_WIDTH,
    height: VOUCHER_HEIGHT,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 0,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    borderRadius: 4,
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
    paddingLeft: 10,
    paddingRight: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  separatorContainer: {
    width: 20,
    height: VOUCHER_HEIGHT - 14,
    top: 7,
    position: 'absolute',
    right: CTA_WIDTH - 10,
    zIndex: 99,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  quantityContainer: {
    position: 'absolute',
    left: (CTA_WIDTH - 10) / 2 - 18,
    top: 0,
    height: 26,
    width: 36,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primary,
  },
  contentContainer: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  imageContainer: {
    flexBasis: 56,
    height: 56,
    borderRadius: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 0,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
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
  overlay: {
    ...(StyleSheet.absoluteFill as object),
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    zIndex: 1,
    borderRadius: 4,
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
});
