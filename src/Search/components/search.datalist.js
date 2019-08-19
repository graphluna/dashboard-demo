import * as React from 'react';

export function Datalist({identifier, name, options}) {
  const opts = options.map(option => <option key={option} value={option} />)
  return (
    <>
      <input list={identifier} name={name} />
      <datalist id={identifier}>
        {opts}
      </datalist>
    </>
  );
}