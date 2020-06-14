import { theme } from 'galio-framework';
import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('screen');

const thumbMeasure = (width - 48 - 32) / 2;

const styles = StyleSheet.create({
  home: {
    width
  },
  title: {
    paddingVertical: theme.SIZES.BASE,
    paddingHorizontal: theme.SIZES.BASE * 2
  },
  products: {
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE * 2
  },
  product: {
    width: thumbMeasure
    // height: thumbMeasure
  }
});
export default styles;
