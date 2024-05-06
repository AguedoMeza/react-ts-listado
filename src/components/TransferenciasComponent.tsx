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

const TransferenciasComponent = () => {
  const [transferencias, setTransferencias] = useState<Transferencia[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchData = (page: number) => {
    const url = `?page=${page}`;
    const apiEndpoint = createAPIEndpoint(`${ENDPOINTS.listado_ts}?page=${page}`, AMBIENTES.PABMI);

apiEndpoint.get().then((response: any) => {
  setTransferencias(response.data.data.map((item: Transferencia) => ({
    ...item,
    id: item.uuid,
  })));
}).catch(error => console.error(error));
  };

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);

  const selectedOptions: any = {}; // Define according to your implementation
  const handleSelectionChange = (selection: any) => {
    // Define your selection change logic here
  };

  const handleNextPage = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
  };

  return (
    <div style={{ height: 400, width: '100%' }}>
      <Typography variant="h4" gutterBottom>Listado de Transferencias</Typography>
      <DataGridModular
        rowsAltas={transferencias}
        columns={columns}
        asignarEnlaces={() => {}} // Define this function based on your needs
        selectedOptions={selectedOptions}
        handleSelectionChange={handleSelectionChange}
        Mostrar={true} // Adjust based on your display logic
      />
      <div>
        <button onClick={handlePrevPage} disabled={currentPage === 1}>Página Anterior</button>
        <button onClick={handleNextPage}>Siguiente Página</button>
      </div>
    </div>
  );
};

export default TransferenciasComponent;
