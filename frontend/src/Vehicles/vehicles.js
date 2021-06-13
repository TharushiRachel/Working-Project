import React from 'react';
import axios from 'axios';

class ViewVehicles extends React.Component{
    constructor(props){
        super(props);
        this.state={
           vehicles:[]
        }
    }

    componentDidMount(){
        axios.get('http://localhost:8080/vehicle/')
        .then(responce=>{
            //console.log('vehicles', responce.data);
            this.setState({vehicles: responce.data.data})
        })
    }

    navigateDeleteVehiclePage(e,vehicleId){
        window.location=`/${vehicleId}`
    }

   

    render(){
        return(
            <div className="container"> 
                <h1>view Vehicles</h1>
                {this.state.vehicles.length>0 && this.state.vehicles.map((item,index)=>(
                    <div key={index} className="card mb-3">
                        <div className="p-3">
                        <h5>Code : {item.code}</h5>
                        <h5>Model : {item.model}</h5>
                        <h5>Type : {item.type}</h5>
                        <h5>Name : {item.name} </h5>
                        <button onClick={e=> this.navigateDeleteVehiclePage(e, item._id)}>Delete </button>
                        <br></br>
                        </div>
                    </div>
                ))}
                </div>
           
         )
    }
 
}

export default ViewVehicles;