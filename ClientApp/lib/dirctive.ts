//
/////////////////////////
// ** Example Directive
// Notice we don't touch the Element directly

// @Directive({
//   selector: '[x-large]'
// })
// export class XLarge {
//   constructor(element: ElementRef, renderer: Renderer) {
//     // ** IMPORTANT **
//     // we must interact with the dom through -Renderer-
//     // for webworker/server to see the changes
//     renderer.setElementStyle(element.nativeElement, 'fontSize', 'x-large');
//     // ^^
//   }
// }