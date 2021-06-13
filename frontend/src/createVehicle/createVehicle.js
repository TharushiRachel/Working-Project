import React from 'react';
import axios from 'axios';
import Select from 'react-select';

class CreateVehicle extends React.Component{
    constructor(props){
        super(props);
        this.onChange=this.onChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
        this.onCategorySelect=this.onCategorySelect.bind(this);
        this.state={
            vcode:'',
            vmodel:'',
            vtype:'',
            vname:'',
            categories:[],
            options:[],
            selectedCategories:[]
        }
    }

    componentDidMount(){
        axios.get('http://localhost:8080/category/')
        .then(response=>{
            this.setState({categories: response.data.data},()=>{
                let data=[];
                this.state.categories.map((item,index)=>{
                    let category={
                        value:item._id,
                        label:item.trip_type
                    }
                    data.push(category)
                });
                this.setState({options:data});
            })
        })
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value })
    }

    onCategorySelect(e){
        this.setState({selectedCategories:e? e.map(item=>item.value):[]});
    }

    onSubmit(e){
        e.preventDefault();
        let vehicle={
            code:this.state.vcode,
            model:this.state.vmodel,
            type:this.state.vtype,
            name:this.state.vname,
            categories:this.state.selectedCategories
        }
        console.log('data to send',vehicle);
        axios.post('http://localhost:8080/vehicle/create',vehicle)
        .then(response=>{
            alert('Data successfully inserted')
        })
        .catch(error=>{
            console.log(error.message);
            alert(error.message)
        })
    }

    render() {
        return (
             <div>
                 <h1>Create Vehicle</h1>
                 <form onSubmit={this.onSubmit} >
  <div className="mb-3">
    <label htmlFor="vehicleCode" class="form-label">Code</label>
    <input type="text" class="form-control" id="vehicleCode" name="vcode" value={this.state.vcode} onChange={this.onChange} aria-describedby="emailHelp"/>
  </div>

  <div class="mb-3">
    <label for="vehicleModel" class="form-label">Model</label>
    <input type="text" class="form-control" id="vehicleModel" name="vmodel" value={this.state.vmodel} onChange={this.onChange} />
  </div>

  <div class="mb-3">
    <label for="vehicleType" class="form-label">Type</label>
    <input type="text" class="form-control" id="vehicleType" name="vtype" value={this.state.vtype}  onChange={this.onChange} />
  </div>

  <div class="mb-3">
    <label for="vehicleName" class="form-label">Name</label>
    <input type="text" class="form-control" id="vehicleName" name="vname" value={this.state.vname} onChange={this.onChange} />
  </div>

  <div class="mb-3">
    <label htmlFor="vehicleCategories" class="form-label">Category</label>
    <Select
  options={this.state.options}
  onChange={this.onCategorySelect}
  className="basic-multi-select"
  isMulti
  />
  </div>

  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>

  <button type="submit" class="btn btn-primary">Submit</button>
</form>
             </div>
        );
    }
}

export default CreateVehicle;