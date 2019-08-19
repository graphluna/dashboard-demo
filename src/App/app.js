import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData, filter, clean } from './store/app.actions';
import { getDataFiltered, getPositions } from './store/app.selectors';
import { formdata } from '../Utils/utils.formdata';
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
    let dataToSend = formdata(e.target)
    dispatch(filter(dataToSend));
  }, [dispatch])

  const handleReset = useCallback(() => {
    dispatch(clean());
  }, [dispatch])

  return (
    <div className="App">
      <Search submit={handleSearch} reset={handleReset} positions={positions}/>
      <List heads={heads} data={data} />
    </div>
  );
}

const heads = ['Name', 'Nationality', 'Position', 'Age'];