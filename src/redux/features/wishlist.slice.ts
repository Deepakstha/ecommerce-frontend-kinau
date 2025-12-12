import type { wishlistI } from "@/interfaces/wishlists.interface";
import { createSlice } from "@reduxjs/toolkit";

interface initialStateI {
  isLoading: boolean;
  isFetching: boolean;
  error: unknown;
  wishlists: wishlistI[];
}

const initialState: initialStateI = {
  isLoading: false,
  isFetching: false,
  error: null,
  wishlists: [
    {
      id: 1,
      product: {
        id: "1",
        name: "Black Sneakers",
        price: 4999,
        image: "/assets/sneakers.jpg",
      },
    },
    {
      id: 2,
      product: {
        id: "2",
        name: "White Hoodie",
        price: 3499,
        image: "/assets/hoodie.jpg",
      },
    },
    {
      id: 3,
      product: {
        id: "3",
        name: "Black Cap",
        price: 999,
        image: "/assets/black-cap.jpg",
      },
    },
  ],
};

// TODO: fetch wishlists function
//'wishlists/fetchwishlists' should be unique and this is just naming convention {sliceName}/{functionName}
// const fetchWishilists = createAsyncThunk(
//   "wishlists/fetchWishilists",
//   async (args, thunkApi) => {
//     try {
//       // API call res...
//       return "res"; // this goes to fulfilled action.payload.
//     } catch (error) {
//       return thunkApi.rejectWithValue(error); //this goes to rejected action.payload.
//     }
//   }
// );

const wishlistSlice = createSlice({
  name: "wishlists",
  initialState,
  reducers: {
    removeWishlistFromStore: (state, action) => {
      state.wishlists = state.wishlists.filter(
        (wl) => wl.id !== action.payload
      );
    },
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(fetchWishilists.pending, (state) => {
  //       state.isFetching = true;
  //     })
  //     .addCase(fetchWishilists.fulfilled, (state, action) => {
  //       state.isFetching = false;
  //       state.data = action.payload;
  //     })
  //     .addCase(fetchWishilists.rejected, (state, action) => {
  //       state.isFetching = false;
  //       state.error = action.payload as null;
  //     });
  // },
});

export default wishlistSlice.reducer;

export const { removeWishlistFromStore } = wishlistSlice.actions;
