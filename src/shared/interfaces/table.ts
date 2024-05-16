export interface Column {
  key: string;
  label: string;
  size: number;
  alignment: "left" | "center" | "right";
}

export interface TableSettings {
  tableColumns: Column[];
  tableRows: any[];
  tableRenderItem: (row: any, index: number) => JSX.Element;
}
