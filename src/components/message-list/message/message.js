import React, { memo } from "react";
import cls from "classnames";
// библиотека имен стилей, можно ее именовать подругому например  "cls"
import styles from "./message.module.css"

//export function Message({ message }){ // сообщение передаем пропсами  // проверка memo
    export const Message = memo(({ message }) => {
    //message.author === "User" ? "style1" : "style 2";
    console.log("render");
    return (
        <div className={cls(styles.message, {
            [styles.currentMessage]:message.author === "User"   // Если выполнено условие, то такой стиль навешается на элемент
        })}>
          <h3>{message.author}</h3>
          <p>{message.message}</p>
          <p>{message.date}</p>
        </div>
    );
})