import TargetDate from "./TargetDate"
import { FaCheck } from "react-icons/fa"
import { Badge } from "react-bootstrap"

// TODO: Check item

const ItemFunctions = ({ item, targetsData }) => {

  return (
    <div className="d-flex justify-content-between">
    <Badge bg="danger" pill>
     <TargetDate />
   </Badge>

   <button style={{border: 'none', backgroundColor: '#fff'}}> 
   <a href="/" style={{color: '#333'}}><FaCheck /></a>
   </button>

   </div>
  )
}

export default ItemFunctions