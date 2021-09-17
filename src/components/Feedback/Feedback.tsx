import * as React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import Block from '../Block/Block';
import Text from '../Text/Text';
import Button from '../Button/Button';
import Colors from '../../theme/colors';
import Spacing from '../../theme/spacing';
import Radius from '../../theme/radius';

export interface FeedbackProps {
  title: string;
  skipText: string;
  feedbackText: string;
}

function Feedback({ title, skipText, feedbackText }: FeedbackProps) {
  return (
    <Block row middle style={styles.container}>
      <Block start flex={1}>
        <Text weight="medium" color="#8f3c32">{title}</Text>
      </Block>
      <Block row middle style={styles.actionsContainer}>
        <Block style={{ paddingHorizontal: 10 }}>
          <Button
            appearance="link"
            title={skipText}
            titleStyle={{ fontSize: 14, color: Colors.secondary, fontWeight: '300' }}
          />
        </Block>
        <Button
          size="small"
          type="secondary"
          title={feedbackText}
          buttonStyle={{ paddingHorizontal: 10 }}
          titleStyle={{ fontSize: 14, fontWeight: '400' }}
        />
      </Block>
    </Block>
  );
}

Feedback.propTypes = {
  title: PropTypes.string.isRequired,
  skipText: PropTypes.string,
  feedbackText: PropTypes.string,
};

Feedback.defaultProps = {
  title: 'How was yout 7-Eleven experience?',
  skipText: 'Skip',
  feedbackText: 'Feedback',
};

export default Feedback;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: Spacing.M,
    backgroundColor: '#fee7d3',
    borderRadius: Radius.XS,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  actionsContainer: {
    height: '100%',
    borderLeftWidth: 1,
    borderStyle: 'solid',
    borderColor: '#fbdec2',
    paddingVertical: Spacing.S,
  },
});
