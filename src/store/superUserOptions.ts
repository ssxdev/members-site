import { createSlice } from "@reduxjs/toolkit";

interface superUserOptionsState {
  isUserRoleUpdateModalVisible: boolean;
  username: string | null;
  isTaskUpdateModalVisible: boolean;
  taskId: string | null;
  isUserSkillUpdateModalVisible: boolean;
  isUserMember: boolean;
}

const initialState: superUserOptionsState = {
  isUserRoleUpdateModalVisible: false,
  username: null,
  isTaskUpdateModalVisible: false,
  taskId: null,
  isUserSkillUpdateModalVisible: false,
  isUserMember: false
}

export const superUserOptions = createSlice({
  name: 'superUserOptions',
  initialState: initialState,
  reducers: {
    setIsUserRoleUpdateModalVisible: (state, { payload: { visibility, username, isUserMember } }) => {
      state.isUserRoleUpdateModalVisible = visibility
      state.username = username
      state.isUserMember = isUserMember
    },
    setIsTaskUpdateModalVisible: (state, { payload: { visibility, taskId } }) => {
      state.isTaskUpdateModalVisible = visibility,
      state.taskId = taskId
    },
    setUserSkillModalVisibility: (state, { payload: { visibility, userId } }) => {
      state.isUserSkillUpdateModalVisible = visibility
      state.username = userId
    }
  }
})

export const {
  setIsUserRoleUpdateModalVisible,
  setIsTaskUpdateModalVisible,
  setUserSkillModalVisibility
} = superUserOptions.actions;

export default superUserOptions.reducer;