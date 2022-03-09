
import './App.css';
import Scene from './components/scene'
import "bootstrap/dist/css/bootstrap.min.css";
import { MDBContainer } from 'mdb-react-ui-kit';
import Header from './components/header';



function App() {
  return (
    <div className="" size='lg' >
      {/* <MDBContainer> */}
        <Scene />
        <footer />
        {/* <Header /> */}
      {/* </MDBContainer> */}
    </div>
  );
}

export default App;
