import React, { useEffect, useState } from 'react';
import { createAPIEndpoint, ENDPOINTS, AMBIENTES } from '../services/GeneralServices';
import { Typography } from '@mui/material';
import { DataGridModular } from './Datagrid/Table';

interface Transferencia {
  id: string;
  Cve: string;
  uuid: string;
  // Add more properties as needed
}

const columns = [
  { field: 'Cve', headerName: 'Código de Verificación', width: 200 },
  { field: 'uuid', headerName: 'UUID', width: 300 },
  // Add more columns as necessary
];

const TransferenciasComponent: React.FC = () => {
  const [transferencias, setTransferencias] = useState<Transferencia[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(100); // Page size default value
  const [rowCount, setRowCount] = useState(0); // Total number of rows

  const fetchData = (page: number, pageSize: number) => {
    const apiEndpoint = createAPIEndpoint(`${ENDPOINTS.listado_ts}?page=${page}&per_page=${pageSize}`, AMBIENTES.PABMI);

    apiEndpoint.get().then((response: any) => {
      setTransferencias(response.data.data.map((item: Transferencia) => ({
        ...item,
        id: item.uuid,
      })));
      setRowCount(response.data.total); // Update total rows from API response
    }).catch(error => console.error(error));
  };

  useEffect(() => {
    fetchData(currentPage, pageSize);
  }, [currentPage, pageSize]);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const handlePageSizeChange = (newPageSize: number) => {
    setPageSize(newPageSize);
  };

  const selectedOptions: any = {}; // Define according to your implementation
  const handleSelectionChange = (selection: any) => {
    // Define your selection change logic here
  };

  return (
    <div style={{ height: 700, width: '100%' }}>
      <Typography variant="h4" gutterBottom>Listado de Transferencias</Typography>
      <DataGridModular
        rowsAltas={transferencias}
        columns={columns}
        asignarEnlaces={() => {}} // Define this function based on your needs
        selectedOptions={selectedOptions}
        handleSelectionChange={handleSelectionChange}
        Mostrar={true} // Adjust based on your display logic
        onPageChange={handlePageChange} // Handle page change event
        rowCount={rowCount} // Total number of rows
        page={currentPage} // Current page
        pageSize={pageSize} // Page size
        onPageSizeChange={handlePageSizeChange} // Handle page size change event
      />
    </div>
  );
};

export default TransferenciasComponent;
