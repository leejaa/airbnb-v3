/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CurrentDisplay {
  displayType: 'issues' | 'comments'
  issueId: number | null
}

interface CurrentDisplayPayload {
  displayType: 'issues' | 'comments'
  issueId?: number
}

interface CurrentRepo {
  org: string
  repo: string
}

type CurrentDisplayState = {
  page: number
} & CurrentDisplay &
  CurrentRepo

const initialState: CurrentDisplayState = {
  org: 'rails',
  repo: 'rails',
  page: 1,
  displayType: 'issues',
  issueId: null,
};

const homeSlice = createSlice({
  name: 'homeSlice',
  initialState,
  reducers: {
    displayRepo(state, action: PayloadAction<CurrentRepo>) {
      const { org, repo } = action.payload;
      state.org = org;
      state.repo = repo;
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
    setCurrentDisplayType(state, action: PayloadAction<CurrentDisplayPayload>) {
      const { displayType, issueId = null } = action.payload;
      state.displayType = displayType;
      state.issueId = issueId;
    },
  },
});

export const {
  displayRepo,
  setCurrentDisplayType,
  setCurrentPage,
} = homeSlice.actions;

export default homeSlice.reducer;
