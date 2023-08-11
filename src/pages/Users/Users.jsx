import { Box, Typography, Button } from "@mui/material";
import EnhancedTableUsers from "../../components/UserTable/EnhancedTableUsers";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../store/context/CartContext";
import EnhancedTableToolbarUsers from "../../components/UserTable/EnhancedTableToolbarUsers";
import TableContainerUsers from "../../components/UserTable/TableContainerUsers";
import AddIcon from "@mui/icons-material/Add";
import { Tooltip } from "@mui/material";
import SystemUpdateAltIcon from "@mui/icons-material/SystemUpdateAlt";
import IosShareIcon from "@mui/icons-material/IosShare";
const Users = () => {
  const { APIURL } = useContext(CartContext);
  const [mermaids, setMermaids] = useState([]);
  const [searchText, setSearchText] = useState(""); // State para el filtro
  const [selected, setSelected] = useState([]);

  console.log({ selected });
  useEffect(() => {
    const getUsers = async () => {
      try {
        const URL = `${APIURL}/api/users/all`;
        const PARAMS = {
          method: "GET",
        };
        const response = await fetch(URL, PARAMS);
        if (response.ok) {
          const data = await response.json();
          setMermaids(data);
        } else {
          console.error("error al pedir usuario");
        }
      } catch (err) {
        console.log(err);
      }
    };
    getUsers();
  }, []);

  // Aplicar el filtro a los datos de usuarios
  const filteredUsers = mermaids.filter(
    (user) =>
      user.name.toLowerCase().includes(searchText.toLowerCase()) ||
      user.lastname.toLowerCase().includes(searchText.toLowerCase()) ||
      `${user.name} ${user.lastname}`
        .toLowerCase()
        .includes(searchText.toLowerCase())
  );

  const deleteUser = async () => {
    // ... Código para eliminar usuario ...
  };

  const payUser = async () => {
    // ... Código para pagar usuario ...
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
      <Box sx={{ maxWidth: "70vw", width: "100%" }}>
        <Box sx={{ display: "flex", alignItems: "center", mb: 2, mt: 2 }}>
          <Typography
            variant="h3"
            id="tableTitle"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            Usuarios
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
              >
                <AddIcon />
              </Button>
            </Tooltip>
          </Box>
        </Box>
        <EnhancedTableToolbarUsers
          searchText={searchText}
          setSearchText={setSearchText}
          selected={selected}
          payUser={payUser}
          deleteUser={deleteUser}
        />
        {filteredUsers.length > 0 ? (
          <TableContainerUsers
            rows={filteredUsers}
            selected={selected}
            setSelected={setSelected}
          />
        ) : (
          <Typography variant="body1" sx={{ textAlign: "center" }}>
            Cargando usuarios...
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default Users;
