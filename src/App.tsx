import ExplorerTable from "./components/explorerTable";
import VehicleRow from "./components/explorerTable/rows/vehicle";
import styles from "./App.module.css";
import { columns, rows } from "./shared/mockData/vehicles";
import { Vehicle } from "./shared/interfaces/vehicles";

function App() {
  return (
    <div className={styles.main}>
      <ExplorerTable
        columns={columns}
        rows={rows}
        renderItem={(row: Vehicle, index: number) => {
          return <VehicleRow row={row} key={index} />;
        }}
      />
    </div>
  );
}

export default App;
