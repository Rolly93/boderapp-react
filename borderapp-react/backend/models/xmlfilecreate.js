import {create} from 'xmlbuilder2'
import { create } from 'xmlbuilder2';
export class xmlFile{

    constructor() {
        this.referencia = referencia;
        this.evento = evento;
        this.dateTime = dateTime;
        this.scac = scac;
        this.comentarios = comentarios;
        this.tipoOperacion=tipoOperacion;
         this.nowTimeFormat = fulldateTime();
        function CreateFile(){
            const fileXml = create({encoding:'UTF-8'}, '<root><node/></root>');
            console.log(fileXml.end({prettyPrint:true}))

        }

    }
}

//formato dar el nombre al archivo XML con la siguiente estructura en el timepo yymmddThhmmss
function fulldateTime (){

const date = new Date();
const usFormatter = new Intl.DateTimeFormat('en-US',{day:'2-digit' , month:'2-digit',year:"numeric"});
const timeFormatter = new Intl.DateTimeFormat('en-US',{
    hour: '2-digit',
    minute:'2-digit',
    second:'2-digit',
    hour12:false,
    timeZone:'America/Mexico_City'
});
//const formatTime = `${year}-${month}-${day}T${hour}:${minutes}:${seconds}`
//format date mm/dd/yy
var today = usFormatter.format(date).toString().split("/")
//format time HH:MM:SS
const time = timeFormatter.format(date).toString().split(":")
console.log(time)

const formatdate = `${today[2]}${today[0]}${today[1]}T${time[0]}${time[1]}${time[2]}`;

return formatdate;

}
export {fulldateTime};