import { createSlice } from '@reduxjs/toolkit'
import createRandomUser from '../utils/createRandomUser'
import User from '../interfaces/User'
import applyErrorsToUsersData from '../utils/applyErrorsToUsersData';

const userDataSlice = createSlice({
  name: 'userData',
  initialState: {
    usersData: [] as User[]
  },
  reducers: {
    generateUserData: (state, action) => {
        const {seed, region} = action.payload
        state.usersData.push(createRandomUser(seed, region))
    },
    clearUsersData: (state) => {
        state.usersData = []
    },
    applyErrors: (state, action) => {
      const {errorNumber, region} = action.payload
      state.usersData = applyErrorsToUsersData(state.usersData, errorNumber, region)
    }
  },
});

export const { generateUserData, clearUsersData, applyErrors  } = userDataSlice.actions
export default userDataSlice.reducer