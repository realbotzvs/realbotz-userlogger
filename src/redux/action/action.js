import axios from 'axios';
import {
  FETCH_EMPLOYEE_DATA
} from './actionType';
export const EmployeeDetailsFetch = () => async (dispatch) => {
    try {
      const DataDetailsData = await axios.get(
        'https://run.mocky.io/v3/a2fbc23e-069e-4ba5-954c-cd910986f40f',

      );
      // dispatch({
      //   type: FETCH_EMPLOYEE_DATA,
      //   payload: DataDetailsData.data.result.auditLog
      // });
      return DataDetailsData.data.result.auditLog;
  
    } catch (error) {
      console.log(error);
    }
  };
  