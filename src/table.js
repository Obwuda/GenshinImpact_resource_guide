import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import "./table.css";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "rgb(83, 78, 78);",
    color: theme.palette.common.white
  },
  body: {
    fontSize: 15
  }
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover
    }
  }
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Agnidus Agate Gemstone", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9)
];

class ModalMatInfo extends React.Component {
  render() {
    return (
      <TableContainer component={Paper}>
        <Table className="mat_table" aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Drop</StyledTableCell>
              <StyledTableCell align="right">Lvl 30</StyledTableCell>
              <StyledTableCell align="right">Lvl 40</StyledTableCell>
              <StyledTableCell align="right">Lvl 60</StyledTableCell>
              <StyledTableCell align="right">Lvl 75</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  <img
                    class="mat_icon"
                    src="https://img.game8.jp/5076739/2d827200c58086c269727c55977cb475.jpeg/show"
                    alt={"gemstone"}
                  />{" "}
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="right">{row.calories}</StyledTableCell>
                <StyledTableCell align="right">{row.fat}</StyledTableCell>
                <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                <StyledTableCell align="right">{row.protein}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}

export default ModalMatInfo;
