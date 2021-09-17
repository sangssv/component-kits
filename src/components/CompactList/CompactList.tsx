import * as React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import Block from '../Block/Block';
import Button from '../Button/Button';
import Text from '../Text/Text';

export interface CompactListProps {
  title: string | React.ReactNode | React.ReactNodeArray;
  onViewMore?: () => void;
  showTotalNumber?: boolean;
  data: any[];
  keyExtractor: (item: any, index: number) => string;
  renderItem: (item: any) => React.ReactNode;
  itemContainerStyle?: any;
}

function CompactList({ title, onViewMore, data, renderItem, keyExtractor, itemContainerStyle }: CompactListProps) {
  const renderTitle = () => {
    let content: React.ReactNode | string;
    const isString = title && typeof title === 'string';

    if (isString) {
      content = (
        <Text weight="medium" style={styles.title}>
          {title}
        </Text>
      );
    }

    if (typeof title === 'function') {
      content = title();
    }

    return content;
  }

  return (
    <Block flex>
      <Block middle row space="between" style={styles.header}>
        <Block>{renderTitle()}</Block>
        <Button appearance="link" title="See all" onPress={() => onViewMore && onViewMore} />
      </Block>
      <Block height={5} />
      <Block>
        <FlatList
          horizontal={true}
          data={data || []}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.contentContainer}
          keyExtractor={keyExtractor}
          renderItem={({ item }) => (
            <Block style={itemContainerStyle}>{renderItem(item)}</Block>
          )}
        />
      </Block>
    </Block>
  );
}

CompactList.propTypes = {
};

CompactList.defaultProps = {
};

export default CompactList;

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 18,
  },
  contentContainer: {
    paddingHorizontal: 7.5,
    paddingVertical: 15,
  }
});
