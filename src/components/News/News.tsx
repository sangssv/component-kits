import * as React from 'react';
import PropTypes, { InferProps } from 'prop-types';
import { View, StyleSheet, Image, Dimensions, TouchableWithoutFeedback } from 'react-native';
import Colors from '../Colors/Colors';
import Text from '../Text/Text';

const { width } = Dimensions.get('screen');

function News({
  imageSource,
  name,
  onPress,
}: InferProps<typeof News.propTypes>) {

  return (
    <TouchableWithoutFeedback onPress={() => onPress && onPress()}>
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <Image
            style={styles.image}
            source={imageSource}
          />
          <View style={styles.content}>
            <Text weight="medium" style={styles.title}>{name}</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

News.propTypes = {
  imageSource: PropTypes.any.isRequired,
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  onPress: PropTypes.func,
};

export default News;

const NEWS_BANNER_WIDTH = (width - (3 * 15)) / 2;

const styles = StyleSheet.create({
  container: {
    width: NEWS_BANNER_WIDTH,
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
  contentContainer: {
    overflow: 'hidden',
    borderRadius: 8,
  },
  image: {
    width: NEWS_BANNER_WIDTH,
    height: NEWS_BANNER_WIDTH * 0.5625,
  },
  content: {
    padding: 10,
  },
  title: {
    fontSize: 12,
  },
});
