import ExplorerTable from "./components/explorerTable";
import VehicleRow from "./components/explorerTable/rows/vehicle";
import { Vehicle } from "./shared/interfaces/vehicles";

const columns = [
  { key: "brand", label: "Brand", size: 100, alignment: "center" },
  { key: "model", label: "Model", size: 100, alignment: "center" },
  { key: "year", label: "Year", size: 100, alignment: "center" },
  { key: "fuelType", label: "Fuel type", size: 100, alignment: "center" },
  { key: "kilometers", label: "Kilometers", size: 100, alignment: "center" },
];

const rows: Vehicle[] = [
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

function App() {
  return (
    <ExplorerTable
      columns={columns}
      rows={rows}
      renderItem={(row: Vehicle, index: number) => {
        return <VehicleRow row={row} key={index}/>;
      }}
    />
  );
}

export default App;
