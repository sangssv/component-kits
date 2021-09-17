import * as React from 'react';
import { ScrollView } from 'react-native';
import {
  Block,
  Text,
  Voucher,
  News,
  DeliveryItem,
  // QRCode,
  CompactList,
  Spacing,
  Button,
  Station,
  Feedback,
  // CircularProgress,
} from '@7-eleven-platform/component-kits';

const VOUCHER = {
  id: 8197029,
  name: 'Tặng 1 lon Pepsi Black với hóa đơn 12k',
  description:
    '<p><span style="color:#008000;"><span style="font-size:14px;">Đổi <strong>10 điểm</strong> t&iacute;ch lũy Pepsi để được&nbsp;<strong>tặng 1 Lon Pepsi Black với đơn h&agrave;ng từ 12,000đ.</strong></span></span></p>\r\n\r\n<p><span style="font-size:14px;">- C&aacute;ch thức sử dụng : </span></p>\r\n\r\n<p><span style="font-size:14px;">- Qu&eacute;t m&atilde; QR Code khi giao dịch.</span></p>\r\n\r\n<p><span style="font-size:14px;">- Hạn sử dụng: 31/12/2021.</span></p>\r\n\r\n<p><span style="font-size:14px;">- Voucher kh&ocirc;ng c&oacute; gi&aacute; trị quy đổi th&agrave;nh tiền mặt.</span></p>\r\n\r\n<p><span style="font-size:14px;">- Kh&ocirc;ng &aacute;p dụng chung với chương tr&igrave;nh khuyến m&atilde;i kh&aacute;c.</span></p>\r\n\r\n<p><span style="font-size:14px;">* Lưu &yacute;:&nbsp;Cập nhật phi&ecirc;n bản mới nhất của 7REWARDS để tham gia chương tr&igrave;nh.</span></p>\r\n',
  voucher_type: 'promotion_v2',
  code: 'VCD210700361FBFC',
  redeem_at: 0,
  expired_at: 1640944799,
  qr_code_text: 'VC:VCD210700361FBFC;1:C6DC237;2:Cris Sang;3:+84981346304',
  image_url:
    'https://7rewards-images-s3-ap-southeast-1-amazonaws.cdn.vccloud.vn/production/rewards/images/15187_1625485853_original.jpg?1625485852',
  grayscale_image_url:
    'https://7rewards-images-s3-ap-southeast-1-amazonaws.cdn.vccloud.vn/production/rewards/images/15187_1625485853_grayscale.jpg?1625485852',
  quantity: 1,
  created_at: 1625606473,
  is_activated: true,
  priority: 0,
  total_quantity: 1,
  label: 'Hết hạn: 31/12/2021',
  is_unlimited: false,
  badge: '',
  supplier_code: null,
  campaign_id: 1329,
  is_campaign_voucher: true,
  exchange_point: 10,
  voucher_used_quantity_today: 0,
  limit_voucher_per_day: 0,
  applicable_products: [
    {
      id: 12554,
      name: 'Pepsi Black Lon Cao 320ml',
      price: '12000.0',
      image_url:
        'https://ceph-external.sevensystem.vn/product-image/8934588662119.jpg?1619064120504',
    },
  ],
};

export default function App() {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: Spacing.L, paddingTop: 60 }}
    >
      <Block>
        <Text weight="bold" size={24}>
          Text
        </Text>
        <Block height={Spacing.M} />
        <Text>Cris Sang</Text>
      </Block>
      <Block height={Spacing.L} />
      <Block>
        <Text weight="bold" size={24}>
          Voucher
        </Text>
        <Block height={Spacing.M} />
        <Voucher
          data={VOUCHER}
          headerText="Voucher 7REWARDS"
          imageSource={require('../assets/images/voucher-active.png')}
          name="Giảm 5,000đ cho ly Cà Phê thứ 2 trong ngày"
          quantity={1}
          locked
          fullWidth
          expires={() => {
            return <Text>{new Date().toDateString()}</Text>;
          }}
        />
      </Block>
      <Block height={Spacing.L} />
      <Block>
        <Text weight="bold" size={24}>
          News
        </Text>
        <Block height={Spacing.M} />
        <News
          imageSource={require('../assets/images/banner.png')}
          name="Giảm 5,000đ cho ly Cà Phê thứ 2 trong ngày"
        />
      </Block>
      <Block height={Spacing.L} />
      <Block>
        <Text weight="bold" size={24}>
          DeliveryItem
        </Text>
        <Block height={Spacing.M} />
        <DeliveryItem
          imageSource={require('../assets/images/delivery-default.png')}
          name="Giảm 5,000đ cho ly Cà Phê thứ 2 trong ngày"
          sellPrice={15000}
          originalPrice={20000}
          priceFormat={(price: number) => Number(price).toLocaleString()}
        />
      </Block>
      <Block height={Spacing.L} />
      <Block>
        <Text weight="bold" size={24}>
          DeliveryItem
        </Text>
        <Block height={Spacing.M} />
        <DeliveryItem
          imageSource={require('../assets/images/delivery-default.png')}
          name="Giảm 5,000đ cho ly Cà Phê thứ 2 trong ngày"
          sellPrice={15000}
          originalPrice={20000}
          priceFormat={(price: number) => Number(price).toLocaleString()}
        />
      </Block>
      <Block height={Spacing.L} />
      <Block>
        <Text weight="bold" size={24}>
          Button
        </Text>
        <Block height={Spacing.M} />
        <Block row>
          <Button size="small" title="Small" />
          <Block width={10} />
          <Button size="medium" title="Medium" />
          <Block width={10} />
          <Button size="large" title="Large" />
          <Block width={10} />
          <Button size="giant" title="Giant" />
        </Block>
        <Block height={Spacing.M} />
        <Block row middle start>
          <Button type="primary" title="Primary" />
          <Block width={10} />
          <Button type="secondary" title="Secondary" />
        </Block>
        <Block height={Spacing.M} />
        <Block row middle start>
          <Button appearance="filled" title="Filled" />
          <Block width={10} />
          <Button appearance="link" title="Link" />
        </Block>
      </Block>
      <Block height={Spacing.L} />
      <Block>
        <Text weight="bold" size={24}>
          QR Code
        </Text>
        <Block height={Spacing.M} />
        {/* <QRCode value="Cris Sang" size={150} /> */}
      </Block>
      <Block height={Spacing.L} />
      <Block>
        <Text weight="bold" size={24}>
          Compact List
        </Text>
        <Block height={Spacing.M} />
        <CompactList
          title="My Voucher"
          data={[1, 2, 3, 4]}
          itemContainerStyle={{ paddingHorizontal: 7.5 }}
          keyExtractor={(item) => item.toString()}
          renderItem={() => (
            <Voucher
              data={VOUCHER}
              imageSource={require('../assets/images/voucher-active.png')}
              name="Giảm 5,000đ cho ly Cà Phê thứ 2 trong ngày"
              quantity={1}
              locked
              expires={() => {
                return <Text>{new Date().toDateString()}</Text>;
              }}
            />
          )}
        />
      </Block>
      <Block height={Spacing.L} />
      <Block>
        <Text weight="bold" size={24}>
          Station
        </Text>
        <Block height={Spacing.M} />
        <Station
          imageSource={require('../assets/images/spin.png')}
          style={{ borderRadius: 8 }}
          title="LUCKY WHEEL"
          buttonTitle="10 available spins"
        />
      </Block>
      <Block height={Spacing.L} />
      <Block>
        <Text weight="bold" size={24}>
          Feedback
        </Text>
        <Block height={Spacing.M} />
        <Feedback />
      </Block>
      <Block height={Spacing.L} />
      {/* <CircularProgress
        size={150}
        width={15}
        backgroundWidth={15}
        fill={70}
        arcSweepAngle={280}
        rotation={220}
        lineCap="round"
      /> */}
    </ScrollView>
  );
}
