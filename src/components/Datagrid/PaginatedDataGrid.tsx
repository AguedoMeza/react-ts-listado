import React, { useEffect, useState } from 'react';
import { DataGrid, GridColDef, GridSelectionModel } from '@mui/x-data-grid';
import { createAPIEndpoint, AMBIENTES } from '../../services/GeneralServices';
import { Grid, Button, Tooltip, Typography } from '@mui/material';

interface PaginatedDataGridProps<T> {
  title: string;
  endpoint: string;
  ambiente: string;
  columns: GridColDef[];
  asignarEnlaces: (selectedOptions: CustomState) => void;
  selectedOptions: CustomState;
  handleSelectionChange: (selection: GridSelectionModel) => void;
  Mostrar: boolean;
}

interface CustomState {
  [key: string]: boolean;
}

const PaginatedDataGrid = <T,>({
  title,
  endpoint,
  ambiente,
  columns,
  asignarEnlaces,
  selectedOptions,
  handleSelectionChange,
  Mostrar,
}: PaginatedDataGridProps<T>) => {
  const [data, setData] = useState<T[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(100);
  const [rowCount, setRowCount] = useState(0);

  const fetchData = (page: number, pageSize: number) => {
    const apiEndpoint = createAPIEndpoint(`${endpoint}?page=${page}&per_page=${pageSize}`, ambiente);
    apiEndpoint.get().then((response: any) => {
      setData(response.data.data.map((item: any) => ({
        ...item,
        id: item.uuid,
      })));
      setRowCount(response.data.total);
    }).catch(error => console.error(error));
  };

  useEffect(() => {
    fetchData(currentPage, pageSize);
  }, [currentPage, pageSize]);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage + 1);
  };

  const handlePageSizeChange = (newPageSize: number) => {
    setPageSize(newPageSize);
  };

  const customLocaleText = {
    noRowsLabel: 'No se encontraron resultados',
    noResultsOverlayLabel: 'Resultados no encontrados',
    footerRowSelected: (count: any) =>
      count > 1
        ? `${count.toLocaleString()} filas seleccionadas`
        : `${count.toLocaleString()} fila seleccionada`,
  };

  return (
    <div style={{ height: 700, width: '100%' }}>
      <Typography variant="h4" gutterBottom>{title}</Typography>
      <Grid item xs={12}>
        <Grid style={{ height: 700, width: '100%' }}>
          <DataGrid
            sx={{
              type: "number",
              align: "left"
            }}
            rows={data}
            columns={columns}
            checkboxSelection
            getRowId={(row: any) => row.uuid}
            onSelectionModelChange={(selection) => handleSelectionChange(selection as GridSelectionModel)}
            localeText={customLocaleText}
            paginationMode="server"
            rowCount={rowCount}
            page={currentPage - 1}
            pageSize={pageSize}
            onPageChange={(params) => handlePageChange(params)}
            onPageSizeChange={(params) => handlePageSizeChange(params)}
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
    </div>
  );
};

export default PaginatedDataGrid;
