import * as React from 'react';
import { Input } from './components/search.input';
import { Datalist } from './components/search.datalist';
import './search.css';

export function Search({submit, reset, positions}) {
  return (
    <form className="search_form" onSubmit={submit}>
      <Input name="name" />
      <Datalist identifier="position" name="position" options={positions}/>
      <Input name="age" />
      <Input type="submit" />
      <Input type="reset" handleClick={reset}/>
    </form>
  );
}