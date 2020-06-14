import { theme } from 'galio-framework';
import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: theme.SIZES.BASE
  },
  social: {
    width: theme.SIZES.BASE * 3.5,
    height: theme.SIZES.BASE * 3.5,
    borderRadius: theme.SIZES.BASE * 1.75,
    justifyContent: 'center'
  },
  padded: {
    paddingHorizontal: theme.SIZES.BASE,
    position: 'relative',
    bottom: theme.SIZES.BASE,
    zIndex: 2
  },
  image: {
    height,
    width,
    resizeMode: 'cover',
    justifyContent: 'center',
    zIndex: 1
  }
});
export default styles;
