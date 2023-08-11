import { Card, CardContent, TextField } from "@mui/material"

const CardWorkshopDetails = ({ setInstructor, setObservacion, instructor, observacion, mode }) => {

    const handleChangeObservacion = (event) => {
        setObservacion(event.target.value);
    };

    const handleChangeInstructor = (event) => {
        setInstructor(event.target.value);
    };

    return (
        <Card sx={{ mt: 1, width: '100%' }} >
            <CardContent sx={{ display: 'flex', flexDirection: 'column', alignContent: 'space-between', justifyContent: 'space-around', height: '100%' }}>
                <TextField
                    fullWidth
                    name={'Intructor'}
                    label={'Intructor'}
                    value={instructor}
                    disabled={mode == 'finish' ? true : false}
                    onChange={handleChangeInstructor}
                    variant="outlined" // Cambiamos el estilo para que parezca un Textarea
                />
                <TextField
                    fullWidth
                    multiline
                    rows={4} // Establecemos el número de líneas que queremos mostrar
                    name={'observacion'}
                    label={'Observación'}
                    disabled={mode == 'finish' ? true : false}
                    value={observacion}
                    onChange={handleChangeObservacion}
                    variant="outlined" // Cambiamos el estilo para que parezca un Textarea
                />
            </CardContent>
        </Card>
    )
}


export default CardWorkshopDetails