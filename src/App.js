import Input from './components/Input/Input';
import Button from './components/Button/Button';
import Form from './components/Form/Form';
import "./App.css"

import { useState } from 'react';


function App() {
  const [userForm, setUserForm] = useState({
    userName:"",
    password:""
  })

  const onValidation = () => {
    if(userForm.userName === "" || userForm.password === ""){
      alert("Form not valid")
    }else{
      alert("Form sent")
    }
  }
  return (
    <div className='custom-page'>
      <Form>
        <h2>Login Page</h2>
        <Input value={userForm.userName} placeholder={'User Name'} onChange={(e) => {
          //setUserForm({userName:e.target.value, password:userForm.password})
          setUserForm({... userForm, userName:e.target.value})
        }} />
        <Input type="password" value={userForm.password} placeholder={'Password'} onChange={(e) => {
          //setUserForm({password:e.target.value, userName:userForm.userName})
          setUserForm({... userForm, password:e.target.value})
        }} />
        <Button text="Sign In" onClick={onValidation}></Button>
      </Form>
    </div>
  );
}

export default App;
