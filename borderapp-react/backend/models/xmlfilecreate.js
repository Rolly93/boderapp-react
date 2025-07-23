// import 'xmlbuilder2'        
// export class xmlFile{

//     constructor(referencia , evento , dayTime,scac,comentarios , tipoOperacion) {
//         const date = new Date();
//         this.referencia = referencia;
//         this.evento = evento;
//         this.dayTime = dayTime;
//         this.scac = scac;
//         this.comentarios = comentarios;
//         this.tipoOperacion=tipoOperacion;

//         function CreateFile(referencia,evento,dayTime,comentarios,tipoOperacion){

//         }
//     }
// }





fulldateTime()

function fulldateTime (){
    const date = new Date()

const month = date.getMonth();
console.log(month)
const day = date.getDate();
const year = date.getFullYear();
const hour =date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();
const formatTime = `${year}-${month}-${day}T${hour}:${minutes}:${seconds}`

return formatTime;

}
export {fulldateTime};