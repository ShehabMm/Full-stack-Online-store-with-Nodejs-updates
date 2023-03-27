import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allProducts: localStorage.getItem("allProducts") ? JSON.parse(localStorage.getItem("allProducts")) : [],
  allProductsID: localStorage.getItem("allProducts") ? JSON.parse(localStorage.getItem("allProductsID")) : [],
}


export const counterSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const productWithQuantity = { ...action.payload, quantity: 1 };
      state.allProducts.push(productWithQuantity);
      state.allProductsID.push(action.payload.id);
      localStorage.setItem("allProducts", JSON.stringify(state.allProducts))
      localStorage.setItem("allProductsID", JSON.stringify(state.allProductsID))

    },

    addQuantity: (state, action) => {
      const choseItem = state.allProducts.find((item) => {
        return item.id === action.payload;
      });

      choseItem.quantity += 1;
    },

    decreaseQuantity: (state, action) => {
      const choseItem = state.allProducts.find((item) => {
        return item.id === action.payload;
      });

      choseItem.quantity -= 1;

      if (choseItem.quantity === 0) {
        const newArray = state.allProducts.filter((item) => {
          return item.quantity !== 0;
        });
        state.allProducts = newArray;
      }
    },

    deleteProduct: (state, action) => {
      const newArray = state.allProducts.filter((item) => {
        return item.id !== action.payload.id;
      });
      state.allProducts = newArray;
    },

    deleteProductfromCart: (state, action) => {
      const newArray = state.allProducts.filter((item) => {
        return item.id !== action.payload.id;
      });
      state.allProducts = newArray;

      const newArray2 = state.allProductsID.filter((item) => {
        return item !== action.payload.id;
      });
      state.allProducts = newArray;
      state.allProductsID = newArray2;

    },


    

  },
});

// Action creators are generated for each case reducer function
export const { addToCart, addQuantity, decreaseQuantity, deleteProduct, deleteProductfromCart } =
  counterSlice.actions;

export default counterSlice.reducer;
