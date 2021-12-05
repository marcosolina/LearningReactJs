import React, { useState } from 'react';
import logo from './logo.svg';
import { useDispatch } from 'react-redux';
import './App.css';
import { USER_TYPE } from './store/UserReducer';
import { POST_TYPE } from './store/PostReducer';
import UserDisplay from './UserDisplay';
import PostDisplay from './PostDisplat';

function App() {

  const [userId, setUserid] = useState(0);
  const dispatch = useDispatch(); // Redux hook
  const [postId, setPostId] = useState(0);

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

  const onChangePostId = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const postIdFromInput = e.target.value ? Number(e.target.value) : 0;
    setPostId(postIdFromInput);
    const postResponse = await fetch("https://jsonplaceholder.typicode.com/posts/" + postIdFromInput);
    if(postResponse.ok){
      const post = await postResponse.json();
      console.log("post", post);
      dispatch({
        type: POST_TYPE,
        payload: {
          id: post.id,
          title: post.title,
          body: post.body
        }
      });
    }
  }

  return (
    <React.Fragment>
      <div style={{width: "300px"}}>
        <div className="App">
          <label>User id</label>
          <input value={userId} onChange={onChangeUserId}/>
          <UserDisplay />
        </div>
      </div>
      <div style={{width: "300px"}}>
        <div className="App">
          <label>Post id</label>
          <input value={postId} onChange={onChangePostId}/>
          <PostDisplay />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
