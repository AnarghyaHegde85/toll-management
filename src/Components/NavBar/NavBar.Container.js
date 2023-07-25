import React, { PureComponent } from "react";
import { connect } from "react-redux";
import NavBarComponent from "./NavBar.Component";
import { addTOllList, tollList } from "../../Store/TollList/TollListAction";
import { showDialogVehicle, vehicleList, searchData } from "../../Store/VehicleList/VehicleListAction";
// import { dataFilter } from "../../Store/VehicleList/VehicleListAction";



class NavBarContainer extends PureComponent {
  state = {
    tollName: "",
    option1:"",
    option2:"",
    option3:"",
    option4:"",
    option1singleRate:"",
    option2singleRate:"",
    option3singleRate:"",
    option4singleRate:"",
    option1returnRate:"",
    option2returnRate:"",
    option3returnRate:"",
    option4returnRate:"",
    //----------------------------------
    TollPage: false,
    showDialog: false, //addVehicle
    showDialogVehicle: false,
    // showFilterData:false,
    vehicleType: "", //addVehicle
    vehicleNumber: "", //addVehicle
    tariff: "", //addVehicle

  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  //addVehicle
  handleDialogToggle(event) {
    event.preventDefault();
    const { showDialog } = this.state;

    this.setState({
      showDialog: !showDialog
    });
  };

  handleVehicleToggle(event) {
    event.preventDefault();
    const { showDialogVehicle } = this.state;

    this.setState({
      showDialogVehicle: !showDialogVehicle,
    });
  }


  handleTollListToggle = () => {
    this.setState((prevState) => ({
      showDialogTolllist: !prevState.showDialogTolllist,
      vehicleType: "",
    }));
  };
 resetState() {
    this.setState({
      tollName: "",
      option1:"",
      option2:"",
      option3:"",
      option4:"",
      option1singleRate:"",
      option2singleRate:"",
      option3singleRate:"",
      option4singleRate:"",
      option1returnRate:"",
      option2returnRate:"",
      option3returnRate:"",
      option4returnRate:"",
      vehicleType: "",
      vehicleNumber: "",
      tariff: "",
      showDialog: false,
      showDialogVehicle: false
    })
  }

  handleSave(event) {
    const { tollList } = this.props;
    event.preventDefault();
    const data = {
      name: this.state.tollName,
      vehicleList: [
        {
          vehicleType: this.state.option1,
          priceList: {
            singleRate: this.state.option1singleRate,
            returnRate: this.state.option1returnRate,

          }
        },
        {
          vehicleType: this.state.option2,
          priceList: {
            singleRate: this.state.option2singleRate,
            returnRate: this.state.option2returnRate
          }
        },
        {
          vehicleType: this.state.option3,
          priceList: {
            singleRate: this.state.option3singleRate,
            returnRate: this.state.option3returnRate
          }
        },
        {
          vehicleType: this.state.option4,
          priceList: {
            singleRate: this.state.option4returnRate,
            returnRate: this.state.option4returnRate
          }
        },
      ]
    };
    tollList(data);
    this.resetState();
  };

  //addVehicle
  handleVehicleSave(event) {
    const { vehicleList } = this.props;
    const { showDialogVehicle } = this.state;

    event.preventDefault();
    const data = {
      VehicleType: this.state.vehicleType,
      VehicleNumber: this.state.vehicleNumber,
      Tariff: this.state.tariff,
      SingleTariff:this.state.Singletariff,
      ReturnTariff:this.state.Returntariff,
      tollName: this.state.tollName,
      date: new Date().toLocaleString()
    };
    console.log(data);
    vehicleList(data);
    this.resetState();
  };


  handleSearch(event){
    const search = event.target.value;
    // this.setState({search}, () => {
      
    // });
    console.log(search);
    this.searchData(search);
    console.log(searchData);

  }

  async searchData(search) {
    // const {search} =this.state;
    const {VehicleList, searchData}=this.props;

    console.log(search);

    const filteredVehicleList = VehicleList.filter((data) => !(data.VehicleNumber === search));

    console.log(filteredVehicleList, 'nav----------');

    await searchData(filteredVehicleList);
    console.log(filteredVehicleList);
    
  }

  // showFilter = () => {
  //   this.setState((prevState) => ({
  //     showDialog:!prevState.showDialog,
  //   }))
  // }

  // getTollValue() {
  //   const tollValue=this.props.TollList;
  //   console.log(tollValue);
  // }



  // handleFilterToggle = () => {
  //    this.setState((prevState) => ({
  //     showFilter:!prevState.showFilter,
  //     tollName:"",
 // handleFilterBy = (filterBy) => {
  //   console.log(filterBy.target.outerText)
  //   const name2=filterBy.target.outerText
  //   this.setState({name2})

  //   this.setState({filterBy},()=>{
  //     this.filterData();
  //   });
  // };

  //    }));

  // };


  // handleFilterBy = (filterBy) => {
  //   console.log(filterBy.target.outerText)
  //   const filteredDatas=filterBy.target.outerText
  //   this.setState({filteredDatas})

  //   this.setState({filterBy},()=>{
  //     this.filterData();
  //   });
  // };


  // handleAll =  ()=> {
  //   // console.log("hhh");
  //   this.props?.dataFilter(this?.props?.VehicleList)
  // }

  //   filterData = () => {
  //     console.log(this.props.VehicleList);
  //     console.log(this.props.tollName);
  //     const {filteredDatas}=this.state;
  //     const  filteredData =  this.props?.VehicleList?.filter((data) => {
  //       return data.tollName === filteredDatas;
  //     })
  //   console.log((filteredData))
  // this.props.dataFilter(filteredData)
  //   };



  // handlePages = () => {
  //   this.setState((prev) => ({
  //     TollPage: !prev.TollPage,
  //   }));
  // };


  // handleSearch = (event) => {
  //   const search = event.target.value;
  //   console.log(search)
  //   this.setState({ search }, () => {
  //     this.searchData();
  //   })
  // };
  // searchData = () => {
  //   console.log(this.state.search)
  //   const { search } = this.state;
    // if(search){
    //     const  searchNumber =  this.props?.VehicleList?.filter((data) => {
    //       return data.VehicleNumber === search;
    //     })
    //     return searchNumber
    //   }

  //   const searchNumber = search ? this.props?.VehicleList?.filter((data) => {
  //     return String(data.VehicleNumber).includes(search)
  //   }) : this.props.VehicleList

  //   console.log(searchNumber)
  //   this.props.VehicleList(searchNumber)

  // }
  // showFilter=()=>{
  //   this.setState({
  //     showFilterData :true
  //   })
  // }


  handleFunctions = {
    handleSave: this.handleSave.bind(this),
    handleChange: this.handleChange.bind(this),
    // handlePages: this.handlePages.bind(this),
    handleVehicleSave: this.handleVehicleSave.bind(this),
    handleDialogToggle: this.handleDialogToggle.bind(this),
    handleVehicleToggle: this.handleVehicleToggle.bind(this),
    // getTollValue:this.getTollValue.bind(this),
    // handleFilterToggle:this.handleFilterToggle.bind(this),
    // handleFilterBy:this.handleFilterBy.bind(this),
    handleSearch: this.handleSearch.bind(this),
    // showFilter:this.showFilter.bind(this),
    // getTollValue:this.getTollValue.bind(this)
  };

  render() {

    // const {filteredVehicleList}=this.props;

    return (
      <>
        <NavBarComponent
          {...this.props}
          {...this.handleFunctions}
          {...this.state}
        />
        
      </>
    );
  }
}


const mapStateToProps = (state) => ({
  TollList: state.toll.TollList,
  VehicleList: state.vehicle.VehicleList,
  filteredVehicleList: state.vehicle.filteredVehicleList
});

const mapDispatchToProp = (dispatch) => ({
  showDialogVehicle: () => dispatch(showDialogVehicle()),
  addTOllList: () => dispatch(addTOllList()),
  tollList: (e) => dispatch(tollList(e)),
  vehicleList: (e) => dispatch(vehicleList(e)),
  // dataFilter:(filteredData)=>dispatch(dataFilter(filteredData)),
  searchData: (data) => dispatch(searchData(data)),
});


export default connect(mapStateToProps, mapDispatchToProp)(NavBarContainer);
