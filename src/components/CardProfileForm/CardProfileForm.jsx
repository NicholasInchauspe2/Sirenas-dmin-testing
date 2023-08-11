import { TextField, Button, Card, CardContent, Grid, CardActions } from "@mui/material";
import CancelIcon from '@mui/icons-material/Cancel';
import CheckIcon from '@mui/icons-material/Check';
import EditIcon from '@mui/icons-material/Edit';
import { useContext, useState } from "react";
import { CartContext } from "../../store/context/CartContext";
import LoadingButton from '@mui/lab/LoadingButton';

const UserForm = ({ user }) => {
  const [formData, setFormData] = useState(user);
  const [editing, setEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showBtn, setShowBtn] = useState(false);
  const { APIURL } = useContext(CartContext);

  const fieldConfig = [
    { name: "name", label: "Nombre" },
    { name: "lastname", label: "Apellido" },
    { name: "email", label: "Email" },
    { name: "phone", label: "Teléfono" },
    { name: "emailVerify", label: "Email Secundario" },
    { name: "adress", label: "Dirección" },
    { name: "age", label: "Edad" },
    { name: "height", label: "Altura" },
    { name: "instagram", label: "Instagram" },
    { name: "username", label: "Usuario" },
  ];

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleEdit = () => {
    setEditing(true);
    setShowBtn(true);
  };

  const handleCancel = () => {
    setEditing(false);
    setShowBtn(false);
    setFormData(user);
  };

  const handleConfirm = () => {
    setLoading(true);
    setEditing(false);
    updateUser();
  };

  const updateUser = async () => {
    // Implementa la lógica para actualizar el usuario
        // const URL = APIURL + 'ruta'
    // // body: formData
    // const PARAMS = {}
    // const response = await fetch(URL, PARAMS)

    // if (true) {
    // setLoading(false)
    // setShowBtn(false)
    // } else {

    // }
  };

  return (
    <Card component="form">
      <CardContent>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 3, md: 5 }}>
          {fieldConfig.map((field) => (
            <Grid item xs={6} sx={{ mt: 1 }} key={field.name}>
              <TextField
                fullWidth
                name={field.name}
                label={field.label}
                value={formData[field.name] || user[field.name] || ""}
                onChange={handleChange}
                disabled={!editing}
              />
            </Grid>
          ))}
        </Grid>
        <CardActions sx={{ display: 'flex', justifyContent: 'end' }}>
          {!showBtn && (
            <Button
              onClick={handleEdit}
              variant="contained"
              startIcon={<EditIcon />}
            >
              Editar
            </Button>
          )}
          {showBtn && (
            <>
              <Button
                onClick={handleCancel}
                variant="contained"
                disabled={loading}
                startIcon={<CancelIcon />}
              >
                Cancelar
              </Button>
              <LoadingButton
                onClick={handleConfirm}
                startIcon={<CheckIcon />}
                loading={loading}
                loadingPosition="start"
                variant="contained"
              >
                Confirmar
              </LoadingButton>
            </>
          )}
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default UserForm;
