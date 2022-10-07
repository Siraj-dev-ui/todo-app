import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import {Route, Routes} from 'react-router-dom'
import Home from './components/Home';
import Form from './components/Form';
import List from './components/List';
function App() {

  return (
    <>
<Header/>
  {/* <Form/>
  <List/> */}
     <Routes> 


     <Route path="/" element={<List />}/>
     <Route path="/user" element={<Form />}/>
          
        
        </Routes>
    </>
  );
}

export default App;
