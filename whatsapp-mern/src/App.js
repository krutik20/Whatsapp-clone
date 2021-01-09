import React, { useEffect, useState } from 'react';
import './App.css';
import Chat from './Chat';
import  {Sidebar}  from './Sidebar';
import Pusher from 'pusher-js';
import axios from './axios';

function App() {

  const [messages,setMessages]=useState([]);

  useEffect(()=>{
    axios.get('/messages/sync')
    .then(response=>{
        setMessages(response.data);
    });
  },[]);

  useEffect(()=>{
    const pusher = new Pusher('225bd68848d1ab458f51', {
      cluster: 'eu'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (newMessage)=> {
      // alert(JSON.stringify(newMessage));
      setMessages([...messages,newMessage])
    });
    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  },[messages]);

   console.log(messages);
  return (
    <div className="app">

      <div className="app__body">
       <Sidebar />

       <Chat messages={messages}/>

      </div>
      {/* <h1>Lets build a MERN Whatsapp clone</h1> */}

    </div>
  );
}

export default App;
