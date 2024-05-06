import axios from "axios";
// import moment from 'moment';
import Swal from "sweetalert2";

export const Toast = Swal.mixin({
  toast: true,
  position: "center",
  showConfirmButton: false,
  timer: 2000,
  timerProgressBar: false,
  // background: '#2e7d32',
  iconColor: '#af8c55',
  color: '#af8c55',  
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});


export const SaveFile2 = async (Data: any, Url: string):Promise<Boolean> => {

  /*var formData = new FormData();
  Object.keys(Data).forEach((fieldName) => {
    formData.append(fieldName, Data[fieldName]);
  });*/
  var data = await axios({
    method  : "post",
    url     : process.env.REACT_APP_APPLICATION_ENDPOINT + Url,
    headers : {
                "Content-Type": "multipart/form-data",
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
  return data
};


export const SaveFile = async (Data: any, Url: string):Promise<Boolean> => {

  var formData = new FormData();
  Object.keys(Data).forEach((fieldName) => {
    formData.append(fieldName, Data[fieldName]);
  });
  var data = await axios({
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
  return data
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




