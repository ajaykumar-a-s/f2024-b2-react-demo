import logo from './logo.svg';
import './App.css';
import Profile from './components/Profile';
import { name, email, namesArray, Button } from './components/Profile'
import Demo from './components/Demo';
import PropsDemo from './components/PropsDemo';
import ConditionalRendering from './components/ConditionalRendering';
import MapDemo from './components/MapDemo';
import Products from './components/Products';
import EventDemo from './components/EventDemo';
import DemoForm from './components/DemoForm';

function App() {

  return (
    <div className="App">
      <DemoForm />
      <EventDemo />
      <h3> This is my first React app !</h3>
      <h3>Products demo</h3>
      <Products />
      <h3> Map demo</h3>
      <MapDemo />
      <h3>Conditional rendering demo</h3>
      <ConditionalRendering />
      <PropsDemo />
      <Demo />
      <p>Ford India </p>
      <p>{name}</p>
      <p>{email}</p>
      <p>{namesArray[1]}</p>

      <Profile></Profile>
      <Profile></Profile>
      <Profile></Profile>
      <Profile></Profile>
      <Button></Button>
    </div>
  );
}

export default App;
