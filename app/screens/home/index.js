import React from 'react';
import { connect } from 'react-redux';
import { ScrollView } from 'react-native';
import { Block, theme, Button } from 'galio-framework';
import { Product } from '../../components';
import products from '../../constants/products';
import { fetchPromotions } from '../../actions/promotions';
import { showToastMessage } from '../../actions/ui';

import styles from './style';

const arrayTo2DArray = (list, howMany) => {
  if (!list) return [];
  let idx = 0;
  const result = [];
  while (idx < list.length) {
    if (idx % howMany === 0) result.push([]);
    result[result.length - 1].push(list[idx++]);
  }
  return result;
};

class Home extends React.Component {
  componentDidMount() {
    const { promotions } = this.props;
    this.props.fetchPromotions();

    // if (!promotions.length) {
    // }
  }

  renderProducts = () => {
    const { promotions } = this.props;
    const promotionsBlock = arrayTo2DArray(products, 2);
    if (!promotionsBlock.length) return null;

    return (
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.products}>
        <Block flex>
          {promotionsBlock.map((i, k) => (
            <Block flex row>
              <Product key={k} product={i[0]} />
              <Product key={k + 100} product={i[1]} style={{ marginLeft: theme.SIZES.BASE }} />
            </Block>
          ))}
        </Block>
      </ScrollView>
    );
  };

  renderPayments = () => {
    const { toastMessage, promotions } = this.props;

    return (
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.products}>
        const {promotions} = this.props;
        <Block flex>
          <Button onPress={() => toastMessage('error en la matrisdas asd ,asmd kasjlk jaslk djx')}>
            pinchea aqui
          </Button>
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
      </Block>
    );
  }
}

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
