import { useState } from "react";
import { List } from "@mui/material";
import { Chat } from "./chat"; 

export function ChatList() {
    const [chats] = useState(["room1", "room2", "room3"]);
    const [ selectedIndex, setSelectedIndex ] = useState(0) // выбираем  чат по индексу, по дефолту "room1"
    return <List component="nav">
        {chats.map(( chat, index ) => ( // берем индекс из массива
            <Chat title={chat} selected={selectedIndex === index} handleListItemClick={()=>setSelectedIndex(index)}/> // если индексы похожи, то показываем true, handleListItemClick = это функция куда коллбэком передаем index
        ))}
    </List>;
}