import React, { useState } from 'react';
import logo from './logo.svg';
import { useDispatch } from 'react-redux';
import './App.css';
import { USER_TYPE } from './store/UserReducer';
import UserDisplay from './UserDisplay';

function App() {

  const [userId, setUserid] = useState(0);
  const dispatch = useDispatch(); // Redux hook
  const onChangeUserId = async (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("userid", e.target.value);
    const useridFromInput = e.target.value ? Number(e.target.value) : 0;
    setUserid(useridFromInput);

    const usersResponse = await fetch("https://jsonplaceholder.typicode.com/users");
    if(usersResponse.ok){
      const users = await usersResponse.json();
      console.log("users", users);
      const usr = users.find((userItem: any) => {
        return userItem && userItem.id === useridFromInput;
      });

      console.log("usr", usr);
      dispatch({
        type: USER_TYPE,
        payload: {
          id: usr.id,
          username: usr.username,
          email: usr.email,
          city: usr.address.city
        }
      });
    }
  }

  return (
    <div className="App">
      <label>User id</label>
      <input value={userId} onChange={onChangeUserId}/>
      <UserDisplay />
    </div>
  );
}

export default App;
