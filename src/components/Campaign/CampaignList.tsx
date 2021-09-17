import React, { useState } from 'react';
import { StyleSheet, Dimensions, ListRenderItem } from 'react-native';
import Carousel, { Pagination, AdditionalParallaxProps } from 'react-native-snap-carousel';
import Block from '../Block/Block';
import Colors from '../../theme/colors';
import Spacing from '../../theme/spacing';

const { width: screenWidth } = Dimensions.get('window');
const CAMPAIGN_BANNER_WIDTH = screenWidth - 60;

export interface CampaignListProps {
  data: any[];
  keyExtractor: (item: any, index: number) => string;
  renderItem: ListRenderItem<any> &
    ((
      item: {
        item: any;
        index: number;
      },
      parallaxProps?: AdditionalParallaxProps | undefined
    ) => React.ReactNode);
}

function CampaignList({ data, keyExtractor, renderItem }: CampaignListProps) {
  let [activeIndex, setActiveIndex] = useState<number>(0);

  const pagination = () => {
    return (
      <Block style={styles.wrapper}>
        <Pagination
          dotsLength={data.length}
          activeDotIndex={activeIndex}
          containerStyle={styles.container}
          dotContainerStyle={styles.dotContainer}
          dotStyle={styles.dot}
          inactiveDotStyle={styles.inactiveDot}
          inactiveDotScale={1}
        />
      </Block>
    );
  };

  return (
    <Block>
      <Carousel
        loop
        loopClonesPerSide={data.length}
        autoplay
        autoplayInterval={6000}
        sliderWidth={screenWidth}
        itemWidth={CAMPAIGN_BANNER_WIDTH}
        data={data}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        onSnapToItem={(index) => setActiveIndex(index)}
        inactiveSlideScale={0.9}
        contentContainerCustomStyle={{ padding: Spacing.M }}
        useScrollView
      />
      {pagination()}
    </Block>
  );
}

export default CampaignList;

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
  },
  container: {
    paddingVertical: 0,
  },
  dotContainer: {
    marginHorizontal: 3,
  },
  dot: {
    width: 12,
    height: 2,
    backgroundColor: Colors.primary,
    paddingHorizontal: 0,
  },
  inactiveDot: {
    backgroundColor: 'white',
  },
});
