import * as React from "react";
import { useContext, useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import { CartContext } from "../../store/context/CartContext";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Avatar, Box, Chip, Button, Tooltip, Pagination } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import ClearIcon from "@mui/icons-material/Clear";

const handleOpenInstagramProfile = (instagramUsername) => {
  const usernameWithoutAt = instagramUsername.slice(1);
  const profileUrl = `https://www.instagram.com/${usernameWithoutAt}/`;
  window.open(profileUrl, "_blank");
};

const unsubscribeUser = async () => {
  // ... Código para eliminar usuario ...
};

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

export default function TableDropUsers() {
  const { APIURL } = useContext(CartContext);
  const [mermaids, setMermaids] = useState([]);
  const [searchText, setSearchText] = useState(""); // State para el filtro
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(1);
  const rowsPerPage = 10; // Cambia este valor para ajustar el número de filas por página

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

  // Función para calcular el índice del primer elemento en la página actual
  const getFirstElementIndex = () => {
    return (page - 1) * rowsPerPage;
  };

  // Función para calcular el índice del último elemento en la página actual
  const getLastElementIndex = () => {
    return Math.min(getFirstElementIndex() + rowsPerPage, mermaids.length);
  };

  // Función para manejar el cambio de página
  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <Box>
      <TableContainer sx={{display:'flex', justifyContent:'center', background:'none',}} component={Paper}>
        <Table sx={{ minWidth: 300 ,maxWidth: 1000,}} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">Nombre</StyledTableCell>
              <StyledTableCell align="center">Acciones</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {mermaids
              .slice(getFirstElementIndex(), getLastElementIndex())
              .map((user, index) => (
                <StyledTableRow align="center" style={{backgroundColor:index % 2 ===0 ? "#fff" : "#1111"}} key={user.id}>
                  <StyledTableCell align='center' component="th" scope="row">
                    {user.name} {user.lastname}
                  </StyledTableCell>
                  <Tooltip title="Ver Instagram">
                    <Button
                      sx={{
                        borderRadius: 10,
                        minWidth: 0,
                        padding: 1.6,
                        marginRight: 0.5,
                      }}
                      // variant="outlined"
                      color="primaryPink"
                      onClick={() => handleOpenInstagramProfile(user.username)}
                    >
                      <InstagramIcon />
                    </Button>
                  </Tooltip>
                  <Tooltip title="Eliminar de lista">
                    <Button
                      sx={{
                        borderRadius: 10,
                        minWidth: 0,
                        padding: 1.6,
                        marginLeft: 0.5,
                      }}
                      // variant="outlined"
                      color="primaryPink"
                    >
                      <ClearIcon />
                    </Button>
                  </Tooltip>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box sx={{display: 'flex', justifyContent:'center', marginTop:2}}>
        <Pagination 
        count={Math.ceil(mermaids.length / rowsPerPage)}
        page={page}
        onChange={handlePageChange}
        />
      </Box>
  </Box>
  );
}
