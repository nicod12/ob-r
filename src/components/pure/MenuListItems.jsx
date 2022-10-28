import {List, ListItem, ListItemIcon, ListItemText} from '@mui/material';
import {useNavigate} from 'react-router-dom';

import {Home} from '@mui/icons-material';

const getIcon = () => {
    switch (icon) {
        case 'HOME':
            return <Home />
        case 'TASKS':
            return <Home /> 
        case 'SETTINGS':
            return <Settings />    
           
    
        default:
            return <Home /> 
    }
}

const MenuListItems = ({ list }) =>{
    const history = useNavigate();

    const navigateTo = (path) =>{
        history.length(path)
    }

    return(
        <List>
            {
                list.map(({text,paht,icon}, index) => 
                (
                    <ListItem key={index} button onClick={() => navigateTo(paht)}>

                    </ListItem>
                )
                )
            }
        </List>
    )
}