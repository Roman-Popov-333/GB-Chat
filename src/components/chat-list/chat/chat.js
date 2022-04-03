import { ListItem, ListItemButton, ListItemText } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import { makeStyles } from "@mui/styles";
import st from "./chat.module.css"

const useStyles = makeStyles(() => {
    return {
        item: { // пример переопределения встроенного стиля у библиотеки
            "&.Mui-selected": {
                backgroundColor: "#2b5278",
            },
            "&.Mui-selected:hover": {
                backgroundColor: "#2b5278",
            },
        }
    }
})


export function Chat({ title, selected,handleListItemClick}) { // список чатов, выбраный чат передаем сверху
    const styles = useStyles(); 
    return <ListItemButton 
    onClick={handleListItemClick} // на клик вешаем выполнение функции
    className={styles.item} 
    selected={selected}>
            <ListItem>
                <AccountCircle fontSize="large" className={st.icon} />
            </ListItem>
            <ListItemText primary={title} className={st.text}/>
        </ListItemButton>;
}