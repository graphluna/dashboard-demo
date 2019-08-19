import * as React from 'react';

export function Input({type="text", name, value, handleClick}) {
  return <input type={type} name={name} value={value} onClick={handleClick} />;
}