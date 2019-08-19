import * as React from 'react';

import { Head } from './components/head';
import { Row } from './components/row';
import { Cell } from './components/cell';

export function List({ heads, data }) {

  const headList = heads.map((head, inx) => <Head key={inx}>{head}</Head>);
  
  console.log(data)
  const dataList = data.map((dataItem, inx) => {
    let dataItemProps = Object.keys(dataItem);
    return (
      <Row key={inx}>
        {dataItemProps.map((prop, inx) => <Cell key={inx} text={dataItem[prop]} />)}
      </Row>
    ); 
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