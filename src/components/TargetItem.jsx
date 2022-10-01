import { ListGroup } from "react-bootstrap"
import ItemFunctions from "./ItemFunctions"

const TargetItem = ({ item, targetsData }) => {

  //TODO: Edit item by double click.

  const editItem = () => {
    
  }

  return (
    <ListGroup.Item 
    className="d-flex justify-content-between align-items-center"
    onDoubleClick={editItem()}>
    <h4>{item.text}</h4>
      <ItemFunctions 
      item={item}
      data={targetsData} />
    </ListGroup.Item>
)
}

export default TargetItem