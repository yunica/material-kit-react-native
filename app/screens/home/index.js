import React from 'react';
import { connect } from 'react-redux';
import { ScrollView } from 'react-native';
import { Block, theme,  Button } from 'galio-framework';
import {  Product } from '../../components/';
import products from '../../constants/products';
import { fetchPromotions } from '../../actions/promotions'
import { toastMessage } from '../../actions/ui'

import styles from './style'

const ToastC = props => {
  if (props.visible) {
    ToastAndroid.showWithGravityAndOffset(
      props.message,
      ToastAndroid.LONG,
      ToastAndroid.TOP,
      25,
      50
    );
    return null;
  }
  return null;
};

class Home extends React.Component {
  state = {
    isShow: false,
  };


  setShow(isShow) {
    console.warn(isShow)
    this.setState({
      isShow: !isShow
    })
  }
  componentDidMount() {
    this
      .props
      .fetchPromotions();
  }
  renderProducts = () => {
    const { toastMessage } = this.props;

    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.products}>
        <Block flex>

          <Button onPress={(err) => toastMessage( 'asdasdasdasd')}>pinchea aqui</Button>
          <Product product={products[0]} horizontal />
          <Block flex row>
            <Product product={products[1]} style={{ marginRight: theme.SIZES.BASE }} />
            <Product product={products[2]} />
          </Block>
          <Product product={products[3]} horizontal />
          <Product product={products[4]} full />

        </Block>
      </ScrollView>
    )
  }

  render() {
    const { uix } = this.props;
    const{isShow} = this.state;

    return (
      <Block flex center style={styles.home}>
        {this.renderProducts()}
        {/* <ToastC visible={uix.isToast} message="Example" /> */}

        {/* <Toast isShow={uix.isToast} positionIndicator="top" round  color='error' textStyle={{backgroundColor:'white',alignSelf:'center'}}>This is a top positioned toast</Toast> */}

      </Block>
    );
  }
}

const mapStateToProps = state => {
  return {
    promotions: state.promotions,
    uix: state.ui

  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPromotions: () => {
      return dispatch(fetchPromotions())
    },
    toastMessage: (error) => {
      return dispatch(toastMessage(error))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

