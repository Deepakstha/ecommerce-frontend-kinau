import { combineReducers } from '@reduxjs/toolkit';

import wishlistSlice from './features/wishlist.slice'
import authSlice from './features/auth.slice'
import orderSlice from "./features/order.slice"


const rootReducer = combineReducers({
   
    wishlist:wishlistSlice,
    auth:authSlice,
    order:orderSlice,

})

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer; 