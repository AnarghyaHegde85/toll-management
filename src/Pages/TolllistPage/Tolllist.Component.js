import React, { PureComponent } from 'react';
import './Tolllist.scss';

class TolllistComponent extends PureComponent {
  renderPriceList(vehicleList) {
    return vehicleList.map((vehicle, vehicleIndex) => {
      return (
        <td key={vehicleIndex}>
          {vehicle.priceList.singleRate}/{vehicle.priceList.returnRate}
        </td>
      );
    })
  }

  fetchTolllistDetails = () => {
    const { TollList } = this.props;
    console.log(TollList);

    return (
      <>
        {TollList &&
          TollList.map((data, index) => {
            console.log(data);
            const { name, vehicleList } = data;
            return (
              <tr key={index}>
                <td>{name}</td>
                {this.renderPriceList(vehicleList)}
              </tr>
            )
          })}
      </>
    )
  }

  render() {
    return (
      <div>
        <div className='tollList'>

          <div className='tollList'>
            <table className='tollList-table'>
              <thead>
                <tr>
                  <th>TOLLNAME</th>
                  <th>CAR/JEEP/VAN</th>
                  <th>LCV</th>
                  <th>TRUCK/BUS</th>
                  <th>HEAVYVEHICLE</th>
                </tr>
              </thead>
              <tbody>
                {this.fetchTolllistDetails()}
              </tbody>
            </table>
            {this.props.TollList?.length === 0 && <p>No Data</p>}
          </div>
        </div>
      </div>
    )
  }
}

export default TolllistComponent;