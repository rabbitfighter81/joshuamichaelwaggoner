import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  template: 'NO UI TO BE FOUND HERE!',
})
export class ProjectBaseComponent implements OnInit {
  // we need to keep our injected modules public rather than private.
  // In TypeScript, super() is how the constructor of the base component
  // is called and requires all the injected modules to be passed.
  // When modules are private, they become separate declarations.
  // Keep them public and pass them using super, and they remain a
  // single declaration.
  constructor(public snackbar: MatSnackBar) {}

  ngOnInit() {}

  share(project: string): void {
    this.openComingSoonSnackbar(`Share ${project} `);
  }

  openComingSoonSnackbar(feature: string): void {
    /*
    this.snackbar.openFromComponent(Snackbar, {
      duration: 5000,
      data: { feature },
      // panelClass: ['app-snackbar']
    });
    */
    console.log(`${feature} coming soon...`);
  }

  navToGitHubProject(link: string): void {
    // window.open(link, '_blank');
    this.openComingSoonSnackbar(`GitHub Link `);
  }
}
