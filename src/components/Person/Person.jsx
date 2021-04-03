const Person = (props) => {
    return (
        <tr>
          <td scope="row">{props.number+1}</td>
          <td>{props.item.name.first}</td>
          <td>{props.item.name.last}</td>
          <td>{props.item.gender}</td>
        </tr>
    )
    
}

export default Person