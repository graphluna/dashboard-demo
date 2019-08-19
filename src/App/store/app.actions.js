import { SET_DATA, SET_FILTER } from './app.actions.types.json'

import { AppServices } from '../app.services';

export const fetchData = () => async dispatch => {
  try {
    const response = await AppServices.fetchData();
    dispatch({ type: SET_DATA, payload: response });
  }
  catch(error){
    console.error('Failed to fetch data on "fetchData" action', error)
  }
}

export const filter = filter => ({
  type: SET_FILTER,
  payload: filter
})