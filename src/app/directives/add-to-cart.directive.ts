import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';


@Directive({
  selector: '[appAddToCart]'
})
export class AddToCartDirective {

  constructor(private element:ElementRef,private renderer: Renderer2) { }
  @HostListener('click') onClick(){
    this.renderer.addClass(this.element.nativeElement,'size')
    this.element.nativeElement.classList.add('size');
    setTimeout(()=>{
      this.renderer.addClass(this.element.nativeElement,'move')
    },200);
    setTimeout(()=>{
      this.renderer.removeClass(this.element.nativeElement,'move')
      this.renderer.removeClass(this.element.nativeElement,'size')
    },600);

  }


  private size(){
  }
  private move(){
  }

}
