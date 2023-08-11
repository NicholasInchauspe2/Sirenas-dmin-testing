import { useContext, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Search from '../../common/Search/Search';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, IconButton, Tooltip } from '@mui/material';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { useNavigate } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import { CartContext } from '../../store/context/CartContext';
import DialogTitle from '@mui/material/DialogTitle';

const EnhancedTableToolbarWorkshops = ({ searchText, setSearchText, selected, updateWorkshopsAfterDelete }) => {
  const { APIURL } = useContext(CartContext);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [textModal, setTextModal] = useState('');
  const [textTitleModal, setTextTitleModal] = useState('');
  const [selectedAction, setSelectedAction] = useState(null);
  const handleClose = () => {
    setOpen(false);
  };

  const goToProfile = () => {
    let idWorkshop = selected[0];
    const rute = `/talleres/${idWorkshop}`
    navigate(rute);
  };

  const deleteWorkshop = async () => {
    const URL = APIURL + '/api/workshops'
    const PARAMS = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(selected),
    }

    const response = await fetch(URL, PARAMS)

    if (response.ok) {
      console.log('eliminado');
      updateWorkshopsAfterDelete(); // Llama a la función para actualizar la tabla
    } else {
      console.error('error')
    }

  }

  const handleClickDelete = () => {
    setOpen(true);
    setTextModal(`Esta seguro que desea eliminar ${selected.length} talleres?`);
    setTextTitleModal('Eliminar Usuarios');
    setSelectedAction('delete');
  };

  const handleAcceptClick = () => {
    setOpen(false);

    switch (selectedAction) {
      case 'delete':
        deleteWorkshop();
        break;
      // ... (otros casos)
      default:
        break;
    }
  };

  return (
    <>
      <AppBar position="static" color="primary" sx={{ background: 'secondary', mb: 1, borderRadius: 1 }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Search searchText={searchText} setSearchText={setSearchText} />
          <Box>
            {selected.length === 1 && (
              <Tooltip title="Visitar">
                <IconButton color="inherit" onClick={goToProfile}>
                  <RemoveRedEyeIcon />
                </IconButton>
              </Tooltip>
            )}
            {selected.length > 0 && (
              <Tooltip title="Eliminar">
                <IconButton color="inherit" onClick={handleClickDelete}>
                  <DeleteIcon />
                </IconButton>
              </Tooltip>
            )}
          </Box>
        </Toolbar>
      </AppBar>
      {open && (
        <div>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">{textTitleModal}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">{textModal}</DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancelar</Button>
              <Button onClick={handleAcceptClick} autoFocus>
                Aceptar
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      )}
    </>
  );
};

export default EnhancedTableToolbarWorkshops;
