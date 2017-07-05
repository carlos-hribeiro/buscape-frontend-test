
import {
  LOADING_PRODUCTS,
  LOADED_PRODUCTS,
  ADD_CART,
  SELECT_IMAGE
} from 'actions';



export default function products(state = {}, action){
  switch(action.type){

    case(LOADING_PRODUCTS):
      console.log("loading products... ");
      return Object.assign({}, state, {loading: true});

    case(LOADED_PRODUCTS):
      var items = action.items;
      items.forEach(it => it.product.selectedImage = 0);
      console.log('loaded');
      return Object.assign({}, state, {items: items, loading: false});

    case(ADD_CART):
      var cart = state.cart || [];
      return Object.assign({}, state, {cart: [...cart, action.product]});

    case(SELECT_IMAGE):
      var items = state.items;
      var updatedItems = items.map(item => {
        if(item.product.id == action.id){
          var newProd = Object.assign({}, item.product, {selectedImage: action.imageIdx});
          return Object.assign({}, item, {product: newProd})
        }
        return item;
      })
      return Object.assign({}, state, {items: updatedItems});
    
    default:
      return state;
  }
}

