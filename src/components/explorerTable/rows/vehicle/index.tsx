import { Vehicle } from "../../../../shared/interfaces/vehicles";
import { TableCell, TableRow } from "@mui/material";
import styles from "./vehicle-row.module.css";

interface VehicleRowProps {
  row: Vehicle;
}

const VehicleRow = (props: VehicleRowProps) => {
  const { row } = props;
  return (
    <TableRow
      key={row.id}
      className={styles.vehicleRow}
    >
      <TableCell align="center">{row.brand}</TableCell>
      <TableCell align="center">{row.model}</TableCell>
      <TableCell align="center">{row.year}</TableCell>
      <TableCell align="center">{row.fuelType}</TableCell>
      <TableCell align="center">{row.kilometers}</TableCell>
    </TableRow>
  );
};

export default VehicleRow;
