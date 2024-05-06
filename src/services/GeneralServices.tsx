import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
// import moment from 'moment';
import Swal from "sweetalert2";
import { Toast } from "./CatalogoServices";

export const optionsDate: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "short",
  day: "numeric",
  hour: "2-digit",
  minute: "2-digit",
};

interface APIEndpoint {
  get: () => Promise<AxiosResponse<any>>;
  // Otras definiciones de métodos aquí...
}

export const ENDPOINTS: Record<string, string> = {
    //ALTAS BIENES MUEBLES
    busca_Vehiculos: '/vehiculos/buscadorMuebles',
    ConfirmaFactura : "/gastocorriente/confirmaFactura",
    ConfirmaFacturaMultiple : "/gastocorriente/confirma-factura-multiple",
    AsignaEnlaceMultiple: "/gastocorriente/asigna-muebles-enlace",
    descargarfactura : "/gastocorriente/descargarfactura?IdAltaMueble=",
    asignar_enlace : "/gastocorriente/asignaenlace",
    cargafactura : "/gastocorriente/cargafactura/",
    descartarfactura : "/gastocorriente/descartarfactura/",
    DetalleAltas: "/gastocorriente/detalle/",
    CargaFotosMultiples: "/gastocorriente/carga-fotos/",
    CambiarEstatusAltaBM: "/gastocorriente/",
    DetalleEditarAltasBM: "/gastocorriente/detalle/",
    GuardaEditarAltasBM:  "/gastocorriente/actualiza/",
    ReemplazaFotosMultiples: "/gastocorriente/reemplaza-fotos/",
    GuardaFacturaMultipls: "/gastocorriente/cargafactura-por-numero/",
    //CATALOGOS DE BAJAS
    obtienetipobajas : "/catalogos/obtienetipobajas",
    guardatipobaja : "/catalogos/guardatipobaja",
    actualizatipobaja : "/catalogos/actualizatipobaja/",
    eliminatipobaja : "/catalogos/eliminatipobaja/",
    cambiaestatustipobaja : "/catalogos/cambiaestatustipobaja",
    //CATALOGOS DE ESTATUS
    obtienestatusbajas : "/catalogos/obtienestatusbajas",
    guardaestatusbaja : "/catalogos/guardaestatusbaja",
    actualizaestatusbaja : "/catalogos/actualizaestatusbaja/",
    eliminaestatusbaja : "/catalogos/eliminaestatusbaja/",
    cambiastatusbaja : "/catalogos/cambiastatusbaja",
    // OBTENER ALTAS MUEBLES Y RESGUARDOS
    obtieneResguardoBajas : "/solicitudes-bajas/obtienemueble/",
    obtieneResguardos: "/asignacionresguardo/listadomueblespararesguardo",
    guardaResguardoMultiples : "/asignacionresguardo/guardaresguardo",
    //SOLICITUDES DE BAJA
    solicitudes_bajas : "/solicitudes-bajas/guarda",
    guardaMultiples: "/solicitudes-bajas/guarda-multiple",
    guardaActualizaMultiples: "/solicitudes-bajas/actualiza/",
    //BAJAS
    busca_ListadoBajas: "/solicitudes-bajas/obtienemueble/",
    listado_bajas : "/solicitudes-bajas/lista",
    DescargaFDRP007: "/generar-documentos/acta-FRDP007/",
    DescargaFDRP019: "/generar-documentos/baja-FRDP019/",
    CargarFacturaFDRP007 : "/solicitudes-bajas/carga-documento",
    DetalleSolicitud: "/solicitudes-bajas/muestra/",
    Detalle_Multiples: "/solicitudes-bajas/detalle/",
    CambiarEstatus: "/solicitudes-bajas/",
    TrazabilidadBajas: "/solicitudes-bajas/trazabilidad/",
    obtieneestatustransferencias: "/muebles/obtieneestatustransferencias",
    guardaestatustransferencias: "/muebles/guardaestatustransferencias",
    actualizaestatustransferencias: "/muebles/actualizaestatustransferencias/",
    eliminaestatustransferencias: "/muebles/eliminaestatustransferencias/",
    TrazabilidadBaja: "/solicitudes-bajas/trazabilidad-baja/",
    // Trasnferencias:
    listado_transferencias: "/transferencias/listav2",
    listado_ts: "/listav3",
    GuardaTransferencia: "/transferencias/detalle-guarda/",
    GuardarTransferencia: "/transferencias/guarda",
    DescargaFDRP002: "/transferencias/obtiene-FRDP002/",
    DescargaFRDP002V: "/generar-documentos/FRDP002-transferencia/",
    DescargaFDRP003: "/generar-documentos/alta-pdf-FRDP003",
    DescargaFDRP004: "/generar-documentos/alta-pdf-FRDP004",
    DescargaFDRP005: "/generar-documentos/alta-pdf-FRDP005",
    DetalleTransferencia: "/transferencias/muestra/",
    obtienestatustransferencia : "/muebles/obtieneestatustransferencias",
    CargarFacturaTransferencia : "/transferencias/carga-documento",
    CambiarEstatusTransferencia: "/transferencias/",
    GuardaTransferenciaMultiple: "/transferencias/guarda-multiple",
    ActualizaTransferenciaMultiple: "/transferencias/actualiza/",
    Detalle_MultiplesTransferencia: "/transferencias/detalle/",
    //TRANSFERENCIAS RESGUARDO
    Listado_transferencia: "/transferencias/lista-resguardos",

    //PAUA SERVICE
    ObtenerSecretarias : "/api/depencias-by-entidad/",
    usuarios_x_permisos : "/api/detalle-usuarios-permisos",
    usuarios_x_roles : "/api/lista-usuarios-roles",
    usuarios_x_app : "/api/users-app",
    dependencias_paua: "/api/detalle-usuario-entidades/",
    //NOTIFICACIONES
    NotificacionLista: "/notificaciones/lista",
    NoticacionLeida: "/notificaciones/marcar-leida/",
    //EMPLEADOS
    obtieneEmpleados: "/catalogos/obtieneempleados",
    //RESGUARDOS:
    DetalleResguardo: "/asignacionresguardo/detalle/",
    //GENERICAS
    ConsultaDetalleTransferencia: "/transferencias/muebles-para-transferencias",


    //
    GuardaVehiculos: "/vehiculos/guarda",

    

  }
 // Registrar los ambientes que se van a utilizar para los endpoints dependiendo a donde van apuntar
export const AMBIENTES: Record<string, string> = {
    PABMI: process.env.REACT_APP_APPLICATION_ENDPOINT!,
    PAUA: process.env.REACT_APP_APPLICATION_LOGIN_BACK!,
    APP: process.env.REACT_APP_REDIRECT!,
  }
  
  
  interface APIEndpoint {
    get: () => Promise<AxiosResponse<any>>;
    getByArchivo: (id: number | string) => Promise<AxiosResponse<any>>;
    getById: (id: number | string) => Promise<AxiosResponse<any>>;
    postById: (formData:any,uuid: number | string) => Promise<AxiosResponse<any>>;
    postByIdArchivos: (formData:any,uuid: number | string) => Promise<AxiosResponse<any>>;
    postByArchivos: (newRecord: any) => Promise<AxiosResponse<any>>;
    getByFactura: (id: number | string) => Promise<AxiosResponse<any>>;
    post: (newRecord: any) => Promise<AxiosResponse<any>>;
    post_get: (newRecord: any) => Promise<AxiosResponse<any>>;
    get_post: (newRecord: any) => Promise<AxiosResponse<any>>;
    put: (id: number | string, updatedRecord: any) => Promise<AxiosResponse<any>>;
    putByData: (updatedRecord: any) => Promise<AxiosResponse<any>>;
    delete: (id: number | string) => Promise<AxiosResponse<any>>;
    patchById: (id: number | string) => Promise<AxiosResponse<any>>;
    patch: (id: number | string, estatus : number) => Promise<AxiosResponse<any>>;
    patchByData: (id: number | string, estatus : number, newRecord: any) => Promise<AxiosResponse<any>>;
  }
  
  
  export const createAPIEndpoint = (endpoint: string, ambiente: string): APIEndpoint => {

    const url: string = ambiente + endpoint;
  
    const axiosConfig: AxiosRequestConfig = {
      headers: {
        'Content-Type': 'application/json', // Opcional: ajusta esto según el tipo de contenido que necesites
        Authorization: localStorage.getItem("jwtToken") || "", // Agregar el token JWT
      },
    };

    const axiosConfigArchivos: AxiosRequestConfig = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: localStorage.getItem("jwtToken") || "",
      },
      responseType: "arraybuffer",
    };
  
    return {
        get: async () => await axios.get(url, axiosConfig),
        getById: async (id: number | string) => await axios.get(`${url}${id}`, axiosConfig),
        getByArchivo: async (id: number | string) => await axios.get(`${url}${id}`, axiosConfigArchivos),
        postByIdArchivos: (formData : any,uuid: number | string) => axios.post(`${url}${uuid}`,formData, axiosConfigArchivos),
        postByArchivos: async (newRecord : any) => await axios.post(url, newRecord, axiosConfigArchivos),
        postById: (formData : any,uuid: number | string) => axios.post(`${url}${uuid}`,formData, axiosConfig),
        getByFactura: async (id: number | string) =>
          await axios.get(`${url}${id}&jwt=${localStorage.getItem('jwtToken')}`, { responseType: 'blob' }),
        post: async (newRecord: any) => await axios.post(url, newRecord, axiosConfig),
        post_get: async (newRecord: any) => await axios.get(url,{
          headers: {
            'Content-Type': 'application/json', // Opcional: ajusta esto según el tipo de contenido que necesites
            Authorization: localStorage.getItem("jwtToken") || "", // Agregar el token JWT
          },
          params: newRecord
        }),
        get_post: async (newRecord: any) => await axios.get(`${url}${"?IdApp=" + localStorage.getItem("IdApp") }`,axiosConfig),
        put: async (id: number | string, updatedRecord: any) =>
          await axios.put(`${url}${id}`, updatedRecord, axiosConfig),
        putByData: async (updatedRecord: any) =>
        await axios.put(`${url}`, updatedRecord, axiosConfig),
        delete: async (id: number | string) => await axios.delete(`${url}${id}`, axiosConfig),
        patchById: async (id: number | string) => await axios.patch(`${url}${id}`, null, axiosConfig),
        patch: async (id: number | string, estatus: number) => await axios.patch(`${url}${id}${"/cambiar-estatus/"}${estatus + 1}`, null, axiosConfig),
        patchByData: async (id: number | string, estatus: number,newRecord: any) => await axios.patch(`${url}${id}${"/cambiar-estatus/"}${estatus + 1}`, newRecord, axiosConfig),
      };
  };
  //#endregion
export const headers : any = {
  'Content-Type': 'multipart/form-data',
  'Authorization'	: localStorage.getItem('jwtToken') || '',
}

  //#region ##CARGA DE ARCHIVOS
// Agrega esta función a tu archivo de servicios generales
export const uploadFile = async (endpoint : string, uuid : string | number, formData : any) => {
  try {
    const response = await axios.post(
      process.env.REACT_APP_APPLICATION_ENDPOINT + endpoint + uuid,
      formData,
      { headers: {
        'Content-Type': 'multipart/form-data', // Opcional: ajusta esto según el tipo de contenido que necesites
        Authorization: localStorage.getItem("jwtToken") || "", // Agregar el token JWT
      },},
    

    );
    Toast.fire('¡Archivo cargado exitosamente!');
    return response;
  } catch (error) {
    Toast.fire({
      icon  : "error",
      title : "Error",
    });
    throw error;
  }
};

export const uploadFileSinUUID = async (endpoint : string, formData : any) => {
  try {
    const response = await axios.post(
      process.env.REACT_APP_APPLICATION_ENDPOINT + endpoint,
      formData,
      {headers: {
        'Content-Type': 'multipart/form-data', // Opcional: ajusta esto según el tipo de contenido que necesites
        Authorization: localStorage.getItem("jwtToken") || "", // Agregar el token JWT
      },},
    

    );
    Toast.fire('¡Archivo cargado exitosamente!');
    return response;
  } catch (error) {
    Toast.fire({
      icon  : "error",
      title : "Error",
    });
    throw error;
  }
};

export const getAllArea = async (searchTermAreaInput: string): Promise<void> => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_APPLICATION_ENDPOINT}/catalogos/obtienearea`,
      {
        perpage: 10,
        search: searchTermAreaInput,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: localStorage.getItem('jwtToken') || '',
        },
      }
    );

    const rowsArea = response.data.data;
    return rowsArea; // You may return the data if needed
  } catch (error: any) {
    Swal.fire({
      icon: 'error',
      title: '¡Error!',
      text: `${error}`,
      confirmButtonColor: 'black',
    });

    // Throw the error to let the caller handle it or return an empty array as a fallback
    throw error;
  }
};

export const getAllPAPVEH_Marcas = async (searchTermAreaInput: string): Promise<void> => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_APPLICATION_ENDPOINT}/catalogos/PPV_obtienemarcas`,
      {
        perpage: 10,
        search: searchTermAreaInput,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: localStorage.getItem('jwtToken') || '',
        },
      }
    );

    const rowsArea = response.data.data;
    return rowsArea; // You may return the data if needed
  } catch (error: any) {
    Swal.fire({
      icon: 'error',
      title: '¡Error!',
      text: `${error}`,
      confirmButtonColor: 'black',
    });

    // Throw the error to let the caller handle it or return an empty array as a fallback
    throw error;
  }
};

export const getAllPAPVEH_Modelos = async (searchTermAreaInput: string): Promise<void> => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_APPLICATION_ENDPOINT}/catalogos/PPV_obtienemodelos`,
      {
        perpage: 10,
        search: searchTermAreaInput,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: localStorage.getItem('jwtToken') || '',
        },
      }
    );

    const rowsArea = response.data.data;
    return rowsArea; // You may return the data if needed
  } catch (error: any) {
    Swal.fire({
      icon: 'error',
      title: '¡Error!',
      text: `${error}`,
      confirmButtonColor: 'black',
    });

    // Throw the error to let the caller handle it or return an empty array as a fallback
    throw error;
  }
};

export const getAllPAPVEH_Tipo = async (searchTermAreaInput: string): Promise<void> => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_APPLICATION_ENDPOINT}/catalogos/PPV_obtienetipos`,
      {
        perpage: 10,
        search: searchTermAreaInput,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: localStorage.getItem('jwtToken') || '',
        },
      }
    );

    const rowsArea = response.data.data;
    return rowsArea; // You may return the data if needed
  } catch (error: any) {
    Swal.fire({
      icon: 'error',
      title: '¡Error!',
      text: `${error}`,
      confirmButtonColor: 'black',
    });

    // Throw the error to let the caller handle it or return an empty array as a fallback
    throw error;
  }
};

export const getAllPAPVEH_Color = async (searchTermAreaInput: string): Promise<void> => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_APPLICATION_ENDPOINT}/catalogos/PPV_obtienecolor`,
      {
        perpage: 10,
        search: searchTermAreaInput,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: localStorage.getItem('jwtToken') || '',
        },
      }
    );

    const rowsArea = response.data.data;
    return rowsArea; // You may return the data if needed
  } catch (error: any) {
    Swal.fire({
      icon: 'error',
      title: '¡Error!',
      text: `${error}`,
      confirmButtonColor: 'black',
    });

    // Throw the error to let the caller handle it or return an empty array as a fallback
    throw error;
  }
};

export const getAllTipoBien = async (searchTermTipoBienInput: string): Promise<void> => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_APPLICATION_ENDPOINT}/catalogos/obtienetiposbien`,
      {
        perpage: 10,
        search: searchTermTipoBienInput,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: localStorage.getItem('jwtToken') || '',
        },
      }
    );

    const rowsTipoBien = response.data.data;
    return rowsTipoBien;
    //setRowsTipoBien(rowsTipoBien); // Assuming setRowsTipoBien is a state-setting function

  } catch (error: any) {
    Swal.fire({
      icon: 'error',
      title: '¡Error!',
      text: `${error}`,
      confirmButtonColor: 'black',
    });

    // Throw the error to let the caller handle it or return an empty array as a fallback
    throw error;
  }
};

export const getAllTipoActivoFijo = async (searchTermInput: string): Promise<void> => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_APPLICATION_ENDPOINT}/catalogos/obtienetipoactivofijo`,
      {
        perpage: 10,
        search: searchTermInput,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: localStorage.getItem('jwtToken') || '',
        },
      }
    );
    const TipoActivoFij = response.data.data;
    return TipoActivoFij;
  } catch (error: any) {
    Swal.fire({
      icon: 'error',
      title: '¡Error!',
      text: `${error}`,
      confirmButtonColor: 'black',
    });

    // Throw the error to let the caller handle it or return an empty array as a fallback
    throw error;
  }
};

export const showInfoMessage = (text: string) => {
  Swal.fire({
    icon: "info",
    title: "Mensaje",
    text,
    confirmButtonColor: "black",
    customClass: {
    confirmButton: "black-button_modal",
    cancelButton: "black-button_modal",
    closeButton: "black-button_modal",
    },
  });
  };



export function formatUpdatedAtDate(dateString: string): string {
  if(dateString === "")
  {
    return "";
  }
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", optionsDate);
}


  //#endregion

export const getAllDependencias = async () => {

  const endpoint = ENDPOINTS.dependencias_paua; 
  const ambiente = AMBIENTES.PAUA; 
  const data = {
    "IdUsuario": localStorage.getItem("IdUsuario"),
    "IdApp": localStorage.getItem("IdApp")
  };
  const response = await createAPIEndpoint(endpoint,ambiente).post(data);

  if(response){
    if (response.data.data && response.data.data.length > 0) {
      return response.data.data[0];
    } else {
      Swal.fire({
        icon: "error",
        title: "Error Dependencia.",
        text: "( 409 ) Sin datos",
      });
    }
  }
      
    
  };


export const getAllResponsables = async () => {
  try {
    const endpoint = ENDPOINTS.obtieneEmpleados;
    const ambiente = AMBIENTES.PABMI;

    const response = await createAPIEndpoint(endpoint, ambiente).get();
    
    return response.data; // Debes retornar la data obtenida

  } catch (error) {
    Toast.fire({
      icon: "error",
      title: "Error",
    });
    throw error;
  }
}

export const getAllTiposTransferencias = () => {
  axios({
    method: "get",
    url: process.env.REACT_APP_APPLICATION_ENDPOINT + "/catalogos/obtienetipostransferencias",
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("jwtToken") || "",
    },
  })
    .then(({ data } : {data : any}) => {
      return data;
    })
    .catch(function (error : any) {
      Swal.fire({
        icon: "error",
        title: "Seleccione un tipo de transferencia.",
        text: "(" + error.response.status + ") " + error.response.data.message,
      });
    });
};
  

  export const SaveFile = async (Data: any, Url: string) => {

    var formData = new FormData();
    Object.keys(Data).forEach((fieldName) => {
      formData.append(fieldName, Data[fieldName]);
    });
    await axios({
      method  : "post",
      url     : process.env.REACT_APP_APPLICATION_ENDPOINT + Url,
      headers : {
                  "Content-Type": "multipart/form-data",
                  Authorization: localStorage.getItem("jwtToken") || "",
      },
      data    : formData,
    })
    .then(function (response) {
      Toast.fire({
        icon  : "success",
        title : "¡Registro creado con éxito!",
      });
      return true
    })
    .catch(function (error) {
      Swal.fire({
        icon  : "error",
        title : "¡Error!",
        text  : "(" + error.response.status + ") " + error.response.data.message,
        confirmButtonColor: "#15212f", 
      });
      return false
    });
    return true
  };
  
  
  export const catalogoSave = async (Data: any, Url: string) => {
    await axios({
      method  : "post",
      url     : process.env.REACT_APP_APPLICATION_ENDPOINT + Url,
      headers : {
                  "Content-Type": "application/json",
                  Authorization: localStorage.getItem("jwtToken") || "",
      },
      data    : Data,
    })
    .then(function (response) {
      Toast.fire({
        icon  : "success",
        title : "¡Registro creado con éxito!",
      });
      return true
    })
    .catch(function (error) {
      Swal.fire({
        icon  : "error",
        title : "¡Error!",
        text  : "(" + error.response.status + ") " + error.response.data.message,
        confirmButtonColor: "#15212f", 
      });
      return false
    });
  };
  export const catalogoUpdate = async (Data: any, Url: string) => {
    await axios({
      method  : "post",
      url     : process.env.REACT_APP_APPLICATION_ENDPOINT + Url,
      headers : {
                  "Content-Type": "application/json",
                  Authorization: localStorage.getItem("jwtToken") || "",
      },
      data    : Data,
    })
    .then(function (response) {
      Toast.fire({
        icon  : "success",
        title : "¡Registro actualizado con éxito!",
  
      });
      return true
    })
    .catch(function (error) {
      Swal.fire({
        icon  : "error",
        title : "¡Error!",
        text  : "(" + error.response.status + ") " + error.response.data.message,
        confirmButtonColor: "#15212f", 
      });
      return false
    });
  };
  export const catalogoDelete = async (Data: any, Url: string, Descripcion: string) => {
    await Swal.fire({
      title               : "¿Estas Seguro(a)",
      text                : `de eliminar este registro? (${Descripcion})`,
      // text                : `Estas a punto de eliminar un registro (${Descripcion})`,
      icon                : "question",
      showCancelButton    : true,
      confirmButtonText   : "Eliminar",
      confirmButtonColor  : "#15212f",
      cancelButtonColor   : "#bda889",
      cancelButtonText    : "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const data = { uuid: Data };
        await axios({
          method  : "post",
          url     : process.env.REACT_APP_APPLICATION_ENDPOINT + Url,
          headers : {
                      "Content-Type": "application/json",
                      Authorization: localStorage.getItem("jwtToken") || "",
          },
          data    : data,
        })
        .then(function (response) {
          Toast.fire({
            icon  : "success",
            title : "¡Registro eliminado con éxito!",
          });
          return true
        })
        .catch(function (error) {
          Swal.fire({
            icon  : "error",
            title : "¡Error!",
            text  : "(" + error.response.status + ") " + error.response.data.message,
            confirmButtonColor: "#15212f", 
          });
          return false
        });
      }
    });
  };



 
