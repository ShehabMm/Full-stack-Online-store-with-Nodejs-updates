import { configureStore } from '@reduxjs/toolkit'
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from '@reduxjs/toolkit/query'
import { oneProductApi, productsApi } from './productsApi'
import counterReducer from './counterSlice'

export const store = configureStore({
  reducer: {
    //  counter      with useselector hook
    counter: counterReducer,

    [productsApi.reducerPath]: productsApi.reducer,
    [oneProductApi.reducerPath]: oneProductApi.reducer,

  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware).concat(oneProductApi.middleware),
})

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch)