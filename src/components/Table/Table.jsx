import React, {useEffect, useState} from 'react';
import Person from '../Person/Person';

function Table(props)
{
  const [sorted, setSorted] = useState([]);

  useEffect(() =>
  {
    setSorted(props.items)
  },[props.items])

  function sort(key1,key2)
  {
      
    let unsorted = [...sorted];
    unsorted.sort((a, b) => a[key1][key2].localeCompare(b[key1][key2])
    )
    console.log(unsorted)
    setSorted(unsorted)
  }  

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th>Badge</th>
          <th scope="col" onClick={()=>sort('name','first')}>First</th>
          <th scope="col" onClick={()=>sort('name','last')}>Last</th>
          <th scope="col">Gender</th>
        </tr>
      </thead>
      <tbody>
        {
          sorted.map((item, number) =>
            <Person item={item} key={item.login.uuid} number={number}/>
          )
        }
      </tbody>
    </table>
  )
}

export default Table