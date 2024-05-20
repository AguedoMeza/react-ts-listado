import React from 'react';
import { DataGrid, GridColDef, GridRowSelectionModel, GridPaginationModel, DataGridProps } from '@mui/x-data-grid';
import { Button, Grid, Tooltip } from "@mui/material";

interface CustomState {
  [key: string]: boolean;
}

interface Transferencia {
  id: string;
  Cve: string;
  uuid: string;
  // Add more properties as needed
}

interface DataGridModularProps {
  rowsAltas: Transferencia[];
  columns: GridColDef[];
  asignarEnlaces: (selectedOptions: CustomState) => void;
  selectedOptions: CustomState;
  handleSelectionChange: (selection: GridRowSelectionModel) => void;
  Mostrar: boolean;
  onPageChange: (page: number) => void;
  rowCount: number;
  page: number;
  pageSize: number;
  onPageSizeChange: (pageSize: number) => void;
}

const DataGridModular: React.FC<DataGridModularProps> = ({
  rowsAltas,
  columns,
  asignarEnlaces,
  selectedOptions,
  handleSelectionChange,
  Mostrar,
  onPageChange,
  rowCount,
  page,
  pageSize,
  onPageSizeChange
}) => {

  const customLocaleText = {
    noRowsLabel: 'No se encontraron resultados',
    noResultsOverlayLabel: 'Resultados no encontrados',
    footerRowSelected: (count: any) =>
      count > 1
        ? `${count.toLocaleString()} filas seleccionadas`
        : `${count.toLocaleString()} fila seleccionada`,
  };

  const paginationModel = {
    page: page - 1, // MUI pages are zero-based
    pageSize: pageSize,
  };

  return (
    <>
      <Grid item xs={12}>
        <Grid style={{ height: 700, width: '100%' }}>
          <DataGrid
            sx={{
              type: "number",
              align: "left"
            }}
            rows={rowsAltas}
            columns={columns}
            checkboxSelection
            getRowId={(row: any) => row.uuid}
            onRowSelectionModelChange={handleSelectionChange}
            localeText={customLocaleText}
            paginationMode="server"
            rowCount={rowCount}
            paginationModel={paginationModel}
            onPaginationModelChange={(params: GridPaginationModel) => {
              onPageChange(params.page + 1); // Adjusting for zero-based index
              onPageSizeChange(params.pageSize);
            }}
            pagination
          />
        </Grid>
        <br />
        <Tooltip title="Asignar enlaces">
          <Button
            color="primary"
            variant="contained"
            style={{
              position: 'absolute',
              right: '50px',
              display: Mostrar ? 'block' : 'none',
              textTransform: 'capitalize'
            }}
            onClick={() => {
              console.log("Se hizo clic en el botón 'Asignar'. Opciones seleccionadas:", selectedOptions);
              asignarEnlaces(selectedOptions);
            }}
          >
            Asignar
          </Button>
        </Tooltip>
        <br />
      </Grid>
    </>
  );
};

export { DataGridModular };
