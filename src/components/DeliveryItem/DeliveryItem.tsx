import * as React from 'react';
import PropTypes, { InferProps } from 'prop-types';
import { View, StyleSheet, Image, Dimensions, TouchableWithoutFeedback } from 'react-native';
import Colors from '../Colors/Colors';
import Text from '../Text/Text';

const { width } = Dimensions.get('screen');

function DeliveryItem({
  imageSource,
  name,
  originalPrice,
  sellPrice,
  priceFormat,
  onPress,
}: InferProps<typeof DeliveryItem.propTypes>) {
  return (
    <TouchableWithoutFeedback onPress={() => onPress && onPress()}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={imageSource}
        />
        <Text numberOfLines={3} weight="medium" style={styles.productName}>{name}</Text>
        <View style={{ marginTop: 15, width: '100%' }}>
          {(originalPrice && originalPrice > sellPrice) ? (
            <>
              <Text color={Colors.medium_gray} style={[styles.price, styles.promotionPrice]}>{priceFormat(originalPrice)}</Text>
              <View height={5} />
            </>
          ) : null}
          <Text weight="medium" color={Colors.danger} style={[styles.price, styles.sellPrice]}>{priceFormat(sellPrice)}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

DeliveryItem.propTypes = {
  imageSource: PropTypes.any.isRequired,
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
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
