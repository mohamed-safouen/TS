
import './App.css';
import { Container } from './components/Container';
import { Greet } from './components/Greet';
import { Heading } from './components/Heading';
import { Input } from './components/Input';
import { Oscar } from './components/Oscar';
import { Button } from './components/button';



function App() {
  const PersonName = {
    first: "Bruce",
    last: "Wayne",
  };
  const nameList = [
    { first: "Bruce", last: "Wayne" },
    { first: "Clark", last: "Ken" },
    { first: "Princess", last: "Diana" },
  ];
  return (
    <div className="App">
      <Oscar>
        <Heading> Leo </Heading>
      </Oscar>
      <Greet name="Vishwas"  isLoggedIn={false} />
      <Button handleClick={(event)=>{console.log('clicked',event)}}/>
      <Input value = '' handleChange={(event)=> console.log(event)}/>
      <Container styles={{border:'1px solid black',padding:"1rem"}}/>
    </div>
  );
}

export default App;
