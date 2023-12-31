import "./App.css";
import { Container } from "./components/Container";
import { Greet } from "./components/Greet";
import { Heading } from "./components/Heading";
import { Input } from "./components/Input";
import { Oscar } from "./components/Oscar";
import { Private } from "./components/auth/Private";
import { Profile } from "./components/auth/Profile";
import { Button } from "./components/button";
import { Counter } from "./components/class/Counter";
import { Box } from "./components/context/Box";
import { ThemeContextProvider } from "./components/context/ThemeContext";
import { User } from "./components/context/User";
import { UserContextProvider } from "./components/context/UserContext";
import { List } from "./components/generics/List";
import { CustomButton } from "./components/html/Button";
import { Text } from "./components/polymorphic/Text";
import { RandomNumber } from "./components/restrection/RandomNumber";
import { Toast } from "./components/templateliterals/Toast";

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
      {/* <Oscar>
        <Heading> Leo </Heading>
      </Oscar>
      -------------------------------------
      <Greet name="Vishwas" isLoggedIn={false} />
      -------------------------------------
      <br />
      <Button
        handleClick={(event) => {
          console.log("clicked", event);
        }}
      />
      <Input value="" handleChange={(event) => console.log(event)} />
      <br />
      -------------------------------------
      <Container styles={{ border: "1px solid black", padding: "1rem" }} />
      -------------------------------------
      {/*<ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
      -------------------------------------
      <UserContextProvider>
        <User />
      </UserContextProvider>*/}
      -------------------------------------
      {/* <Counter message="Count value is" />
      -------------------------------------
      <Private isLoggedIn={true} Component={Profile} />
      -------------------------------------
      <List
        items={["Batman", "Superman", "Wonder Woman"]}
        onClick={(item) => console.log(item)}
      />
      <List items={[1, 2, 3]} onClick={(item) => console.log(item)} /> */}
      {/* <List
        items={[
          { first: "d", last: "c" },
          { first: "a", last: "b" },
          { first: "e", last: "f" },
        ]}
        onClick={(item) => console.log(item)}
      /> */}
      ------------------------------------------------------------
      {/* <RandomNumber value={10} isPositive /> 
      <Toast position='center'/> */}
      <CustomButton variant="primary" onClick={() => console.log("clicked")}>
        Primary Button
      </CustomButton>
      <Text as="h1" size="lg">
        Heading
      </Text>
      <Text as="p" size="md">
        Paragraph
      </Text>
      <Text as="label" htmlFor='id' size="sm" color="secondary">
        Label
      </Text>
    </div>
  );
}

export default App;
