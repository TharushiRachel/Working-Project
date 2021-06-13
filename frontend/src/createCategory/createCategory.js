import React from 'react';
import axios from 'axios';

class CreateCategory extends React.Component{
    constructor(props){
        super(props);
        this.onChange=this.onChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
        this.state={
            ctrip_type:'',
            cduration:0,
            camount:0
        }
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value })
    }

    onSubmit(e){
        e.preventDefault();
        let category={
            trip_type:this.state.ctrip_type,
            duration:this.state.cduration,
            amount:this.state.camount
        }

        axios.post('http://localhost:8080/category/create', category)
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
                 <h1>Create Category</h1>
                 <form onSubmit={this.onSubmit}>
  <div className="mb-3">
    <label htmlFor="Type" class="form-label">Trip Type</label>
    <input type="text" class="form-control" id="Type" name="ctrip_type" value={this.state.ctrip_type} onChange={this.onChange} aria-describedby="emailHelp"/>
  </div>

  <div class="mb-3">
    <label for="categoryDuration" class="form-label">Duration</label>
    <input type="text" class="form-control" id="categoryDuration" name="cduration" value={this.state.cduration} onChange={this.onChange} />
  </div>

  <div class="mb-3">
    <label for="categoryAmount" class="form-label">Amount per Hour</label>
    <input type="Number" class="form-control" id="categoryAmount" name="camount" value={this.state.camount} onChange={this.onChange} />
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

export default CreateCategory;