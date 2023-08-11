import React, { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button } from '@mui/material';

const ModalAddInvite = ({ open, handleClose, addGuest }) => {
    const [nombre, setNombre] = useState('');
    const [instagramId, setInstagramId] = useState('');

    const handleAdd = () => {
        const nuevoGuest = {
            nombre,
            instagramId,
        };
        addGuest(nuevoGuest);
        handleClose();
    };

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Agregar profesional</DialogTitle>
            <DialogContent>
                <TextField
                    label="Nombre"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    fullWidth
                    margin="normal"
                    variant="outlined"
                />
                <TextField
                    label="ID de Instagram"
                    value={instagramId}
                    onChange={(e) => setInstagramId(e.target.value)}
                    fullWidth
                    margin="normal"
                    variant="outlined"
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="error">Cancelar</Button>
                <Button onClick={handleAdd} color="primary">Agregar</Button>
            </DialogActions>
        </Dialog>
    );
};

export default ModalAddInvite;
