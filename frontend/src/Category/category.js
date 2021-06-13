import React from 'react';
import axios from 'axios';

class ViewCategories extends React.Component{
    constructor(props){
        super(props);
        this.state={
           categories:[]
        }
    }

    componentDidMount(){
        axios.get('http://localhost:8080/category/')
        .then(responce=>{
            console.log('Categories', responce.data);
            this.setState({categories: responce.data.data})
        })
    }

    navigateVehiclePage(e, categoryId){
        window.location=`/${categoryId}`
    }


    render(){
        return(
            <div className="container"> 
                <h1>view category</h1>
                {this.state.categories.length > 0 && this.state.categories.map((item,index)=>(
                    <div key={index} className="card mb-3">
                        <div className="p-3" onClick={e=>this.navigateVehiclePage(e, item._id)}>
                        <h5>Category Name : {item.trip_type}</h5>
                        <h5>Duration : {item.duration}</h5>
                        <h5>Amount : {item.amount}</h5>
                        <br></br>
                        </div>
                    </div>
                ))}
                </div>
           
         )
    }
 
}

export default ViewCategories;