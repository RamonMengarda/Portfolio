import React from 'react';
import { TablePanel } from "./TablePanel";

export const SalesTable = ({ tableData } ) => {
    return (
        <TablePanel title="Recent Sales">
			<table className="table">
			  <thead>
				<tr>
				  <th>Client</th>
				  <th>Description</th>
				  <th>Value</th>
				  <th>Quantity</th>
				</tr>
			  </thead>
			  <tbody>
                {tableData.map((sale) =>
                (<tr key={sale.id}>
                    <td>{sale.client}</td>
                    <td>{sale.description}</td>
                    <td>${sale.value}</td>
                    <td>{sale.itemCount}</td>
                </tr>))}
			  </tbody>
			</table>
        </TablePanel>
    );
}
