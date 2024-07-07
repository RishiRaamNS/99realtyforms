import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  formData: {},
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    updateFormData(state, action) {
      const { name, value } = action.payload;
      state.formData = {
        ...state.formData,
        [name]: value,
      };
    },
  },
});

export const { updateFormData } = formSlice.actions;

export default configureStore({
  devTools:true,
  reducer: {
    form: formSlice.reducer,
  },
});
