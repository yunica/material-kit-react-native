import React from 'react';
import { connect } from 'react-redux';
import { ScrollView } from 'react-native';
import { Block, theme, Text } from 'galio-framework';
import { Product } from '../../components';
import products from '../../constants/products';
import { fetchPromotions } from '../../actions/promotions';
import { showToastMessage } from '../../actions/ui';

import styles from './style';

// const arrayTo2DArray = (list, howMany) => {
//   if (!list) return [];
//   let idx = 0;
//   const result = [];
//   while (idx < list.length) {
//     if (idx % howMany === 0) result.push([]);
//     result[result.length - 1].push(list[idx++]);
//   }
//   return result;
// };

class Home extends React.Component {
  componentDidMount() {
    const { promotions } = this.props;

    if (!promotions.length) {
      this.props.fetchPromotions();
    }
  }

  renderProducts = () => {
    // const { promotions } = this.props;
    // const promotionsBlock = arrayTo2DArray(products, 2);
    // if (!promotionsBlock.length) return null;

    return (
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.products}>
        <Block flex>
          {products.map((i) => (
            <Product key={i.id} product={i} horizontal />
          ))}
        </Block>
      </ScrollView>
    );
  };

  renderPayments = () => {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <Block flex>
          <Product product={products[0]} horizontal />
          <Block flex row>
            <Product product={products[1]} style={{ marginRight: theme.SIZES.BASE }} />
            <Product product={products[2]} />
          </Block>
          <Product product={products[3]} horizontal />
          <Product product={products[4]} full />
        </Block>
      </ScrollView>
    );
  };

  render() {
    return (
      <Block flex center style={styles.home}>
        {this.renderProducts()}
        <Text bold size={16} style={styles.title}>
          Pagos pendientes
        </Text>
        {this.renderPayments()}
      </Block>
    );
  }
}
// Set default props
Home.defaultProps = {
  promotions: []
};
const mapStateToProps = (state) => {
  return {
    promotions: state.promotions,
    uix: state.ui
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPromotions: () => {
      return dispatch(fetchPromotions());
    },
    toastMessage: (error) => {
      return dispatch(showToastMessage(error));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
