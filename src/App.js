import './index.css';
import Header from './components/Header';
import TargetList from './components/TargetList';
import TargetForm from './components/TargetForm';
import Stats from './components/Stats';
import { Container } from 'react-bootstrap';
import { useState } from 'react'
import data from './data';

function App() {

  const [targetsData, setTargetsData] = useState(data);

  const addTarget = (newTarget) => {
    if (newTarget.text.length === 0) {
      window.alert('Please Add Target!')
    } else {
    setTargetsData([newTarget, ...targetsData])
  }}

  const deleteTarget = (e, id) => {
    e.preventDefault();
    setTargetsData(targetsData.filter((item) => item.id !== id));
  }


return (<>
  <Header />
   <Container>
  <TargetForm handleAdd={addTarget}/>
  <Stats targetsData={targetsData}/>
  <TargetList targetsData={targetsData}
  handleDelete={deleteTarget} />
  </Container>
  </>);
}

export default App;
