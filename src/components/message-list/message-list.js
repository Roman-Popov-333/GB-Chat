import React, { useState, useEffect } from "react";
import { Input, InputAdornment } from "@mui/material";
import { Send } from "@mui/icons-material";
import { Message } from "./message"
import { useStyles } from "./use-styles"


export function MessageList(){
    const [value, setValue] = useState(""); //  данные, фанкция даннух = переданый string(пустая строка) 
    const [messages, setMessages ] = useState([
    {
      author: "Bot", 
      message: "First message", 
      date: new Date().toLocaleDateString(),
    },
]);

    const styles = useStyles() // вызывая хук можем получить снаружи стили

    const sendMessage = () => {
    if(value) { // если в сообщение есть любой символ, то сообщение отправляется
    setMessages([
        ...messages, 
        {
          author: "User", 
          message: value,
          date: new Date().toLocaleDateString()
        }]) // value - локальное состояние сообщения
        setValue(""); // очищаем сообщение
    }

  }

  const handlePressInput = ({code}) => { // у события эвент есть свойствое "code"? которое мы можем напрямую получить
      if(code ==="Enter") {
        sendMessage();  // при нажатии кнопки энтер вызываем отправку сообщения
      }
  }

  useEffect(()=> { 
    const lastMessages = messages[messages.length -1];
    let timerId = null; 

    if (messages.length && lastMessages.author === "User" ) { 
      timerId = setTimeout(() => {  
        setMessages([
          ...messages, 
          {
            author: "Bot", 
            message: "hello from bot", 
            date: new Date().toLocaleDateString(),
          }
        ]);
      }, 1500) 
      
      return () => { 
        clearInterval(timerId);
      }
    }
  }, [messages]);

  return (
    <> 
    <div>
        {messages.map((message) => (
          <Message message ={message}/> //  в компонент передаем наше сообщение 
          ))} 
    </div>
    {/* <div className={styles."..." }>  создается файл "index.module.css" со стилем "..." и подключается import styles from "./index.module.css"; */}

      <Input placeholder="Введите сообщение..." 
      value={value} 
      onChange={((e) => setValue(e.target.value))} // данные, инпут принимает ф. onChange (callback (эвент => функция данных(евент таргет данных)))
      onKeyPress = {handlePressInput} // в событие "нажатия ключа" добавляем функцию нажатия кнопки
      className= { styles.input } // пробрасываем стили в элемент через хуки
      fullWidth // пропс на всю ширину строки
      endAdornment={
        <InputAdornment position="end">
          {value && <Send className={styles.icon} onClick={sendMessage} />}  {/*  при любом значении в строке появиться кнопка отправить */}
        </InputAdornment>
      }
        />
    </>
  );
};
