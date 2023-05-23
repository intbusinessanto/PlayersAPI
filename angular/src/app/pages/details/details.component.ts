import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { NbaService } from 'src/app/services/nba.service';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, MatButtonModule, RouterModule],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {


  protected id!: string;

  // Obtener el id de la ruta
  constructor(private acRouter: ActivatedRoute, private nbaServices: NbaService) {
    this.acRouter.params.subscribe(params => {
      this.id = params['id'];
    });
  }

  ngOnInit() {
    this.nbaServices.getDetail(this.id).subscribe((data: any) => {
      console.log(data);
    });
  }


}
