import React, { useState } from 'react';
import { SalesTable } from './SalesTable'
import { recentSales } from "../data/data";

export const Dashboard = () => {

    const[sales, setSales] = new useState(recentSales);


    function salesTableData() {
      return sales;
    };

    function handleValueChanged(tableData) {
      setSales(tableData.slice(0));
    }

    function handleFileImported(newSales) {
      setSales(newSales.slice(0));
    }

    return (
        <div style={{ backgroundColor: '#ddd' }}>
            <div className="container">
                <div className="row">
                    <SalesTable tableData={salesTableData()} 
                      valueChangedCallback={handleValueChanged}
                      fileImportedCallback={handleFileImported}/>
                </div>
            </div>
        </div>
        
    );
}

