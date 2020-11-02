import Swal from 'sweetalert2';

export class Global {
    showAlert(type, message) {
        Swal.fire({
            icon: type,
            title: 'Prueba Tecnica',
            text: message
        })
    }    

    showAlertDelete(){
        var response = false;
        Swal.fire({
            title: '¿Está seguro de realizar esta acción?',
            text: "No puedes reversar una vez realizada",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: 'Cancelar',
            confirmButtonText: 'Si, borralo'
          }).then((result) => {
            response = result.isConfirmed;
            console.log(result);
        });
       
        return response;
    }
}