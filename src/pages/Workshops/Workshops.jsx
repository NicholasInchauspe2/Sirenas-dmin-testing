import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../store/context/CartContext";
import { Box, Button, Typography, Tooltip } from "@mui/material";
import EnhancedTableToolbarWorkshops from "../../components/TableWorkshops/EnhancedTableToolbarWorksops";
import TableContainerWorkshops from "../../components/TableWorkshops/TableContainerWorkshops";
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from "react-router-dom";
import IntegrationNotistack from "../../common/SnackBar/SnackBar";
import SnackBar from "../../common/SnackBar/SnackBar";

const Talleres = () => {
  const { APIURL } = useContext(CartContext)
  const [workshops, setWorkshops] = useState([])
  const [searchText, setSearchText] = useState('')
  const [selected, setSelected] = useState([])

  const [openModal, setOpenModal] = useState(false)
  const [messageModal, setMessageModal] = useState("no message")
  const [severity, setSeverity] = useState("info")

  const navigate = useNavigate();

  const updateWorkshopsAfterDelete = async () => {
    try {
      const URL = `${APIURL}/api/workshops`;
      const PARAMS = {
        method: "GET",
      };
      const response = await fetch(URL, PARAMS);
      if (response.ok) {
        const data = await response.json();
        setWorkshops(data.workshops);
        setSelected([])
      } else {
        console.error('error al pedir usuario');
      }
    } catch (err) {
      console.log(err);
    }
  };


  useEffect(() => {
    const getWorkshops = async () => {
      try {
        const URL = `${APIURL}/api/workshops`;
        const PARAMS = {
          method: "GET",
        };
        const response = await fetch(URL, PARAMS);
        if (response.ok) {
          const data = await response.json();
          setWorkshops(data.workshops);
        } else {
          const messageError = 'Al cargar los talleres'
          setOpenModal(true)
          setMessageModal(messageError)
          setSeverity('error')
        }

      } catch (err) {
        console.log(err);
      }
    };
    getWorkshops();

  }, []);

  const filteredWorkshops = workshops.filter((workshop) =>
    workshop.workshopNumber.toString().includes(searchText)
  );

  const goToCreateWorkshop = () => {
    navigate('/taller')
  }

  return (
    <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
      <SnackBar message={messageModal} setOpen={setOpenModal} open={openModal} severity={severity} />
      <Box sx={{ maxWidth: "70vw", width: "100%" }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, mt: 2 }} >
          <Typography variant="h3" id="tableTitle" component="div" sx={{ flexGrow: 1 }}>
            Talleres
          </Typography>
          <Box>
            {/* <Button variant="contained" startIcon={<SystemUpdateAltIcon />}>
              Exportar
            </Button> */}
            <Tooltip title="Agregar Usuario">
              <Button
                sx={{
                  borderRadius: 10,
                  minWidth: 0,
                  padding: 1.6,
                  marginRight: 1,
                }}
                variant="contained"
                color="primary"
                onClick={goToCreateWorkshop}
              >
                <AddIcon />
              </Button>
            </Tooltip>
            {/* <Button variant="contained" startIcon={<AddIcon />} onClick={goToCreateWorkshop}>
              Agregar
            </Button> */}
          </Box>
        </Box>
        <EnhancedTableToolbarWorkshops
          searchText={searchText}
          setSearchText={setSearchText}
          selected={selected}
          updateWorkshopsAfterDelete={updateWorkshopsAfterDelete}
        />
        {filteredWorkshops.length > 0 ? (
          <TableContainerWorkshops rows={filteredWorkshops} selected={selected} setSelected={setSelected} />
        ) : (
          <Typography variant="body1" sx={{ textAlign: 'center' }}>
            Cargando talleres...
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default Talleres;
