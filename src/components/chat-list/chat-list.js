import { useState } from "react";
import { List } from "@mui/material";
import { Chat } from "./chat"; 

export function ChatList() {
    const [chats] = useState(["room1", "room2", "room3"]);
    const [ selectedIndex, setSelectedIndex ] = useState(0); // выбираем  чат по индексу, по дефолту "room1"
    
    return (
    <List component="nav">
        {chats.map((chat, index) => ( // берем индекс из массива
            <Chat
            key ={ index } // key props должен быть уникальным, если список статический (остающийся неизменным) использовать index можно. Дополнительно: ключи нужны, чтобы реакт не создавал элементы, которые уже есть и если ключ остался неизменным, реакт оставит компонент неизменным. Если у вас компонент не изменился, пропс не изменился, но изменился ключ-реакт удаляет компонент и создаст его снова
            title={chat} 
            selected={selectedIndex === index} 
            handleListItemClick={()=>setSelectedIndex(index)}/> // если индексы похожи, то показываем true, handleListItemClick = это функция куда коллбэком передаем index
        ))}
    </List>
    );
}