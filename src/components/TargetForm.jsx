import { useContext } from 'react';
import DataContext from '../context/DataContext'
import { Form, FloatingLabel, Button } from "react-bootstrap"

const TargetForm = () => {

  const { text, handleSubmit, handleTextChange } = useContext(DataContext);


  return (
      <>
    <Form onSubmit={handleSubmit} >
    <FloatingLabel
    controlId="target"
    label="Main Weekly Goals..."
    className="my-3 mx-auto">
        <Form.Control 
        onChange={handleTextChange}
        value={text}
         type="text"
          placeholder="Main Weekly Goals..." />
    </FloatingLabel>

  <Button variant="primary" type="submit">
    Add
  </Button>
</Form>
</>
  )
}

export default TargetForm