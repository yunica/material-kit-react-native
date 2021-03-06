import React from 'react';
import { withNavigation } from '@react-navigation/compat';
import { StyleSheet, Dimensions, Image, TouchableWithoutFeedback } from 'react-native';
import { Block, Text, theme } from 'galio-framework';

const { width } = Dimensions.get('screen');

class Product extends React.Component {
  render() {
    const { navigation, product, horizontal, full, style, priceColor, imageStyle } = this.props;
    const imageStyles = [
      styles.image,
      full ? styles.fullImage : styles.horizontalImage,
      imageStyle
    ];
    if (!product) return null;

    return (
      <Block row={horizontal} card flex style={[styles.product, styles.shadow, style]}>
        {product.image ? (
          <TouchableWithoutFeedback onPress={() => navigation.navigate('profile', { product })}>
            <Block flex style={[styles.imageContainer, styles.shadow]}>
              <Image source={{ uri: product.image }} style={imageStyles} />
            </Block>
          </TouchableWithoutFeedback>
        ) : null}
        <TouchableWithoutFeedback onPress={() => navigation.navigate('profile', { product })}>
          <Block flex space="between" style={styles.productDescription}>
            <Text size={14} style={styles.productTitle}>
              {product.title}
            </Text>
            <Block row space="between">
              <Text
                size={16}
                muted={!priceColor}
                color={priceColor || '#9C26B0'}
                style={{ marginLeft: 'auto' }}>
                {product.tm ? product.tm : 'S/'} {product.price}
              </Text>
            </Block>
          </Block>
        </TouchableWithoutFeedback>
      </Block>
    );
  }
}

export default withNavigation(Product);

const styles = StyleSheet.create({
  product: {
    backgroundColor: theme.COLORS.WHITE,
    marginVertical: theme.SIZES.BASE,
    borderWidth: 0,
    minHeight: 'auto'
    // maxHeight: 114,
  },
  productTitle: {
    flex: 1,
    flexWrap: 'wrap',
    paddingBottom: 6
  },
  productDescription: {
    padding: theme.SIZES.BASE / 2
  },
  imageContainer: {
    elevation: 1
  },
  image: {
    borderRadius: 9,
    marginHorizontal: theme.SIZES.BASE / 2,
    marginTop: -16
  },
  horizontalImage: {
    height: 122,
    width: 'auto'
  },
  fullImage: {
    height: 215,
    width: width - theme.SIZES.BASE * 3
  },
  shadow: {
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.1,
    elevation: 2
  }
});
