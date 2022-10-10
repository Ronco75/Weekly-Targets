import { useContext } from 'react'
import DataContext from '../context/DataContext'
import { ListGroup } from "react-bootstrap"
import TargetDate from "./TargetDate"
import { FaCheck } from "react-icons/fa"
import { Badge } from "react-bootstrap"

const TargetItem = ({ item }) => {

  const { deleteTarget, editTarget } = useContext(DataContext)

  return (
    <ListGroup.Item 
    className="d-flex justify-content-between align-items-center"
    onDoubleClick={() => editTarget(item.id)} >
    <h4>{item.text}</h4>

      <div className="d-flex justify-content-between">
    <Badge bg="danger" pill>
     <TargetDate />
   </Badge>

   <button style={{border: 'none', backgroundColor: '#fff'}}
   onClick={(e) => deleteTarget(e, item.id)}> 
   <a href="/" style={{color: '#333'}}><FaCheck /></a>
   </button>

   </div>

    </ListGroup.Item>
)
}

export default TargetItem