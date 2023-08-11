// import * as React from 'react';
// import PropTypes from 'prop-types';
// import Box from '@mui/material/Box';
// import TableCell from '@mui/material/TableCell';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import TableSortLabel from '@mui/material/TableSortLabel';
// import Checkbox from '@mui/material/Checkbox';
// import { visuallyHidden } from '@mui/utils';


// const headCells = [
//     {
//         id: 'name',
//         numeric: false,
//         disablePadding: true,
//         label: 'Nombre',
//     },
//     {
//         id: 'lastname',
//         numeric: false,
//         disablePadding: true,
//         label: 'Apellido',
//     },
//     {
//         id: 'dni',
//         numeric: true,
//         disablePadding: false,
//         label: 'DNI',
//     },
//     {
//         id: 'age',
//         numeric: true,
//         disablePadding: false,
//         label: 'Edad',
//     }, 
//     {
//         id: 'email',
//         numeric: false,
//         disablePadding: false,
//         label: 'Correo electrónico',
//     },
//     {
//         id: 'instagram',
//         numeric: false,
//         disablePadding: false,
//         label: 'Instagram',
//     },
//     {
//         id: 'address',
//         numeric: false,
//         disablePadding: false,
//         label: 'Dirección',
//     },
//     {
//         id: 'phone',
//         numeric: true,
//         disablePadding: false,
//         label: 'Teléfono',
//     },
// ];

// EnhancedTableHead.propTypes = {
//     numSelected: PropTypes.number.isRequired,
//     onRequestSort: PropTypes.func.isRequired,
//     onSelectAllClick: PropTypes.func.isRequired,
//     order: PropTypes.oneOf(['asc', 'desc']).isRequired,
//     orderBy: PropTypes.string.isRequired,
//     rowCount: PropTypes.number.isRequired,
// };

// export default function EnhancedTableHead(props) {
//     const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
//         props;
//     const createSortHandler = (property) => (event) => {
//         onRequestSort(event, property);
//     };


//     return (
//         <TableHead>
//             <TableRow>
//                 <TableCell padding="checkbox">
//                     <Checkbox
//                         color="primary"
//                         indeterminate={numSelected > 0 && numSelected < rowCount}
//                         checked={rowCount > 0 && numSelected === rowCount}
//                         onChange={onSelectAllClick}
//                         inputProps={{
//                             'aria-label': 'select all desserts',
//                         }}
//                     />
//                 </TableCell>
//                 {headCells.map((headCell) => (
//                     <TableCell
//                         key={headCell.id}
//                         align={headCell.numeric ? 'center' : 'center'}
//                         padding={headCell.disablePadding ? 'none' : 'normal'}
//                         sortDirection={orderBy === headCell.id ? order : false}
//                     >
//                         <TableSortLabel
//                             active={orderBy === headCell.id}
//                             direction={orderBy === headCell.id ? order : 'asc'}
//                             onClick={createSortHandler(headCell.id)}
//                         >
//                             {headCell.label}
//                             {orderBy === headCell.id ? (
//                                 <Box component="span" sx={visuallyHidden}>
//                                     {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
//                                 </Box>
//                             ) : null}
//                         </TableSortLabel>
//                     </TableCell>
//                 ))}
//             </TableRow>
//         </TableHead>
//     );
// }



