export const LOADING_PRODUCTS = 'LOADING_PRODUCTS';
export const LOADED_PRODUCTS = 'LOADED_PRODUCTS';
export const ADD_CART = 'ADD_CART';
export const SELECT_IMAGE = 'SELECT_IMAGE';

function loadingProducts(){
  return {
    type: LOADING_PRODUCTS
  }
}

function productsLoaded(items){
  return {
    type: LOADED_PRODUCTS,
    items
  }
}

export function loadProducts(){
  return (dispatch, getState) => {
    dispatch(loadingProducts());
    fetch('data.json')
    .then((response) => response.json() )
    .then(json => dispatch(productsLoaded(json.items)))
    .catch(error => console.error(error))
  }
}

export function addCart(product){
  return {
    type: ADD_CART,
    product
  }
}

export function selectImage(id, imageIdx){
  return {
    type: SELECT_IMAGE,
    id,
    imageIdx
  }
}
