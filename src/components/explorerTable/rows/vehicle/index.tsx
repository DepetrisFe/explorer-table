import React from "react";
import { Vehicle } from "../../../../shared/interfaces/vehicles";

interface VehicleRowProps {
  row: Vehicle;
}

const VehicleRow = (props: VehicleRowProps) => {
  const { row } = props;
  return <div></div>;
};

export default VehicleRow;
