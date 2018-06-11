import React from 'react';

const TableRow = ( props ) => {
  let wkEndDate = new Date(props.recognition.wkEndDate);
  return (
    <tr>
      <td>{wkEndDate.toDateString()}</td>
      <td>{props.recognition.dlyIncTot.toFixed(2)}</td>
      <td>{props.recognition.wklyIncTot.toFixed(2)}</td>
      <td>{props.recognition.grssInc.toFixed(2)}</td>
      <td>{props.recognition.bbsFactor.toFixed(2)}</td>
      <td>{props.recognition.netInc.toFixed(2)}</td>
    </tr>
  );
};

export default TableRow;
