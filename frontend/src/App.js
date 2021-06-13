import './App.css';
import NavBar from './navBar/navBar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import CreateCategory from './createCategory/createCategory';
import CreateVehicle from './createVehicle/createVehicle';
import ViewCategories from './Category/category';
import ViewVehicles from './Vehicles/vehicles';

import DeleteVehicle from './Vehicles/deleteVehicle';
import Vehicles from './Category/vehicleForcategory';

function App() {
  return (
    <div className="App">
     <Router>
       <NavBar/>
       <section>
         <Switch>
           <Route path="/create-category" component={CreateCategory}/>
           <Route path="/create-vehicle" component={CreateVehicle}/>
           <Route path="/view-categories" component={ViewCategories}/>
           <Route path="/view-vehicles" component={ViewVehicles}/>
           <Route path="/:id" component={Vehicles}/>
           <Route path="/:id" component={DeleteVehicle}/>
         </Switch>
       </section>
     </Router>
    </div>
  );
}

export default App;
