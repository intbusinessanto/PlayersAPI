import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbaService } from 'src/app/services/nba.service';
import { Nba, Team } from 'src/app/interfaces/nba.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{

  listNbaPlayers : Nba[]= [];

  constructor(private nbaService: NbaService) { }


  ngOnInit(): void {
    this.nbaService.getPlayers().subscribe((data )=>{
      this.listNbaPlayers = data;
    })
  }

  getPlayerTeamName(team: Team | number | null): string {

  if (team === null) {
    return ''
  }
  if (typeof team === 'number') {
    // El valor es un número, puedes manejar este caso según tus necesidades
    // convert to string
    return team.toString();
  } else {
    // El valor es del tipo 'Team', puedes acceder a la propiedad 'name'
    return team.name;
  }
}

}
