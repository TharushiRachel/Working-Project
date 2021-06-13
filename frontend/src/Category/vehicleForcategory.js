import React from 'react';
import axios from 'axios';

class Vehicles extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            vehicles:[],
            totalAmount:''
        }
    }

    componentDidMount(){
        axios.get(`http://localhost:8080/category/${this.props.match.params.id}`)
        .then(response => {
           // this.setState({ vehicls: response.data.data })
           this.setState({vehicles: response.data.vehicles })
          })
          .catch(error => {
            alert(error.message)
          })

          axios.get(`http://localhost:8080/category/amount/${this.props.match.params.id}`)
          .then(response => {
            this.setState({ totalAmount: response.data.totalAmount })
        })
        .catch(error => {
             alert(error.message)
     })
    }


    render() {
        return (
             <div>
                 <h1>Total amount for this category : {this.state.totalAmount} </h1>
                 <h1>Vehicles in this category</h1>
                 {this.state.vehicles.length > 0 && this.state.vehicles.map((item, index)=>(
                    <div key={index} className="card mb-3">
                        <div className="p-3">
                            
                            <h4>Vehical Code : {item.code}</h4>
                            <h4>Model : {item.model} </h4>
                            <h4>Type : {item.type} </h4>
                            <h4>Vehical Name : {item.name}</h4>
                            
                        </div>
                    </div>
                ))}
             </div>
        );
    }
}

export default Vehicles;