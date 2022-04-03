import { makeStyles } from "@mui/styles";

// JSS способ написания стилей в данной библиотеке
export const useStyles = makeStyles(() => {  // хук используемый в @mui/styles
    return  {
        input: {  
            color: "#9a9fa1",
            padding: "9px",
            fontSize: "15px",
        },
        icon: {
            color: "#2b5278",
            cursor: "pointer",
        }
    }
});


