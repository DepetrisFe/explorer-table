import { Paper } from "@mui/material";
import styles from "./description.module.css";

const Description = () => {
  return (
    <Paper className={styles.textContainer}>
      <span>This is an example of a reusable table using "Render Props".</span>
      <p>
        Each button is responsible for updating the state of the table with new
        content and headers, causing the table information to change completely.
        Always using a single reusable table component.
      </p>
    </Paper>
  );
};

export default Description;
