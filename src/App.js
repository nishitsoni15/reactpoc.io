import logo from './logo.svg';
import './App.css';
import {Form , Header , Para,  Input1, Label, Button} from './styled';

function App() {
  return (
    <div className="App">
    
        {/* <Leftdiv></Leftdiv> */}
        {/* <Rightdiv></Rightdiv> */}
      <Form>
        <Header>Welcome!</Header>
        <Para>Sign in to your Account</Para>
        <Label for="email">Email</Label>
        <Input1 type="email" name="email" placeholder="email"/>
        <Label for="password">Password</Label>
        <Input1 type="password" name="password" placeholder="password"/>
        <Button type="submit">Submit</Button>
      </Form>
          
     
     
    </div>
  );
}

export default App;
