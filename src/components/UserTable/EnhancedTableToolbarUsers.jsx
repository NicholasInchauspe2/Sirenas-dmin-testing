import { useContext, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Search from '../../common/Search/Search';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, IconButton, Tooltip } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import { CartContext } from '../../store/context/CartContext';
import DialogTitle from '@mui/material/DialogTitle';
import PaidIcon from '@mui/icons-material/Paid';

function EnhancedTableToolbarUsers({ searchText, setSearchText, selected,deleteUser,payUser }) {
  const { APIURl } = useContext(CartContext);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [textModal, setTextModal] = useState('');
  const [textTitleModal, setTextTitleModal] = useState('');
  const [selectedAction, setSelectedAction] = useState(null);

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickDelete = () => {
    setOpen(true);
    setTextModal(`Esta seguro que desea eliminar ${selected.length} usuarios?`);
    setTextTitleModal('Eliminar Usuarios');
    setSelectedAction('delete');
  };

  const handleClickPay = () => {
    setOpen(true);
    setTextModal(`Esta seguro que desea pagar ${selected.length} usuarios?`);
    setTextTitleModal('Pagar Usuarios');
    setSelectedAction('pay');
  };

  const handleAcceptClick = () => {
    setOpen(false);

    switch (selectedAction) {
      case 'delete':
        deleteUser();
        break;
      case 'pay':
        payUser();
        break;
      default:
        break;
    }
  };

  // Verificar si algún usuario seleccionado tiene PAY en true
  const isAnyUserPaid = selected.some((user) => user.pay);


  return (
    <>
      <AppBar position="static" color="primary" sx={{ background: 'secondary', mb: 1, borderRadius: 1 }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Search searchText={searchText} setSearchText={setSearchText} />
          <Box>
            {selected.length > 0 && !isAnyUserPaid && (
              <Tooltip title="Confirmar Pago">
                <IconButton color="inherit" onClick={handleClickPay}>
                  <PaidIcon />
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
}

export default EnhancedTableToolbarUsers;
