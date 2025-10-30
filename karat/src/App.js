import logo from './logo.svg';
import './App.css';
import BasicFunction from './Components/BasicFunction';
import ClassFunction from './Components/ClassFunction';
import Counter from './Components/Counter';
import Counter1 from './Components/Counter1';
import Greet from './Components/Greet';
import Greet1 from './Components/Greet1';
import Destructuring from './Components/Destructuring';
import Destructuring1 from './Components/Destructuring1';
import ConditionalRendering from './Components/ConditionalRendering';
import ConditionalRendering1 from './Components/ConditionalRendering1';
import Key from './Components/Key';
import Key1 from './Components/Key1';
import Form from './Components/Form';

function App() {
  return (
    <div className="App">
      <BasicFunction />
      <ClassFunction />
      <Counter />
      <Counter1 />
      <Greet name='srinivas' />
      <Greet name='Abhirami' />
      <Greet1 name= 'John Snow' />
      <Destructuring name='Srinivas' place='Hyderabad' />
      <Destructuring1 name='Abhirami' place='Bangalore' />
      <ConditionalRendering />
      <ConditionalRendering1 />
      <Key />
      <Key1 />
      <Form />
    </div>
  );
}

export default App;
