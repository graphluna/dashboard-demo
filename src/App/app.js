import React, { useEffect, useCallback } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { fetchData, filter } from './store/app.actions';
import { getDataFiltered, getPositions } from './store/app.selectors';
import { Search } from '../Search/search.js';
import { List } from '../List/list';
import './app.css';

export function App() {
  const positions = useSelector(state => getPositions(state));
  const data = useSelector(state => getDataFiltered(state));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData())
  }, [dispatch])

  const handleSearch = useCallback(e => {
    e.preventDefault();
    let form = new FormData(e.target)
    let search = {
      name: form.get('name'),
      position: form.get('position'),
      age: form.get('age'),
    }
    dispatch(filter(search));
  }, [dispatch])

  const handleReset = useCallback(() => {
    dispatch(filter(''));
  }, [dispatch])

  return (
    <div className="App">
      <Search submit={handleSearch} reset={handleReset} positions={positions}/>
      <List heads={heads} data={data} />
    </div>
  );
}

const heads = ['Name', 'Nationality', 'Position', 'Age'];