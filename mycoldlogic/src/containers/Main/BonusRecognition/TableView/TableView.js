import React from 'react';
import TableRow from './TableRow/TableRow';

const TableView = ( props ) => {
  const recognitions = props.recognitions.map(week => {
    return <TableRow key={week.id} recognition={week} />
  });
  return (
      <table>
        <thead>
          <tr>
            <th>Week Ending Date</th>
            <th>Daily Incentives</th>
            <th>Weekly Incentives</th>
            <th>Gross Incentives</th>
            <th>BBS Factor</th>
            <th>Net Incentives</th>
          </tr>
        </thead>
        <tbody>
          {recognitions}
        </tbody>
      </table>
  );
};

export default TableView;
