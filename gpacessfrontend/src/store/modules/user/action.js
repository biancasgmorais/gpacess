export const updateProfileRequest = (data) => {
  return {
    type: '@user/UPDATE_PROFILE_REQUEST',
    payload: { data },
  };
};

export const updateProfileSuccess = (profile) => {
  return {
    type: '@user/UPDATE_PROFILE_SUCCESS',
    payload: { profile },
  };
};

export const updateProfileFailure = () => {
  return {
    type: '@user/UPDATE_PROFILE_FAILURE',
  };
};

export const updateUserRequest = (data) => {
  return {
    type: '@user/UPDATE_USER_REQUEST',
    payload: { data },
  };
};

export const updateTagRequest = (data) => {
  return {
    type: '@user/UPDATE_TAG_REQUEST',
    payload: { data },
  };
};

export function forgotPass(email) {
  return {
    type: '@user/FORGOT_PASS_REQUEST',
    payload: { email },
  };
}
