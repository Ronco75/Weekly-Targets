import './index.css';
import Header from './components/Header';
import TargetList from './components/TargetList';
import TargetForm from './components/TargetForm';
import Stats from './components/Stats';
import { Container } from 'react-bootstrap';
import { useState } from 'react'
import data from './data';
import { DataProvider } from './context/DataContext';


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

  //! Continue from here
  const editTarget = (id) => {
    console.log(id);
  }


return (<DataProvider>
  <Header />
   <Container>
  <TargetForm handleAdd={addTarget}/>
  <Stats/>
  <TargetList handleDelete={deleteTarget}
  handleEdit={editTarget} />
  </Container>
  </DataProvider>);
}

export default App;
