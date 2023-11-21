
import './App.css';
import { Greet } from './components/Greet';
import { Heading } from './components/Heading';
import { Oscar } from './components/Oscar';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';



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
      <Person name={PersonName} />
      <PersonList names={nameList} />
      <Status status="loading" />
      <Heading> Placeholder Text </Heading>
      <Oscar>
        <Heading> Leo </Heading>
      </Oscar>
      <Greet name="Vishwas"  isLoggedIn={false} />
    </div>
  );
}

export default App;
