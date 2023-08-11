import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Checkbox from "@mui/material/Checkbox";
import Paper from "@mui/material/Paper";
import { useNavigate } from 'react-router-dom';
import EnhancedTableHeadUsers from "./EnhancedTableHeadUsers";
import { stableSort, getComparator } from "./utils";
import { Avatar, Box, Chip, Button, Tooltip } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import Person3Icon from '@mui/icons-material/Person3';
import formatBirthDate from '../../common/Format/FormatBirthDate' 

export default function TableContainerUsers({ rows, selected, setSelected }) {
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("calories");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [visibleRows, setVisibleRows] = useState([]);
  const navigate = useNavigate();

  // Actualizar visibleRows cuando cambie rows
  useEffect(() => {
    setVisibleRows(
      stableSort(rows, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
      )
    );
  }, [rows, order, orderBy, page, rowsPerPage]);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => ({ id: n.id, pay: n.pay }));
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, id, pay) => {
    const selectedIndex = selected.findIndex((item) => item.id === id);
    let newSelected = [];

    if (selectedIndex === -1) {
      // Agregar el nuevo usuario seleccionado al array newSelected
      newSelected = [...selected, { id, pay }];
    } else if (selectedIndex === 0) {
      // Deseleccionar el primer usuario
      newSelected = selected.slice(1);
    } else if (selectedIndex === selected.length - 1) {
      // Deseleccionar el último usuario
      newSelected = selected.slice(0, -1);
    } else if (selectedIndex > 0) {
      // Deseleccionar un usuario que no es el primero ni el último
      newSelected = [
        ...selected.slice(0, selectedIndex),
        ...selected.slice(selectedIndex + 1),
      ];
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleOpenInstagramProfile = (instagramUsername) => {
    const usernameWithoutAt = instagramUsername.slice(1);
    const profileUrl = `https://www.instagram.com/${usernameWithoutAt}/`;
    window.open(profileUrl, "_blank");
  };

  const goToProfile = (User) => {
    navigate(`/usuarios/${User}`);
  };

  const isSelected = (id) =>
    selected.findIndex((item) => item.id === id) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    <TableContainer component={Paper}>
      <Table
        sx={{ minWidth: 750 }}
        aria-labelledby="tableTitle"
        size={"medium"}
      >
        <EnhancedTableHeadUsers
          numSelected={selected.length}
          order={order}
          orderBy={orderBy}
          onSelectAllClick={handleSelectAllClick}
          onRequestSort={handleRequestSort}
          rowCount={rows.length}
        />
        <TableBody>
          {visibleRows.map((row) => {
            const isItemSelected = isSelected(row.id);
            const labelId = `enhanced-table-checkbox-${row.id}`;

            return (
              <TableRow
                hover
                onClick={(event) => handleClick(event, row.id, row.pay)}
                role="checkbox"
                aria-checked={isItemSelected}
                tabIndex={-1}
                key={row.id}
                selected={isItemSelected}
                sx={{ cursor: "pointer" }}
              >
                <TableCell padding="checkbox">
                  <Checkbox
                    color="primary"
                    checked={isItemSelected}
                    inputProps={{
                      "aria-labelledby": labelId,
                    }}
                  />
                </TableCell>
                <TableCell
                  component="th"
                  id={labelId}
                  scope="row"
                  padding="none"
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      height: "100%",
                      my: 0,
                    }}
                  >
                    <Avatar
                      alt={row.name + row.lastname}
                      src={row.avatar}
                      sx={{ mr: 2 }}
                    />
                    {row.name} {row.lastname}
                  </Box>
                </TableCell>
                <TableCell align="center">{formatBirthDate(row.birth_date)}</TableCell>
                <TableCell align="center">{row.username}</TableCell>
                <TableCell align="center">{row.email}</TableCell>
                <TableCell align="center">{row.phone? row.phone : "Vacio"}</TableCell>
                <TableCell align="center">
                  {row.pay ? (
                    <Chip label="Abonado" color="success" />
                  ) : (
                    <Chip label="Pendiente" color="error" />
                  )}
                </TableCell>
                <TableCell align="center">
                  <Tooltip title="Ver Perfil">
                    <Button
                      sx={{
                        borderRadius: 10,
                        minWidth: 0,
                        padding: 1.6,
                        marginRight: 1,
                      }}
                      variant="contained"
                      color="primary"
                      onClick={() => goToProfile(row.id)}
                    >
                      <Person3Icon />
                    </Button>
                  </Tooltip>
                  <Tooltip title="Ver Instagram">
                    <Button
                      sx={{ borderRadius: 10, minWidth: 0, padding: 1.6 }}
                      variant="contained"
                      color="primary"
                      onClick={() => handleOpenInstagramProfile(row.username)}
                    >
                      <InstagramIcon />
                    </Button>
                  </Tooltip>
                </TableCell>
              </TableRow>
            );
          })}
          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainer>
  );
}
