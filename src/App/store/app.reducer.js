import { SET_DATA, SET_FILTER, DEL_FILTER } from './app.actions.types.json';

const init = {
  filter : '',
  data : []
}

export function appReducer(state = init, action) {
  const { type, payload } = action;
  switch(type){
    case SET_DATA:
      return { ...state, data: payload }
    case SET_FILTER:
      return { ...state, filter: payload }
    case DEL_FILTER:
      return { ...state, filter: init.filter }
    default:
      return state
  }
}