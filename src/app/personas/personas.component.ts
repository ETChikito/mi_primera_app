import {Component} from "@angular/core";

@Component({
    selector: "app-personas",
    templateUrl: "./personas.component.html",
    styleUrls: ["./personas.component.css"]
})
export class PersonasComponent{
    deshabilitado: boolean = false;
    mensaje: string = "";
    titulo:string = "Ingeniero";
    mostrar:boolean = false;

    agregarPersona(){
        this.mostrar = true;
        this.mensaje = "Persona agregada";
    }

    // modificarTitulo(event: Event){
    //     this.titulo = (<HTMLInputElement>event.target).value;
    // }
}
