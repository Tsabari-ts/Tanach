import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'web';

  // private deferredPrompt: any;
  constructor(){
    // window.addEventListener('beforeinstallprompt', (e) => {
    //   e.preventDefault();
    //   this.deferredPrompt = e;
    // });
   }

//      installApp(){
//     if (this.deferredPrompt) {
//       this.deferredPrompt.prompt();
//       this.deferredPrompt.userChoice.then((choiceResult: { outcome: string; }) => {
//         if (choiceResult.outcome === 'accepted') {
//           console.log('User accepted the A2HS prompt');
//         } else {
//           console.log('User dismissed the A2HS prompt');
//         }
//         this.deferredPrompt = null;
//       });
//   }
// }
}

