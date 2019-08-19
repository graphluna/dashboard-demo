import * as React from 'react';

export function List({ heads, data }) {
  const headList = heads.map((head, inx) => <th key={inx}>{head}</th>);

  function createRow({ name, nationality, position, age }) {
    return (
      <>
        <td>{name}</td>
        <td>{nationality}</td>
        <td>{position}</td>
        <td>{age}</td>
      </>
    )
  }

  const dataList = data.map((rowData, inx) => {
    return(
      <tr key={inx.toString()}>
        {createRow(rowData)}
      </tr>  
    )
  })

  return (
    <table>
      <thead>
        <tr>{headList}</tr>
      </thead>
      <tbody>
        {dataList}
      </tbody>
    </table>
  );
}