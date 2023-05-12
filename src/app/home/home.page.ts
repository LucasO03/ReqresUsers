import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { User } from '../models/User.model';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterLink],
})
export class HomePage implements OnInit {

  listaUsers: User[] = []

  constructor(private usersService: UsersService, private router: Router) {
    this.buscarUsers();
  }

  ngOnInit(): void { }

  ionViewWillEnter() {
    this.buscarUsers();
  }

  buscarUsers() {
    this.usersService.getAll().subscribe(dados => {
      this.listaUsers = dados;
    });
  }

  alterarUsuario(id: number){
    this.router.navigateByUrl(`/api/users/${id}`)
  }

  excluirUsuario(id: number){
  }
}
