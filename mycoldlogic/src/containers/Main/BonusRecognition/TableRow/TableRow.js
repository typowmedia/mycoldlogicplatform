import React from 'react';

const TableRow = ( props ) => {
  let wkEndDate = new Date(props.recognition.wkEndDate);
  return (
    <tr>
      <td>{wkEndDate.toDateString()}</td>
      <td>{props.recognition.dlyIncTot}</td>
      <td>{props.recognition.wklyIncTot}</td>
      <td>{props.recognition.grssInc}</td>
      <td>{props.recognition.bbsFactor}</td>
      <td>{props.recognition.netInc}</td>
    </tr>
  );
};

export default TableRow;
