import { createSlice } from '@reduxjs/toolkit'

const seedSlice = createSlice({
  name: 'seed',
  initialState: {
    seed: 4
  },
  reducers: {
    changeSeed: (state, action) => {
      state.seed = action.payload
    },
  },
});

export const { changeSeed  } = seedSlice.actions
export default seedSlice.reducer