import React from "react";
import ReactDOM from "react-dom";
import { MessageList, Layout, ChatList, Header } from "./components";

// import { a, b, c } from './components';
// import App from './App'; 

import "./global.css";

const App = () => { 
  return (
    <>
    {/* summ = { a } + {b} + {c} */}
    <Layout 
      messages={<MessageList />} 
      chats={ <ChatList /> } 
      header={<Header />}
      />
    </>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
