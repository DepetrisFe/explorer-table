import { Food } from "../../../../shared/interfaces/food";
import { TableCell, TableRow } from "@mui/material";
import styles from "./food-row.module.css";

interface FoodRowProps {
  row: Food;
}

const FoodRow = (props: FoodRowProps) => {
  const { row } = props;
  return (
    <TableRow key={row.id} className={styles.foodRow}>
      <TableCell align="center">{row.name}</TableCell>
      <TableCell align="center">{row.category}</TableCell>
      <TableCell align="center">{row.calories}</TableCell>
      <TableCell align="center">{row.protein}</TableCell>
      <TableCell align="center">{row.fat}</TableCell>
      <TableCell align="center">{row.price}</TableCell>
    </TableRow>
  );
};

export default FoodRow;
