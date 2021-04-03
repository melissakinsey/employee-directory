import React from "react";
import Nav from "./components/Nav/Nav.jsx";
import Table from "./components/Table/Table.jsx";
import Person from "./components/Person/Person.jsx";

class App extends React.Component{
  // Set up constructor to accept data array
  constructor(){
    super();
    this.state = {
      items: []
    }
  };
  // Make Ajax call to the randomuser API. Use componentDidMount because componentWillMount is deprecated.
  componentDidMount(){
    fetch("https://randomuser.me/api?results=10")
      .then(response => response.json())
      // Use results to set state
      .then(respond => this.setState({ items: respond.results }))
  };
  filter(e){
    this.setState({ filter: e.target.value })
  };
  // Use render method
  render(){
    let items = this.state.items;
    // if (this.state.filter){
    //   items = items.filter(item =>
    //     item.dob().includes(this.state.filter())
    //   )
    // }
    return (
      <div>
        <h1>
          Employee Directory
        </h1>
        <Table items={items}/>
        {/* <input type="text" onChange />*/}
      </div>
    )



    // Filter results by date of birth (dob)

    // Use filter method to listen for filter event (e) and accept input field (e.target.value)

    // }//Map items in the array returned from the API call
    // Use email as unique key to identify each result returned
    //Filter by dob
  }
}

export default App;
