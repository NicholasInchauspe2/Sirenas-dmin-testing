import React from 'react'
import { useState } from "react";
import { TextField, Button, Card, CardContent, Grid, CardActions } from "@mui/material";
import CancelIcon from '@mui/icons-material/Cancel';
import CheckIcon from '@mui/icons-material/Check';
import EditIcon from '@mui/icons-material/Edit';

const TallerCard = () => {
  const [editing, setEditing] = useState(false);
  //nombre, fecha de inicio, descripción, instructor, invitados, duración, etc.

  return (
    <Card component="form" >
      <CardContent  >
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 3, md: 5 }}>
          <Grid item xs={6} sx={{ mt: 1 }}   >
            <TextField
              fullWidth
              name="Taller"
              label="Numero de Taller"
              defaultValue='Taller'
              //value={formData.name ? formData.name : user.name}
              //onChange={handleChange}
              disabled={!editing}
            />
          </Grid>
          <Grid item xs={6} sx={{ mt: 1 }}  >
            <TextField
              fullWidth
              name="inicio"
              label="Fecha de Inicio"
              defaultValue="Fecha de Inicio"
              //value={formData.lastname ? formData.lastname : user.lastname}
              //onChange={handleChange}
              disabled={!editing}
            />
          </Grid>
          <Grid item xs={6} sx={{ mt: 1 }}  >
            <TextField
              fullWidth
              name="culminacion"
              label="Fecha de Culminacion"
              defaultValue="Fecha de Culminacion"
              //value={formData.email ? formData.email : user.email}
              //onChange={handleChange}
              disabled={!editing}
            />
          </Grid>
          <Grid item xs={6} sx={{ mt: 1 }}  >
            <TextField
              fullWidth
              name="descripción"
              label="Descripción"
              defaultValue="Descripcion"
              //value={formData.phone ? formData.phone : user.phone}
              //onChange={handleChange}
              disabled={!editing}
            />
          </Grid>
          <Grid item xs={6} sx={{ mt: 1 }}  >
            <TextField
              fullWidth
              name="instructor"
              label="Instructor"
              defaultValue="Instructor"
              //value={formData.emailVerify ? formData.emailVerify : user.emailVerify}
              //onChange={handleChange}
              disabled={!editing}
            />
          </Grid>
          <Grid item xs={6} sx={{ mt: 1 }}  >
            <TextField
              fullWidth
              name="invitados"
              label="Invitados"
              defaultValue="Invitados"
              //value={formData.adress ? formData.adress : user.adress}
              //onChange={handleChange}
              disabled={!editing}
            />
          </Grid>
          <Grid item xs={6} sx={{ mt: 1 }}  >
            <TextField
              fullWidth
              name="duración"
              label="Duración"
              defaultValue="Duración"
              //value={formData.age ? formData.age : user.age}
              //onChange={handleChange}
              disabled={!editing}
            />
          </Grid>
          <Grid item xs={6} sx={{ mt: 1 }}  >
            <TextField
              fullWidth
              name="usuarios"
              label="Cantidad de Usuarios"
              defaultValue="Cantidad de Usuarios"
              //value={formData.height ? formData.height : user.height}
              //onChange={handleChange}
              disabled={!editing}
            />
          </Grid>
          {/* <Grid item xs={6} sx={{ mt: 1 }}  >
          <TextField
            fullWidth
            name="instagram"
            label="Instagram"
            //value={formData.instagram ? formData.instagram : user.instagram}
            //onChange={handleChange}
            disabled={!editing}
          />
        </Grid> */}
          {/* <Grid item xs={6} sx={{ mt: 1 }}  >
          <TextField
            fullWidth
            name="username"
            label="Usuario"
            //value={formData.username ? formData.username : user.username}
            //onChange={handleChange}
            disabled={!editing}
          />
        </Grid> */}

        </Grid>
        <CardActions sx={{ display: 'flex', justifyContent: 'end' }}>
          {!editing && (
            <Button
              //onClick={handleEdit}
              variant="contained"
              startIcon={
                <EditIcon />
              }>
              Editar
            </Button>
          )}
          {editing && (
            <>
              <Button
                //onClick={handleCancel}
                variant="contained"
                startIcon={
                  <CancelIcon />
                }>
                Cancelar
              </Button>
              <Button
                //onClick={handleConfirm}
                variant="contained"
                startIcon={
                  <CheckIcon />
                }>
                Confirmar
              </Button>
            </>
          )}
        </CardActions>
      </CardContent >
    </Card >
  );

}

export default TallerCard