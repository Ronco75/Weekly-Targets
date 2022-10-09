import { useContext } from 'react'
import DataContext from '../context/DataContext'
import { Card, ListGroup } from 'react-bootstrap'
import TargetItem from './TargetItem'

//Get week number (1-52)
let now = new Date();
let onejan = new Date(now.getFullYear(), 0, 1);
let weekNumber = Math.ceil((((now.getTime() - onejan.getTime()) / 86400000) + onejan.getDay() + 1) / 7 -1);
     
const TargerList = () => {

  const { targetsData, deleteTarget, editTarget } = useContext(DataContext);

  return (<>

    <Card className='my-3' border='primary'>
    <Card.Body>
    <ListGroup variant="flush">

    <Card.Title>Week {weekNumber} Targets:</Card.Title>

      <hr style={{background: 'grey', height: '2px',}}/>

    {targetsData.length === 0 ?
     <h5 className='text-muted'>Add Some Weekly Targets...</h5> :
     targetsData.map((item) => (
      <TargetItem
      key={item.id}
      item={item}
      handleDelete={deleteTarget}
      handleEdit={editTarget}
      />
    ))}

    </ListGroup>
  </Card.Body>
</Card>
  </>
  )}

export default TargerList

