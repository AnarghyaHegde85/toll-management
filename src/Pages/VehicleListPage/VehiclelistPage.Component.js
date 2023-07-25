import React, { PureComponent } from "react";
import "./VehicleList.scss";


export default class VehiclelistPageComponent extends PureComponent {

  fetchVehicleDetails = () => {
    const { VehicleList ,TollList ,filteredVehicleList} = this.props;
    console.log(VehicleList);
    console.log(filteredVehicleList, 'filtersearch');
    
    // if (filteredVehicleList.length === 0) {
    //   return <p>No data...</p>
    // }
    

    return (
      <>
        {
          VehicleList?.map((data, index) => {
            console.log(data);
            return (
              <>
              <tr key={index}>
                <td>{data.VehicleType}</td>
                <td>{data.VehicleNumber}</td>
                <td>{data.date}</td>
                <td>{data.tollName}</td>
                <td>{data.Tariff}</td>
              </tr> 
              </>
            );
          })}
       </>
    );
  };
  render() {
    return (
      <>
        <div className="VehicleList">
          <table className="VehicleList-table">
            <thead className="VehicleList-table-head">
              <tr>
                <th>VehicleType</th>
                <th>VehicleNumber</th>
                <th>Date</th>
                <th>TollName</th>
                <th>Tariff</th>
                </tr>
            </thead>
            <tbody className="VehicleList-table-body">
              {this.fetchVehicleDetails()}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}


