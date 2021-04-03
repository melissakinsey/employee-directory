import React from 'react';
import Person from '../Person/Person'
function Table(props){
  return (
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Gender</th>
        </tr>
      </thead>
      <tbody>
        {
          props.items.map((item, number) =>
            <Person item={item} key={item.login.uuid} number={number}/>
          )
        }
      </tbody>
    </table>
  )
}

export default Table