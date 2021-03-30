import React from "react";
import Nav from "./components/Nav/Nav.jsx";
import Table from "./components/Table/Table.jsx";
import Person from "./components/Person/Person.jsx";

class App extends React.Component
{
  // Set up constructor to accept data array
  constructor()
  {
    super();
    this.state = { items: [] }
  };
  // Make Ajax call to the randomuser API
  componentWillMount()
  {
    fetch("https://randomuser.me/api")
      .then(response => response.json())
      // Use results to set state
      .then(({ results: items }) => this.setState({ items }))
  };
  filter(e)
  {
    this.setState({ filter: e.target.value })
  };
  // Use render method
  render()
  {
    let items = this.state.items;
    if (this.state.filter)
    {
      items = items.filter(item =>
        item.dob()
          .includes(this.state.filter())
      )
    }
    return (
      <div>
        <input type="text" onChange />
        {items.map(item =>
          <Person key={item.email} person={item} />)}
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
            