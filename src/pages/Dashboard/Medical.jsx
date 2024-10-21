import React , { useState, useEffect}from "react";
import { medbody, medhead } from "../../data/db";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

function Medical() {

  const [products, setProducts] = useState(medbody);


  return (
    <div className="w-full h-full ">
      <div className="h-[45%] w-full">
        <div className=" w-[70%]">
      <div className="card">
            <DataTable value={products} tableStyle={{ minWidth: '50rem' }}>
                <Column field="name" header="name"></Column>
                <Column field="date" header="date"></Column>
                <Column field="medoff" header="medoff"></Column>
                <Column field="stat" header="stat"></Column>
                <Column field="time" header="time"></Column>
            </DataTable>
        </div>
      </div>

      <div className="w-[30%] bg-yellow-400">
        
      </div></div>

      <div className="h-[55%] bg-orange-600"></div>
    </div>
  );
}

export default Medical;
