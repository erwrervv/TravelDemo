import { Component , Input} from '@angular/core';

@Component({
  selector: 'app-shopbanner1',
  templateUrl: './shopbanner1.component.html',
  styleUrls: ['./shopbanner1.component.css']
})
export class Shopbanner1Component {
  @Input() bannerTitle: string = '';
}
