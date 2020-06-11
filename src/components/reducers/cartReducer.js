import {
  ADD_TO_CART,
  REMOVE_ITEM,
  SUB_QUANTITY,
  ADD_QUANTITY,
  ADD_SHIPPING,
} from "../actions/action-types/cart-actions";

const initState = {
  items: [],
  addedItems: [],
  total: 0,
};
const cartReducer = (state = initState, action) => {
  let productDetails = action.products;

  // INSIDE HOME COMPONENT
  if (action.type === ADD_TO_CART) {
    //check if the action id exists in the addedItems
    let existed_item = state.addedItems.find(
      (item) => item.productId === action.products.productId
    );

    if (existed_item) {
      productDetails.quantity += 1;
      //calculating the total
      let newTotal = state.total + productDetails.price;
      return {
        ...state,
        addedItems: [...state.addedItems],
        total: newTotal,
      };
    } else {
      const productQTY = Object.assign(productDetails, { quantity: 1 });

      // //calculating the total
      let newTotal = state.total + productQTY.price;
      return {
        ...state,
        addedItems: [...state.addedItems, productQTY],
        total: newTotal,
      };
    }
  }

  if (action.type === REMOVE_ITEM) {
    let itemToRemove = state.addedItems.find(
      (item) => action.products === item.productId
    );
    let new_items = state.addedItems.filter(
      (item) => action.products !== item.productId
    );

    //calculating the total
    let newTotal = state.total - itemToRemove.price * itemToRemove.quantity;
    return {
      ...state,
      addedItems: new_items,
      total: newTotal,
    };
  }
  //INSIDE CART COMPONENT
  if (action.type === ADD_QUANTITY) {
    let existed_item = state.addedItems.find(
      (item) => item.productId === action.products.productId
    );
    if (existed_item) {
      productDetails.quantity += 1;
      //calculating the total
      let newTotal = state.total + productDetails.price;
      return {
        ...state,
        addedItems: [...state.addedItems],
        total: newTotal,
      };
    } else {
      const productQTY = Object.assign(productDetails, { quantity: 1 });

      // //calculating the total
      let newTotal = state.total + productQTY.price;
      return {
        ...state,
        addedItems: [...state.addedItems, productQTY],
        total: newTotal,
      };
    }
  }

// SUBTRACTION OF QUANTITY FOR ANY PRODUCT
  if (action.type === SUB_QUANTITY) {
    let existed_item = state.addedItems.find(
      (item) => item.productId === action.products.productId
    );
    if (existed_item) {
      //if the qt == 0 then it should be removed
      if (existed_item.quantity === 1) {
        let new_items = state.addedItems.filter(
          (item) => item.productId !== action.products.productId
        );
        let newTotal = state.total - new_items.price;
        return {
          ...state,
          addedItems: new_items,
          total: newTotal,
        };
      } else {
        productDetails.quantity -= 1;
        //calculating the total
        let newTotal = state.total - productDetails.price;
        return {
          ...state,
          addedItems: [...state.addedItems],
          total: newTotal,
        };
      }
    }
  }

  if (action.type === ADD_SHIPPING) {
    return {
      ...state,
      total: state.total + 6,
    };
  }

  if (action.type === "SUB_SHIPPING") {
    return {
      ...state,
      total: state.total - 6,
    };
  } else {
    return state;
  }
};

export default cartReducer;
