import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { TabDirective, TabsetComponent } from 'ngx-bootstrap/tabs';
import { Subscription } from 'rxjs';

import { RoutePath } from 'src/app/core/config';

@Component({
  selector: 'main',
  styleUrls: ['./main.component.css'],
  templateUrl: './main.component.html',
})
export class MainComponent implements AfterViewInit, OnInit, OnDestroy {

  constructor(private router: Router) { }

  private routerEventSubscription?: Subscription;

  @ViewChild('tabs')
  tabs?: TabsetComponent;

  handleTabSelect(tab: TabDirective) {
    if (tab.id) {
      this.router.navigateByUrl(tab.id);
    }
  }

  selectTab(tabId: string) {
    const tab = this.tabs?.tabs.find(({ id }) => id === tabId);

    if (tab) {
      tab.active = true;
    }
  }

  selectTabByUrl(url: string) {
    const [normalizedUrl] = url.match(
      new RegExp(`${RoutePath.appForm}|${RoutePath.appProjets}`),
    ) ?? [];

    if (normalizedUrl) {
      this.selectTab(normalizedUrl);
    }
  }

  ngOnInit(): void {
    this.routerEventSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.queueMicrotask(() => {
          this.selectTabByUrl(event.url);
        });
      }
    });
  }

  ngOnDestroy(): void {
    if (this.routerEventSubscription) {
      this.routerEventSubscription.unsubscribe();
    }
  }

  ngAfterViewInit(): void {
    window.queueMicrotask(() => {
      this.selectTabByUrl(this.router.url);
    });
  }

}
