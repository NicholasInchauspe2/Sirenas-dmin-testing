import { Avatar, Box, Button, Card, CardContent, Divider, IconButton, List, ListItem, ListItemAvatar, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { Fragment, useContext, useEffect, useState } from "react";
import { CartContext } from "../../store/context/CartContext";
import { useParams } from "react-router-dom";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ModalAddInvite from "../ModalAddInvite/ModalAddInvite";
import Search from "../../common/Search/Search";
import DeleteIcon from '@mui/icons-material/Delete';

const CardWorkshopInvite = ({ width, guests, setGuests }) => {
    const [open, setOpen] = useState(false);
    const { APIURL } = useContext(CartContext);
    const { workshopId } = useParams();

    useEffect(() => {
        const getGuests = async () => {
            try {
                const URL = `${APIURL}/api/workshops/users/${workshopId}`;
                const PARAMS = {};
                const response = await fetch(URL, PARAMS);

                if (response.ok) {
                    const data = await response.json();
                    setGuests(data);
                } else {
                    console.error('error');
                }
            } catch (error) {
                console.error(error);
            }
        };
        getGuests();
    }, []);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const addGuest = (newGuest) => {
        const updatedGuests = [...guests, newGuest];
        setGuests(updatedGuests);
    };

    const deleteInvite = (index) => {
        let newGuest = guests.filter((guest, i) => i !== index)
        setGuests(newGuest)
    }


    return (
        <>
            <ModalAddInvite open={open} handleClose={handleClose} addGuest={addGuest} />
            <Card sx={{ width: width }}>
                <CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }} >
                        <Typography variant="h6" sx={{ mr: 4 }} >Lista de Profesional</Typography>
                        <IconButton aria-label="Agregar" onClick={handleClickOpen}>
                            <AddCircleIcon color="primary" />
                        </IconButton>
                    </Box>
                    <Divider sx={{ mb: 1 }} />
                    <Search />

                    <List
                        sx={{
                            width: '100%',
                            bgcolor: 'background.paper',
                            maxHeight: 350,
                            minHeight: 100,
                            overflow: 'auto',
                            boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.1)',
                            mt: 2
                        }}
                    >
                        {guests.map((guest, index) => (
                            <Fragment key={index}>
                                <Fragment key={index}>
                                    <ListItem >
                                        <ListItemAvatar>
                                            <Avatar src='https://material-kit-react.devias.io/assets/avatars/avatar-fran-perez.png' />
                                        </ListItemAvatar>
                                        <ListItemText primary={guest.nombre} secondary={'@' + guest.instagramId} />
                                        <IconButton color="error" aria-label="delete" onClick={() => deleteInvite(index)} >
                                            <DeleteIcon />
                                        </IconButton>
                                    </ListItem>
                                    <Divider component="li" />
                                </Fragment>
                            </Fragment>
                        ))}
                    </List>
                </CardContent>
            </Card>
        </>
    );
};

export default CardWorkshopInvite;
