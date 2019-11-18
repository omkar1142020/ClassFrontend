import React, {Component} from 'react';
import Navigation from './components/Navigation/Navigation';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import Particles from 'react-particles-js';
import './App.css';

const particlesOptions = {
  particles:{
      number:{
          value :150,
          density:{
            enable : true,
            value_area : 800
        }
      }
    }
}

const initialstate = {
   input: '',
    imageUrl: '',
    route: 'signin',
    issignedin: false,
    loadUser : {
      id: '',
      name: '',
      email: 0,
      joined: ''
    }
  }
class App extends Component{
constructor(){
  super();
  this.state =initialstate;
}

loadUser = (data) =>{
  this.setState({
     loadUser : {
      id: data.id,
      name: data.name,
      email: data.entries,
      joined: data.joined
    }
  })
}
onRouteChange = (route) =>{
  if(route === 'home'){
    this.setState({ issignedin : true });
  }else{
     this.setState(initialstate);
  }
  this.setState({ route: route});
}


render(){
  return (
        <div className="App">
          <Particles className='particles'
                    params={particlesOptions} 
          />
          <Navigation onRouteChange={this.onRouteChange} issignedin={this.state.issignedin}/>
          { this.state.route === 'home'?
            <div>
            <h1>hi</h1>
            </div>
            :(  this.state.route === 'signin'?
                <Signin loadUser= { this.loadUser } onRouteChange= { this.onRouteChange }/>
                :
                <Register loadUser= { this.loadUser } onRouteChange= { this.onRouteChange }/>
              )
            
            
         }
        </div>
    );
  }
}

export default App;
