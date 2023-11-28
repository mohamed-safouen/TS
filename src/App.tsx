
import './App.css';
import { Container } from './components/Container';
import { Greet } from './components/Greet';
import { Heading } from './components/Heading';
import { Input } from './components/Input';
import { Oscar } from './components/Oscar';
import { Private } from './components/auth/Private';
import { Profile } from './components/auth/Profile';
import { Button } from './components/button';
import { Counter } from './components/class/Counter';
import { Box } from './components/context/Box';
import { ThemeContextProvider } from './components/context/ThemeContext';
import { User } from './components/context/User';
import { UserContextProvider } from './components/context/UserContexr';



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
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
      <UserContextProvider>
        <User/>
      </UserContextProvider>
      <Counter message='Count value is'/>
      <Private isLoggedIn={true} Component={Profile}/>
    </div>
  );
}

export default App;
