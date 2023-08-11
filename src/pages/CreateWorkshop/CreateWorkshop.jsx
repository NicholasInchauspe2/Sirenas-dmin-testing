import { Backdrop, Box, Button, Card, CircularProgress, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, TextField, Tooltip, Typography } from "@mui/material";
import CardWorkshopDate from "../../components/CardWorkshopDate/CardWorkshopDate";
import CardWorkshopDetails from "../../components/CardWorkshopDetails/CardWorkshopDetails";
import CardWorkshopInvite from "../../components/CardWorkshopInvite/CardWorkshopInvite";
import { useContext, useState } from "react";
import EditIcon from '@mui/icons-material/Edit';
import { CartContext } from "../../store/context/CartContext";
import { useNavigate } from "react-router-dom";
import SnackBar from "../../common/SnackBar/SnackBar";
import { SnackbarProvider, useSnackbar } from 'notistack';

const CreateWorkshop = () => {
    const { enqueueSnackbar } = useSnackbar();

    const handleClickTwo = () => {
        enqueueSnackbar('I love snacks.');
    };

    const handleClickVariant = (variant) => () => {
        enqueueSnackbar('This is a success message!', { variant });
    };
    const [workshopNum, setWorkshopNum] = useState('');
    const [startDate, setStartDate] = useState(new Date().toISOString().split('T')[0]);
    const [endDate, setEndDate] = useState(new Date().toISOString().split('T')[0]);
    const [loader, setLoader] = useState(false);
    const [observacion, setObservacion] = useState('');
    const [instructor, setInstructor] = useState('Agostina');
    const [guests, setGuests] = useState([]);

    const { APIURL } = useContext(CartContext);
    const [open, setOpen] = useState(false);

    const [openModal, setOpenModal] = useState(false);
    const [messageModal, setMessageModal] = useState("no message");
    const [severity, setSeverity] = useState("info");

    const navigate = useNavigate();

    const handleClose = () => {
        setOpen(false);
    };

    const handleClick = () => {
        setOpen(true);
    };

    const addWorkshop = async () => {
        setLoader(true);
        const body = {
            workshopNumber: parseInt(workshopNum),
            dateStart: startDate,
            dateEnd: endDate,
            observation: observacion,
            inviteId: 1,
            dayOne: 1,
            dayTwo: 2,
            dayThree: 3,
            dayFour: 4,
            dayFive: 5,
            daySix: 6,
            daySeven: 7,
            dayEight: 8,
            dayNine: 9,
            dayTen: 10,
            dayEleven: 11,
            dayTwelve: 12
        };

        const URL = APIURL + '/api/workshops';
        const response = await fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        });

        if (response.ok) {
            navigate('/talleres');
        } else {
            handleClickTwo();
            handleClickVariant('success');
        }
        setLoader(false);
    };

    return (
        <SnackbarProvider maxSnack={3}>
            <SnackBar message={messageModal} setOpen={setOpenModal} open={openModal} severity={severity} />
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={loader}
            >
                <CircularProgress color="inherit" />
            </Backdrop >
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Agregar Guest</DialogTitle>
                <DialogContent>
                    <TextField
                        label="Número de taller"
                        value={workshopNum}
                        onChange={(e) => setWorkshopNum(e.target.value)}
                        fullWidth
                        margin="normal"
                        variant="outlined"
                        type="number"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="error">Cancelar</Button>
                    <Button onClick={handleClose} color="primary">Agregar</Button>
                </DialogActions>
            </Dialog>
            <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
                <Box sx={{ maxWidth: "65vw", width: "100%" }}>
                    <Card sx={{ p: '1rem 2rem 1rem 2rem', display: 'flex', justifyContent: 'space-between', backgroundColor: '#673ab7' }}>
                        <Typography variant="h4" color='white' >Crea un nuevo taller </Typography>
                        {workshopNum === '' ? (
                            <Button variant="contained" color="info" onClick={handleClick}>
                                <Typography variant="body1" color='white' >
                                    Agregar número del Taller
                                </Typography>
                            </Button>
                        ) : (
                            <Box sx={{ display: 'flex' }}>
                                <Typography variant="h4" color='white' >Nº {workshopNum} </Typography>
                                <Tooltip title="Editar">
                                    <IconButton sx={{ color: "white" }} onClick={handleClick} >
                                        <EditIcon />
                                    </IconButton>
                                </Tooltip>
                            </Box>
                        )}
                    </Card>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 3 }}>
                        <CardWorkshopDate
                            dateStart={startDate}
                            dateEnd={endDate}
                            mode={'new'}
                            setStartDate={setStartDate}
                            setEndDate={setEndDate}
                        />
                        <CardWorkshopDetails
                            observacion={observacion}
                            instructor={instructor}
                            setObservacion={setObservacion}
                            setInstructor={setInstructor}
                        />
                    </Box>
                    <Box sx={{ mt: 1, display: "flex", gap: 2 }} >
                        <CardWorkshopInvite width={'100%'} guests={guests} setGuests={setGuests} />
                    </Box>
                    <Box sx={{ mt: 1, display: "flex", justifyContent: 'center', mt: 3 }} >
                        <Button variant="contained" onClick={addWorkshop}>Crear Taller</Button>
                    </Box>
                </Box>
            </Box>
        </SnackbarProvider>
    );
};

export default CreateWorkshop;
