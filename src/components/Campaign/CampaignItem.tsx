import * as React from 'react';
import { StyleSheet, Dimensions, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Block from '../Block/Block';
import Button from '../Button/Button';
import Colors from '../../theme/colors';
import Radius from '../../theme/radius';

const { width: screenWidth } = Dimensions.get('window');
const CAMPAIGN_BANNER_WIDTH = screenWidth - 60;
const COLORS = ['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.25)', 'rgba(0, 0, 0, 0.5)', 'rgba(0, 0, 0, 0.6)'];

export interface CampaignItemProps {
  imageSrc: any;
  campaignPoint?: React.ReactNode;
  isShowButton: boolean;
}

function CampaignItem({ imageSrc, campaignPoint, isShowButton }: CampaignItemProps) {
  return (
    <Block style={styles.container}>
      <Block style={styles.imageContainer}>
        <Image style={{ width: '100%', height: '100%' }} source={imageSrc} />
      </Block>
      <Block style={styles.contentContainer}>
        <LinearGradient
          colors={COLORS}
          style={styles.linearGradientContainer}
        >
          <Block row middle space="between">
            <Block middle row style={styles.content}>
              {campaignPoint}
            </Block>
            {isShowButton && (
              <Button
                size="small"
                type="secondary"
                title="See gift"
                buttonStyle={{ paddingHorizontal: 10 }}
              />
            )}
          </Block>
        </LinearGradient>
      </Block>
    </Block>
  );
}

export default CampaignItem;

CampaignItem.defaultProps = {
  isShowButton: true,
};

const styles = StyleSheet.create({
  container: {
    width: CAMPAIGN_BANNER_WIDTH,
    height: CAMPAIGN_BANNER_WIDTH * 0.5625,
    backgroundColor: Colors.white,
    borderRadius: Radius.M,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  imageContainer: {
    borderRadius: Radius.M,
    overflow: 'hidden',
  },
  contentContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    borderRadius: 8,
    borderTopStartRadius: 0,
    borderTopEndRadius: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    overflow: 'hidden',
  },
  linearGradientContainer: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    paddingBottom: 15,
  },
  content: {
    flex: 1,
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    paddingRight: 15,
  },
});
