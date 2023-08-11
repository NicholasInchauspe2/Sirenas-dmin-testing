import { Card, CardContent, Divider, IconButton, Typography } from "@mui/material";
import Search from "../../common/Search/Search";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Fragment, useContext, useEffect, useState } from "react";
import { CartContext } from "../../store/context/CartContext";
import { useNavigate, useParams } from "react-router-dom";
import VisibilityIcon from '@mui/icons-material/Visibility';

const formatDate = (date) => {
    const formattedDate = new Date(date);
    const options = { day: '2-digit', month: '2-digit', year: 'numeric' };

    return formattedDate.toLocaleDateString('es-AR', options);
};

const CardWorkshopUser = () => {
    const [workshops, setWorkshops] = useState([]);
    const [filterWorkshops, setFilterWorkshops] = useState([]);
    const { APIURL } = useContext(CartContext);
    const [searchText, setSearchText] = useState('');
    const navigate = useNavigate();

    const { userId } = useParams();

    useEffect(() => {
        const getWorkshops = async () => {
            const URL = APIURL + '/api/talleres';
            const PARAMS = {};
            const response = await fetch(URL, PARAMS);

            if (response.ok) {
                const data = await response.json();
                setWorkshops(data);
            } else {
                console.error('error');
            }
        };
        getWorkshops();
    }, []);

    useEffect(() => {
        const filteredWorkshops = workshops.filter(workshop =>
            workshop.name.toLowerCase().includes(searchText.toLowerCase())
        );
        setFilterWorkshops(filteredWorkshops);
    }, [workshops, searchText]);



    const goToWorkshop = (idWorkshop) => {
        const rute = '/talleres/' + idWorkshop
        if (idWorkshop)
            navigate(rute);
    }


    return (
        <Card>
            <CardContent>
                <Typography variant="h5" >
                    Talleres
                </Typography>
                <Divider />
                <Search searchText={searchText} setSearchText={setSearchText} />
                <List
                    sx={{
                        width: '100%',
                        maxWidth: 360,
                        bgcolor: 'background.paper',
                        height: 350,
                        overflow: 'auto',
                        boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.1)', // Agregar efecto de sombra
                        mt: 2
                    }}
                >
                    {filterWorkshops.map((workshop, index) => (
                        <Fragment key={index}>
                            <ListItem>
                                <ListItemText primary={workshop.name} secondary={formatDate(workshop.fechaInicio)} />
                                <IconButton color="info" aria-label="add an alarm" onClick={()=>goToWorkshop(workshop.id)}>
                                    <VisibilityIcon />
                                </IconButton>
                            </ListItem>
                            <Divider component="li" />
                        </Fragment>
                    ))}
                </List>
            </CardContent>
        </Card>
    );
};

export default CardWorkshopUser;
