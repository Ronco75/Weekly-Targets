import { ListGroup } from "react-bootstrap"
// import ItemFunctions from "./ItemFunctions"
import TargetDate from "./TargetDate"
import { FaCheck } from "react-icons/fa"
import { Badge } from "react-bootstrap"

const TargetItem = ({ item, handleDelete }) => {

  //TODO: Edit item by double click.
  //? why the button refresh the page ?
  // TODO: Stop refresh the page when click on the button.


  const editItem = () => {
    console.log(item);
  }

  return (
    <ListGroup.Item 
    className="d-flex justify-content-between align-items-center"
    onDoubleClick={editItem}>
    <h4>{item.text}</h4>

      <div className="d-flex justify-content-between">
    <Badge bg="danger" pill>
     <TargetDate />
   </Badge>

   <button style={{border: 'none', backgroundColor: '#fff'}}
   onClick={() => handleDelete(item.id)}> 
   <a href="/" style={{color: '#333'}}><FaCheck /></a>
   </button>

   </div>

    </ListGroup.Item>
)
}

export default TargetItem