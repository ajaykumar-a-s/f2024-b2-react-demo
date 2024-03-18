
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Home from './components/Home';
import NoPage from './components/NoPage';
import AllDemo from './components/AllDemo';

function App() {

  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>

            <Route index element={<Home />}></Route>

            <Route path='/demos' element={<AllDemo />}></Route>

            <Route path='*' element={<NoPage />}></Route>
          </Route>
        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
