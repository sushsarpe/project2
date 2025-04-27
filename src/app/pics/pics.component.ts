import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Item {
  imgName:string;
  imgAlt: string;
}
interface category{
  name: string;
  folders: string[];
  images: Item[];
}

@Component({
  selector: 'app-pics',
  imports: [CommonModule],
  templateUrl: './pics.component.html',
  styleUrl: './pics.component.css'
})
export class PicsComponent implements OnInit{
  ImageCount = new Map<string, number>([
    ['ALL', 149], //149
    ['PRE_WEDD', 210], //210
    ['WEDD', 165], //165
    ['GETREADY', 32], //32
  ]);
 
  selectedCat: category ={
    name:'',
    folders:[],
    images:[],
  }
  
  ngOnInit(){
     this.setCat('ALL');
  }

  setCat(name: string){
     const searchCat=this.categories.find((searchCat)=>searchCat.name===name);
     if(!searchCat){
       console.log("category not found.")
     }
     else{
      this.selectedCat=searchCat;
      this.selectedCat.images=this.getImages(this.selectedCat.folders);
     }
  }

  getImages(folders: string[]): Item[] {
    const imgData: Item[] = [];
    for (let folder of folders) {
      const noOfImages = this.ImageCount.get(folder) || 0; // Get image count from Map
      for (let i = 1; i <= noOfImages; i++) {
        imgData.push({
          imgName: `${folder}/image_${i}.jpg`,
          imgAlt: `Image ${i}_${folder}`,
        });
      }
    }
    return imgData;
  }

  categories = [
    {
      name:'ALL',
      folders:['ALL','PRE_WEDD','WEDD','GETREADY'],
      images:[]
    },
    {
      name:'PRE-WEDDING',
      folders:['PRE_WEDD'],
      images:[]
    },
    {
      name:'WEDDING',
      folders:['WEDD'],
      images:[]
    },
    {
      name:'GET READY',
      folders:['GETREADY'],
      images:[]
    }
  ];

  showCount = false;
  previewImage = false;
  showMask = false;
  currentLightboxImage: Item = this.selectedCat.images[0];
  currentIndex = 0;
  controls = true;

  slideshow = true;
  pause_s = false;
  start_s = false;
  cancel_s = false;

  interval_id: any;

  totalImageCount = 0;

  // ngOnInit(): void {
  //   this.totalImageCount = this.data.length;
  //   console.log(this.totalImageCount);
  // }

  onPreviewImage(index: number): void {
    // this.elem.requestFullscreen();
    this.totalImageCount = this.selectedCat.images.length;
    console.log(this.totalImageCount);
    this.showCount = true;
    this.showMask = true;
    this.previewImage = true;
    this.slideshow = true;
    this.currentIndex = index;
    this.currentLightboxImage = this.selectedCat.images[index];
  }

  // onAnimationEnd(event: AnimationEvent) {
  //   if (event.toState === 'void') {
  //     this.showMask = false;
  //   }
  // }

  onClosePreview() {
    this.showCount = false;
    this.showMask = false;
    this.previewImage = false;
    // document.exitFullscreen();
  }

  prev(): void {
    this.currentIndex = this.currentIndex - 1;
    if (this.currentIndex < 0) {
      this.currentIndex = this.selectedCat.images.length - 1;
    }
    this.currentLightboxImage = this.selectedCat.images[this.currentIndex];
  }

  next(): void {
    this.currentIndex = this.currentIndex + 1;

    if (this.currentIndex > this.selectedCat.images.length - 1) {
      this.currentIndex = 0;
    }
    this.currentLightboxImage = this.selectedCat.images[this.currentIndex];
  }


  @HostListener('window:keydown.ArrowLeft', ['$event'])
  handleKeyLeft(event: KeyboardEvent) {
    this.prev();
  }

  @HostListener('window:keydown.arrowright', ['$event'])
  handleKeyRight(event: KeyboardEvent) {
    this.next();
  }

  burger = true;
  sidenav = false;
  changenav() {
    this.burger = false;
    this.sidenav = true;
  }
  hide() {
    this.burger = true;
    this.sidenav = false;
  }
}
