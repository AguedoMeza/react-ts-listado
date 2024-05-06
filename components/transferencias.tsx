import React, { useEffect, useState } from 'react';
import { createAPIEndpoint, ENDPOINTS, AMBIENTES } from '../services/GeneralServices';
import { Typography } from '@mui/material';
import { DataGridModular } from './Datagrid/Table'; // Adjust the import path as necessary

// Define the structure of your data
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

  useEffect(() => {
    const apiEndpoint = createAPIEndpoint(ENDPOINTS.listado_transferencias, AMBIENTES.PABMI);
    apiEndpoint.get().then((response: any) => {
      setTransferencias(response.data.map((item: Transferencia) => ({
        ...item,
        id: item.uuid,
      })));
    }).catch(error => console.error(error));
  }, []);

  // The selectedOptions and handleSelectionChange props are placeholders; adjust them as needed
  const selectedOptions = {}; // Define according to your implementation
  const handleSelectionChange = (selection: any) => {
    // Define your selection change logic here
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
    </div>
  );
};

export default TransferenciasComponent;
