import { FETCH_EMPLOYEE_DATA } from "../action/actionType";

const emplyeeData = (state = [], action) => {
  switch (action.type) {
    case FETCH_EMPLOYEE_DATA:
      return action.payload;

    default:
      return state;
  }
};

export default emplyeeData;
