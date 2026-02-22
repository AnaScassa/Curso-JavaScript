import { Routes } from '@angular/router';
import { Home } from './components/home/home'; // importando a pagina

export const routes: Routes = [
    //aqui é como se fosse o controller ou a URLS do django
    //comando para rodar "npm run start"
    {
        path: "home", // criando uma rota para a página
        component: Home
    }
];
