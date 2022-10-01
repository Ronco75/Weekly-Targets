import { useState } from 'react';
import { Form, FloatingLabel, Button } from "react-bootstrap"

const TargetForm = ({ handleAdd, targetsData, setTargetsData }) => {
    const [text, setText] = useState('');

    const handleTextChange = (e) => {
      setText(e.target.value);
    }

    const handleSubmit = (e) => {
      e.preventDefault();

      const date = new Date().toLocaleString();
      const newTarget = {
        text,
        date,
        edit: false
      }
      handleAdd(newTarget);
      setText('');
    }


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