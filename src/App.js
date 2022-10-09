import './index.css';
import { Container } from 'react-bootstrap';
import { DataProvider } from './context/DataContext';
import Header from './components/Header';
import TargetList from './components/TargetList';
import TargetForm from './components/TargetForm';
import Stats from './components/Stats';


function App() {


  return (
    <DataProvider>
      <Header />
        <Container>
          <TargetForm/>
          <Stats/>
         <TargetList />
       </Container>
    </DataProvider>
    );
}

export default App;
