import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NbaService } from 'src/app/services/nba.service';
import { ActivatedRoute } from '@angular/router';
import { Team } from 'src/app/interfaces/nba.model';

@Component({
  selector: 'app-update',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatInputModule, MatButtonModule, ReactiveFormsModule],
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  id!: any;

  nbaForm = this.fb.group({
    id: [this.id],
    first_name: [''],
    last_name: [''],
    height_feet: [0],
    height_inches: [0],
    position: [''],
    weight_pounds: [0],
    team: this.fb.group({
      id: [''],
      abbreviation: [''],
      city: [''],
      conference: [''],
      division: [''],
      full_name: [''],
      name: ['']
    })
  });

  constructor(private nbaService: NbaService, private fb: NonNullableFormBuilder, private acRouter: ActivatedRoute) {
    this.acRouter.params.subscribe(params => {
      this.id = params['id'];
    });
  }


  ngOnInit(): void {
    this.nbaService.getDetail(this.id).subscribe((data: any) => {
      console.log(data);
      // ESTA LINEA TOMA LOS VALORES DE LA API Y LOS AGREGA AL FORMULARIO
      // SIEMPRE Y CUANDO LOS VALORES COINCIDAN CON LOS NOMBRES DE LOS CAMPOS DEL FORMULARIO
      this.nbaForm.patchValue(data);
      this.hasTeam(data.team);
    });
  }


  update() {
    this.nbaService.updatePlayer(this.id, this.nbaForm.getRawValue()).subscribe((data: any) => {
      console.log(data);
    });
  }


  hasTeam(team: Team | number | null) {
    if (team === null || team === undefined || typeof team === 'number') {
      return
    }
    else {
      this.nbaForm.patchValue({team});
    }

  }
}
