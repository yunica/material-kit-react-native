import React from 'react';
import { connect } from 'react-redux';
import { ScrollView } from 'react-native';
import { Button, Block, Text, Input, theme } from 'galio-framework';
import { Icon, Product } from '../../components/';
import products from '../../constants/products';
import { fetchPromotions } from '../../actions/promotions'
import styles from './style'


class Home extends React.Component {

  componentDidMount() {

      this
      .props
      .fetchPromotions();
  }

  renderSearch = () => {
    const { navigation } = this.props;
    const iconCamera = <Icon size={16} color={theme.COLORS.MUTED} name="zoom-in" family="material" />

    return (
      <Input
        right
        color="black"
        style={styles.search}
        iconContent={iconCamera}
        placeholder="What are you looking for?"
        onFocus={() => navigation.navigate('Pro')}
      />
    )
  }

  renderTabs = () => {
    const { navigation, data } = this.props;
    console.log(data)
    return (
      <Block row style={styles.tabs}>
        <Button shadowless style={[styles.tab, styles.divider]} onPress={() => navigation.navigate('Pro')}>
          <Block row middle>
            <Icon name="grid" family="feather" style={{ paddingRight: 8 }} />
            <Text size={16} style={styles.tabTitle}>Categories</Text>
          </Block>
        </Button>
        <Button shadowless style={styles.tab} onPress={() => navigation.navigate('Pro')}>
          <Block row middle>
            <Icon size={16} name="camera-18" family="GalioExtra" style={{ paddingRight: 8 }} />
            <Text size={16} style={styles.tabTitle}>Best Deals</Text>
          </Block>
        </Button>
      </Block>
    )
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
    return (
      <Block flex center style={styles.home}>
        {this.renderProducts()}
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

