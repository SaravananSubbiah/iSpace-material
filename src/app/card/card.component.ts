import { Component, OnInit, Input } from '@angular/core';
import { IspaceDataService } from './../shared/services/ispace-data.service';
import { Bullet } from './../shared/interfaces/school';

@Component({
  selector: 'ispace-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() 
  cardInput: string;
  bullet: Bullet;
  bulletHead: string;
  bulletImage: string;
  bulletPoints: string[];
  bulletColor: string;
  constructor(private _appService: IspaceDataService) { }

  ngOnInit() {
    this._appService.getBullets().subscribe(data=>      
      {
        switch (this.cardInput) {
          case 'features':
            this.bullet = data[0];
            break;
          case 'highlights':
            this.bullet = data[1];
            break;
          case 'rules':
            this.bullet = data[2];
            break;
        }
        console.log(this.cardInput);    
        this.bulletHead = this.bullet.bulletHead;
        // this.bulletImage = this.bullet.bulletImage;
        console.log(this.bullet);
        this.bulletPoints = this.bullet.bulletPoints;
        this.bulletColor = this.bullet.bulletColor;
        
        
      });
  }

}
