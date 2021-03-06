import { createSelector } from 'reselect';
import { age } from '../../Utils/utils.age';

const getData = state => state.appReducer.data;

const getFilter = state => state.appReducer.filter;

const getDataFlatted = createSelector([getData], (players) => {
  return players.map(player => ({
    name: player.name,
    nationality: player.nationality,
    position: player.position,
    age: age(player.dateOfBirth)
  }))
});

export const getPositions = createSelector(getDataFlatted, (players) => {
  let positions = players.map(player => player.position);
  let storage = new Set(positions)
  return Array.from(storage);
})


export const getDataFiltered = createSelector(
  [getFilter, getDataFlatted],
  (filter, players) => {
    if(!filter) return players;
    return players.filter(player => player.name === filter.name && player.position === filter.position && player.age === Number(filter.age))
  }  
);