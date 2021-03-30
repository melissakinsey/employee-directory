import React from 'react';
import Nav from './components/Nav/Nav.jsx'
class App extends React.component
{
 // Set up constructor to accept data array
  constructor()
  {
    super();
    this.state = {items []}
  }
  // Make Ajax call to the randomuser API
  componentWillMount()
  {
    fetch('https://randomuser.me/api')
      .then(response => response.json())
  // Use results to set state
      .then(({results: items}) => this.setState({items}))
  }
  // Use filter method to listen for filter event (e) and accept input field (e.target.value)
  filter(e) {
    this.setState({filter: e.target.value})
  }
  // Use render method
  render()
 
  {
    let items = this.state.items;
    // Filter results by date of birth (dob)
    if(this.state.filter) {
      items = items.filter(item =>
        item.dob()
        .includes(this.state.filter())
        )
      
    }
    //Map items in the array returned from the API call
    return (
      // Use email as unique key to identify each result returned
      //Filter by dob

      <div>
        <input type="text" onChange={this.filter.bind(this)} />"
        {items.map(item => <p key={item.email}>{item.name}</p>)}
      </div>
    )

  }
}


function App()
{
  return (
    <div className="App">
      <Nav/>
    </div>
  );
}

export default App;
