import { SET_TEAM_MEMBERS } from './action';


const initialState = {
  team: [], 
};

const teamReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TEAM_MEMBERS:
      return {
        ...state,
        team: action.payload,
      };
    default:
      return state;
  }
};

export default teamReducer;
