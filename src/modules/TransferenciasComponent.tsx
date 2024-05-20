import React from 'react';
import { ENDPOINTS, AMBIENTES } from '../services/GeneralServices';
import PaginatedDataGrid from '../components/Datagrid/PaginatedDataGrid';
import { Transferencia } from '../models/Transferencia';

const columns = [
  { field: 'Cve', headerName: 'Código de Verificación', width: 200 },
  { field: 'uuid', headerName: 'UUID', width: 300 },
  // Add more columns as necessary
];

const selectedOptions: any = {}; // Define according to your implementation
const handleSelectionChange = (selection: any) => {
  // Define your selection change logic here
};

const TransferenciasComponent: React.FC = () => {
  return (
    <PaginatedDataGrid<Transferencia>
      title="Listado de Transferencias"
      endpoint={ENDPOINTS.listado_ts}
      ambiente={AMBIENTES.PABMI}
      columns={columns}
      asignarEnlaces={() => {}} // Define this function based on your needs
      selectedOptions={selectedOptions}
      handleSelectionChange={handleSelectionChange}
      Mostrar={true} // Adjust based on your display logic
    />
  );
};

export default TransferenciasComponent;
