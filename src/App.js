
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Home from './components/Home';
import NoPage from './components/NoPage';
import AllDemo from './components/AllDemo';
import DisplayAccounts from './components/account/DisplayAccounts';
import AddAccount from './components/account/AddAccount';

function App() {

  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>

            <Route index element={<Home />}></Route>

            <Route path='/accounts' element={<DisplayAccounts />}></Route>
            <Route path='/account' element={<AddAccount />}></Route>
            <Route path='/demos' element={<AllDemo />}></Route>

            <Route path='*' element={<NoPage />}></Route>
          </Route>
        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
