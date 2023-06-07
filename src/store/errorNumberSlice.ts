import { createSlice } from '@reduxjs/toolkit'

const errorNumberSlice = createSlice({
  name: 'errorNumber',
  initialState: {
    errorNumber: 0
  },
  reducers: {
    changeErrorNumber: (state, action) => {
        state.errorNumber = action.payload
    },
  },
});

export const { changeErrorNumber  } = errorNumberSlice.actions
export default errorNumberSlice.reducer