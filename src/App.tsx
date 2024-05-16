import { useState } from "react";

import { Food } from "./shared/interfaces/food";
import { foodColumns, foodRows } from "./shared/mockData/food";
import { TableSettings } from "./shared/interfaces/table";
import { Vehicle } from "./shared/interfaces/vehicles";
import { vehicleColumns, vehicleRows } from "./shared/mockData/vehicles";
import ExplorerTable from "./components/explorerTable";
import FoodRow from "./components/explorerTable/rows/food";
import styles from "./App.module.css";
import VehicleRow from "./components/explorerTable/rows/vehicle";
import Description from "./components/description";

import { Button } from "@mui/material";

function App() {
  const vehicleTableSettings: TableSettings = {
    tableColumns: vehicleColumns,
    tableRows: vehicleRows,
    tableRenderItem: (row: Vehicle, index: number) => {
      return <VehicleRow row={row} key={index} />;
    },
  };
  const foodTableSettings: TableSettings = {
    tableColumns: foodColumns,
    tableRows: foodRows,
    tableRenderItem: (row: Food, index: number) => {
      return <FoodRow row={row} key={index} />;
    },
  };

  const [tableSettings, setTableSettings] =
    useState<TableSettings>(vehicleTableSettings);

  return (
    <div className={styles.main}>
      <Description />
      <div className={styles.buttonsContainer}>
        <Button
          onClick={() => setTableSettings(vehicleTableSettings)}
          variant="contained"
          className={styles.button}
        >
          Vehicles
        </Button>
        <Button
          onClick={() => setTableSettings(foodTableSettings)}
          variant="contained"
          className={styles.button}
        >
          Food
        </Button>
      </div>
      <ExplorerTable
        columns={tableSettings.tableColumns}
        rows={tableSettings.tableRows}
        renderItem={tableSettings.tableRenderItem}
      />
      {/* Example of how to pass renderItem directly
      <ExplorerTable
        columns={columns}
        rows={rows}
        renderItem={(row: Vehicle, index: number) => {
          return <VehicleRow row={row} key={index} />;
        }}
      /> */}
    </div>
  );
}

export default App;
