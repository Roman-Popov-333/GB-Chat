import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider, createTheme } from "@mui/material";
import { MessageList, Layout, ChatList, Header } from "./components";

//import { ThemeProvider, createTheme, Button  } from "@mui/material"; // можно добавить кнопку
// import { a, b, c } from './components';
// import App from './App'; 
// ThemeProvider это  настроеная тема материала, и эта тема доступна в любом компоненте, который находится внутри провайдера,  доп функция createTheme
// import ReactDOM from "react-dom"; 
import "./global.css";

const App = () => { 
  return (
    <>
    {/* summ = { a } + {b} + {c} */}
    <Layout 
      messages={<MessageList />}  //   messages={<MessageList test1 ="string" test2={ false } test3={{ id:12 }} />} // Ошибка : Failed prop type(ошибочнй тип пропса, должен был быть стринг): The prop `test1` is marked as required in `MessageList`, but its value is `undefined`
      chats={ <ChatList /> } 
      header={<Header />}
      />
    </>
  )
}

const theme = createTheme({ // переопределние цвета у кнопки ,  {/* <Button color="primary">Button</Button> */}
  palette: {
    primary: {
      main: "#ff0000",
    }
  },
  breakpoints: {  // используем только нужные ключи, с переопределенными значениями
    keys: ["lg", "sm"],
    values: {
      lg: 1200, 
      sm: 320,
    }
  }
});

/* Реальный DOM (способ представления документа с помощью объектов), в js грузится долго, обновляется полностью, поэтому есть 2 варианта работы: 
1) спецификация shadow dom 
2) виртуальный дом  (Vdom используется чаще всего -концепция программирования, когда подгрузка элемента привязывается к определеннному блоку верстки,когда пользовательский интерфейс храниться в памяти и синхронизируется с настоящим DOM с помощью библиотек) 
3) компиляция (редко используется)*/

ReactDOM.render( 
  <React.StrictMode>
    <ThemeProvider theme ={ theme }> 
    <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
