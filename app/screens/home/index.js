import React from 'react';
import { connect } from 'react-redux';
import { ScrollView } from 'react-native';
import { Block, theme, Button } from 'galio-framework';
import { Product } from '../../components';
import products from '../../constants/products';
import { fetchPromotions } from '../../actions/promotions';
import { toastMessage } from '../../actions/ui';
import CustomToast from '../../components/Toast';

import styles from './style';

class Home extends React.Component {
  state = {
    isShow: false
  };

  setShow(isShow) {
    console.warn(isShow);
    this.setState({
      isShow: !isShow
    });
  }

  componentDidMount() {
    this.props.fetchPromotions();
  }

  renderProducts = () => {
    const { toastMessage } = this.props;

    return (
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.products}>
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

  Default_Toast_Bottom_With_Different_Color = () => {
    this.refs.defaultToastBottomWithDifferentColor.ShowToastFunction(
      'Default Toast Bottom Message With Different Color.'
    );
  };

  render() {
    const { uix } = this.props;

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
      return dispatch(toastMessage(error));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
