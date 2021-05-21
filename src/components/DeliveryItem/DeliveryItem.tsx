import * as React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  ImageProps,
} from 'react-native';
import Colors from '../Colors/Colors';
import Text from '../Text/Text';

export interface DeliveryItemProps {
  imageSource: ImageProps['source'];
  name: string;
  originalPrice?: number;
  sellPrice: number;
  priceFormat: (price: number) => string;
  onPress?: () => void;
}

function DeliveryItem({
  imageSource,
  name,
  originalPrice,
  sellPrice,
  priceFormat,
  onPress,
}: DeliveryItemProps) {
  return (
    <TouchableWithoutFeedback onPress={() => onPress && onPress()}>
      <View style={styles.container}>
        <Image style={styles.image} source={imageSource} />
        <Text numberOfLines={3} weight="medium" style={styles.productName}>
          {name}
        </Text>
        <View style={{ marginTop: 15, width: '100%' }}>
          {originalPrice && originalPrice > sellPrice ? (
            <>
              <Text
                color={Colors.medium_gray}
                style={[styles.price, styles.promotionPrice]}
              >
                {priceFormat(originalPrice)}
              </Text>
            </>
          ) : null}
          <Text weight="medium" color={Colors.danger} style={styles.price}>
            {priceFormat(sellPrice)}
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

DeliveryItem.propTypes = {
  imageSource: PropTypes.any.isRequired,
  name: PropTypes.any,
  originalPrice: PropTypes.any,
  sellPrice: PropTypes.number.isRequired,
  priceFormat: PropTypes.func,
  onPress: PropTypes.func,
};

export default DeliveryItem;

const styles = StyleSheet.create({
  container: {
    width: 120,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  image: {
    width: 84,
    height: 84,
    resizeMode: 'contain',
  },
  productName: {
    fontSize: 12,
  },
  price: {
    fontSize: 14,
  },
  promotionPrice: {
    textDecorationLine: 'line-through',
  },
});
