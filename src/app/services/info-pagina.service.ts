import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {
  info: InfoPagina = {};
  equipo: any[] = [];
  cargada = false
  constructor(private http: HttpClient) {
   this.cargarInfo();
   this.cargarEquipo();
  }
  private cargarInfo() {
     //Leer el archivo Json
     this.http.get('assets/data/data-pagina.json')
     .subscribe( (resp: InfoPagina) => {
       this.cargada = true;
       this.info = resp;
      //  console.log(this.info);
     })
  }

  private cargarEquipo() {
    this.http.get('https://angular-html-91661-default-rtdb.firebaseio.com/equipo.json')
      .subscribe((resp:any) => {
        this.equipo = resp
        // console.log(this.equipo);
      })
  }
}
