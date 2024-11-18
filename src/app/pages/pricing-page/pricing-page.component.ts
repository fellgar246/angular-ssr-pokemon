import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'page-pricing',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './pricing-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PricingPageComponent implements OnInit {

  private title = inject(Title);
  private meta = inject(Meta);
  private platform = inject(PLATFORM_ID);

  ngOnInit(): void {
    // if(!isPlatformServer(this.platform)){
    //   document.title = 'Pricing Page';
    // }
    this.title.setTitle('Pricing Page');
    this.meta.updateTag({ name: 'description', content: 'Esta es mi Pricing Page' });
    this.meta.updateTag({ name: 'og:title', content: 'Pricing Page' });
  }
}
