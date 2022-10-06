import { ListGroup } from "react-bootstrap"
// import ItemFunctions from "./ItemFunctions"
import TargetDate from "./TargetDate"
import { FaCheck } from "react-icons/fa"
import { Badge } from "react-bootstrap"

const TargetItem = ({ item, handleDelete }) => {

  //TODO: Edit item by double click.

  return (
    <ListGroup.Item 
    className="d-flex justify-content-between align-items-center">
    <h4>{item.text}</h4>

      <div className="d-flex justify-content-between">
    <Badge bg="danger" pill>
     <TargetDate />
   </Badge>

   <button style={{border: 'none', backgroundColor: '#fff'}}
   onClick={(e) => handleDelete(e, item.id)}> 
   <a href="/" style={{color: '#333'}}><FaCheck /></a>
   </button>

   </div>

    </ListGroup.Item>
)
}

export default TargetItem