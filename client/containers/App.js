import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Header from 'components/Header';
import CardList from 'components/CardList'
import * as AppActions from 'actions';

class App extends Component {

    componentWillMount() {
        const { actions } = this.props;
        actions.loadProducts();
    }

  render() {
      if(this.props.items){
        return (
            <div>
                <Header cart={this.props.cart}/>
                <CardList items={this.props.items} addCart={this.props.actions.addCart} selectImage={this.props.actions.selectImage}/>
            </div>
            )
      }else{
          return <div></div>
      }
    
  }
}

function mapStateToProps(state) {
  const { products } = state;
  return {
    items: products.items,
    cart: products.cart
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(AppActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
