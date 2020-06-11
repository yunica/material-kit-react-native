import React from 'react';
import { connect } from 'react-redux';
import { ScrollView } from 'react-native';
import { Block, theme, Toast, Button } from 'galio-framework';
import { Icon, Product } from '../../components/';
import products from '../../constants/products';
import { fetchPromotions } from '../../actions/promotions'
import styles from './style'


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
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.products}>

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
    )
  }

  render() {
    const{isShow} = this.state;
    return (
      <Block flex center style={styles.home}>
   
        {this.renderProducts()}
        <Button shadowless onPress={() => this.setShow(isShow)} style={{ marginBottom: 80 }}>click here for toast notifications</Button>
        <Toast isShow={this.state.isShow} positionIndicator="top" round  color='error' textStyle={{color:'white'}}>This is a top positioned toast</Toast>

      </Block>
    );
  }
}

const mapStateToProps = state => {
  return {
    promotions: state.promotions

  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPromotions: () => {
      return dispatch(fetchPromotions())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

