import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import "./App.css";

function App() {
  const rows = [
    {
      id: 1,
      brand: "Nissan",
      model: "Micra",
      year: 2019,
      fuelType: "Gasoline",
      kilometers: "1780",
    },
    {
      id: 2,
      brand: "Mazda",
      model: "3",
      year: 2014,
      fuelType: "Gasoline",
      kilometers: "109000",
    },
    {
      id: 3,
      brand: "Ford",
      model: "Fiesta",
      year: 2020,
      fuelType: "Diesel",
      kilometers: "28000",
    },
    {
      id: 4,
      brand: "Honda",
      model: "Civic",
      year: 1996,
      fuelType: "Gasoline",
      kilometers: "123900",
    },
    {
      id: 5,
      brand: "Subaru",
      model: "Impreza",
      year: 2004,
      fuelType: "Diesel",
      kilometers: "320120",
    },
    {
      id: 6,
      brand: "Toyota",
      model: "Hilux",
      year: 2001,
      fuelType: "Diesel",
      kilometers: "999999",
    },
  ];

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Brand</TableCell>
            <TableCell align="center">Model</TableCell>
            <TableCell align="center">Year</TableCell>
            <TableCell align="center">Fuel type</TableCell>
            <TableCell align="center">Kilometers</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="center">{row.brand}</TableCell>
              <TableCell align="center">{row.model}</TableCell>
              <TableCell align="center">{row.year}</TableCell>
              <TableCell align="center">{row.fuelType}</TableCell>
              <TableCell align="center">{row.kilometers}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default App;
