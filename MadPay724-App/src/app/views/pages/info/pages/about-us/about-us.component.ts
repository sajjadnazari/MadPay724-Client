import { Component, OnDestroy } from '@angular/core';
import { StyleScriptService } from 'src/app/core/_services/common/styleScript.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnDestroy {
  constructor(private styleService: StyleScriptService) {
    const aboutusUrl = '../../../../../../assets/wp-content/themes/munza/assets/css/pages/aboutus.css';
    this.styleService.addStyle("aboutus", aboutusUrl);
  }

  ngOnDestroy() {
    this.styleService.removeStyle("aboutus");
  }
}
