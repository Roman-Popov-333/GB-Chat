import React, { useState, useEffect, useRef } from "react";
import { Input, InputAdornment } from "@mui/material";
import { Send } from "@mui/icons-material";
import { Message } from "./message"
import { useStyles } from "./use-styles"

// memo = это функция которая оптимизирует реакт компонент
// import PropTypes from "prop-types"; // эта библиотека позволяет типизировать пропсы компонета ,позволяет избежать ошибок ,когда много програмистов работают над проектом


/*const current = { 2 нелегальный способ мутирования
  id: 0
}*/

//export function MessageList(){ 
  export const MessageList = () => { //Проверка memo


    const ref = useRef(); // Reference (ссылка) - это специальный объект с мутируемым свойсвом current, также ref дает доступ к dom дереву элемента
//Важно = это свойство которое позволяет "легально" мутировать объект в реакте
// ref.current.id = ref.current.id + 1 // 1 легальный способ мутирования
// current.id = ref.current.id +1 // 2 нелегеальный способ мутирования

    const [value, setValue] = useState(""); //  данные, фанкция даннух = переданый string(пустая строка) 
    const [messages, setMessages ] = useState([
    
      // { // проверка сортировки 
      //   author: "Bot", 
      //   message: "message 333", 
      //   date: 3, 
      // },
    // { // проверка сортировки  
    //   author: "User", 
    //   message: "message 22", 
    //   date: 2,
    // },
    {
      author: "Bot", 
      message: "message 1", 
      date: 'data', //new Date().toLocaleDateString(), // date: 1
    },
]);

    const styles = useStyles() // вызывая хук можем получить снаружи стили

    useEffect(() => {
      console.log("ref", ref) // поскольку ref мы добавили в тег div, то в консоли ref объект имеет свойство current: div
    },[])

    //console.log("ref", ref) // если его использовать вне компонента он будет undefind

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


  // const sort1 = () => { // удалить функцию позже позже 
  //   setMessages(
  //     [...messages].sort((a,b)=>{ // делаем копию массива и применяем ф. sort(). Сорт мутирует массив, поэтому сперва делается копия, и уже копия сортируется
  //     return a.message.length - b.message.length; // длинна массива сообщения 
  //     })
  //   ); 
  // }; 
  // const sort2 = () => { // удалить функцию позже позже 
  //   setMessages(
  //     [...messages].sort((a,b)=>{ // делаем копию массива и применяем ф. sort(). Сорт мутирует массив, поэтому сперва делается копия, и уже копия сортируется
  //     return b.message.length - a.message.length; // длинна массива сообщения 
  //     })
  //   ); 
  // }; 
  
  return (
    <> 
    <div ref={ref}>
      {/* В реакте нет querySelectora поэтому если нужен доступ к Dom элементу нужно использовать ref
      
      <button onClick={sort1}>sort1</button>
      <button onClick={sort2}>sort2</button> */}
        {messages.map((message, index) => (
          <Message message ={message} key={index} />  
          // key={message.date} , если убрать этот ключ из компонента Message, при запуске рендер отработал, и при сортировке он также отрабатывает( т.к нет ключа , реакту не на что смотреть, следовательно компонент обновляется). С ключем рендер делает отрисовку 3 элементов, при сортировке обновления не происходит// При значении index   ключа снова получаем отработку рендера происходит из-за того, что индекс сообщения меняется (message 1 key =2 (3ий в списке) => message 1 key = 0)
          // Если ключ остается неизменным, реакт не делает повторный апдейт элемента
          ))} 
    </div>
    {/* <div className={styles."..." }>  создается файл "index.module.css" со стилем "..." и подключается import styles from "./index.module.css"; */}
    {/*   в компонент передаем наше сообщение, для сообщения передаем уникальный ключ. ВАЖНО: Если список сортируется лучше в ключ присваивать уникальный элемент массива, в данном случае дата */}
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

/*MessageList.propTypes = { //Ошибка: Failed prop type: The prop `test1` is marked as required in `MessageList`, but its value is `undefined`.
  test1: PropTypes.string.isRequired, // тестируем пропсы на строку
  test2: PropTypes.bool.isRequired, // булевое значение
  test3: PropTypes.shape({   // 3 метод (.object) потому что не факт,что объект будет выбран правильный
    id: PropTypes.number.isRequired, 
  }).isRequired,
};*/