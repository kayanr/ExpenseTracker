import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component
{
  constructor(props){
    super(props)
    this.state = {
    expenses:[]  
    }

  }
  componentDidMount(){
  fetch("http://localhost:8080/expenses")
  .then(res => res.json())
  .then((data) => {
    this.setState({
      expenses:data
    })
  })

  }

  
  render(){

    let body =[]
    for(let i=0; i<this.state.expenses.length;i++){
     // body.push(<p>{this.state.expenses[i].name}</p>)
     body.push(<div>
         
        <p style={{backgroundColor:"yellow", fontSize:"150%", backgroundSize:"150%"}}>{this.state.expenses[i].category} {this.state.expenses[i].name}
        &emsp; ${this.state.expenses[i].amount} </p>
     </div>
     
     )
    }
 
    return(
      body
    );
  }

}

export default App;
