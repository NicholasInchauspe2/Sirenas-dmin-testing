import { Avatar, Card, CardContent, Divider, IconButton, List, ListItem, ListItemAvatar, ListItemIcon, ListItemText, Typography } from "@mui/material"
import Search from "../../common/Search/Search"
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Fragment, useContext, useEffect, useState } from "react";
import { CartContext } from "../../store/context/CartContext";
import { useParams } from "react-router-dom";

const CardWorkshopUsers = () => {
    const [users, setUsers] = useState([1])
    const { APIURL } = useContext(CartContext)
    const {workshopId} = useParams()

    useEffect(() => {
        const getUsers = async () => {
            try {
                const URL = `${APIURL}/api/workshops/users/${workshopId}`
                const PARAMS = {}
                const response = await fetch(URL, PARAMS)

                if (response.ok) {
                    const data = await response.json()
                    setUsers(data)
                } else {
                    console.error('error')
                }
            } catch (error) {
                console.error(error)
            }
        }
        getUsers()
    }, [])

    return (
        <Card sx={{ width: '100%' }}>
            <CardContent>
                <Typography>Lista de Sirenas</Typography>
                <Divider />
                <Search />

                <List
                    sx={{
                        width: '100%',
                        bgcolor: 'background.paper',
                        height: 350,
                        overflow: 'auto',
                        boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.1)', // Agregar efecto de sombra
                        mt: 2
                    }}
                >
                    {users.map((user, index) => (
                        <Fragment key={index}>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar src='https://material-kit-react.devias.io/assets/avatars/avatar-fran-perez.png' />
                                </ListItemAvatar>
                                <ListItemText primary={'Jeremias Oyhamburo'} secondary={'@Instagram'} />
                                <ListItemText primary={'24 años'} />
                                <ListItemText primary={'Argentina'} />
                                <IconButton color="info" aria-label="add an alarm" >
                                    <VisibilityIcon />
                                </IconButton>
                            </ListItem>
                            <Divider component="li" />
                        </Fragment>
                    ))}


                </List>
            </CardContent>
        </Card>
    )
}

export default CardWorkshopUsers