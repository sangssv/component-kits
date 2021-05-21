import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Block, Text, Voucher, News, DeliveryItem, Colors } from 'component-kits';

export default function  App() {
  return (
    <Block flex={1} middle center>
      <Text size={20} weight="bold" color={Colors.primary}>Cris Sang</Text>
      <Voucher
        imageSource={require('../assets/images/voucher-active.png')}
        name="Giảm 5,000đ cho ly Cà Phê thứ 2 trong ngày"
        quantity={1}
        locked
        expires={() => {
          return <Text>{new Date().toDateString()}</Text>
        }}
      />
      <News
        imageSource={require('../assets/images/banner.png')}
        name="Giảm 5,000đ cho ly Cà Phê thứ 2 trong ngày"
      />
      <DeliveryItem
        imageSource={require('../assets/images/banner.png')}
        name="Giảm 5,000đ cho ly Cà Phê thứ 2 trong ngày"
        sellPrice={15000}
        originalPrice={20000}
        priceFormat={(price) => Number(price).toLocaleString()}
      />
    </Block>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
