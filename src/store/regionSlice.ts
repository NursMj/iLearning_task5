import { createSlice } from '@reduxjs/toolkit'

const regionSlice = createSlice({
  name: 'region',
  initialState: {
    region: 'USA'
  },
  reducers: {
    selectRegion: (state, action) => {
        state.region = action.payload
    },
  },
});

export const { selectRegion  } = regionSlice.actions
export default regionSlice.reducer