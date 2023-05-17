import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { Capacitor } from '@capacitor/core'
import { DocumentScanner } from 'capacitor-document-scanner'
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent],
})
export class Tab1Page {
  constructor() {
    scanDocument();
  }

}

const scanDocument = async () => {
  // start the document scanner
  const { scannedImages } = await DocumentScanner.scanDocument()

  // get back an array with scanned image file paths
  if (scannedImages && scannedImages.length > 0) {
    // set the img src, so we can view the first scanned image
    const scannedImage = document.getElementById('scannedImage') as HTMLImageElement
    scannedImage.src = Capacitor.convertFileSrc(scannedImages[0])
  }
}
