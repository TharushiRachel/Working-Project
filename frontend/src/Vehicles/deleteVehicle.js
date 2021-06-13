import React from 'react';
import axios from 'axios';
import Select from 'react-select';

class DeleteVehicle extends React.Component{
    constructor(props){
        super(props);
        this.onChange=this.onChange.bind(this);
        this.onVehicleSelect=this.onVehicleSelect.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
        this.state={
            vehicle:[],
            option:[],
            selectedVehicle:[]
        }
    }

    componentDidMount(){
        
        axios.delete(`http://localhost:8080/vehicle/${this.props.match.params.id}`)
        .then(response =>{
            this.setState({ vehicles: response.data.data })
            let data=[];
            this.state.vehicle.map((item,index)=>{
                let vehicle = {
                    value: item._id,
                    lable: item.code
                }
                data.push(vehicle)
            });
            this.state({option: data});
        })
        .catch(error => {
            alert(error.message)
          })
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value })
    }

    onVehicleSelect(e){
        this.setState({selectedVehicle:e? e.map(item=>item.value):[]});
    }

    onSubmit(e){
        e.preventDefault();
        let vehicle={
            vehicle: this.state.selectedVehicle
        };

        axios.delete(`http://localhost:8080/vehicle/delete/${vehicle.vehicle[0]}`, vehicle)
        .then(response => {
            alert('Data successfully inserted')
          })
          .catch(error => {
            console.log(error.message);
            alert(error.message)
          })
    }

    render() {
        return (
             <div>
                 {/* <h3>This vehicle has been deleted : {this.state.vehicle}</h3> */}
                 <h1>Delete Vehicle</h1>
                 <form onSubmit={this.onSubmit}>
                    <Select
                    options={this.state.options}
                    onChange={this.onVehicleSelect}
                    className="basic-multi-select"
                    isMulti
                    />
                 </form>
             </div>
        );
    }


}

export default DeleteVehicle;