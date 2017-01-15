import {
  Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef, AfterViewInit,
  Renderer
} from '@angular/core';
import {Verb} from "../verb";
import {version} from "punycode";
declare var $:JQueryStatic;

@Component({
  selector: 'app-verb-panel',
  templateUrl: './verb-panel.component.html',
  styleUrls: ['./verb-panel.component.css']
})
export class VerbPanelComponent implements OnInit, AfterViewInit {

  @Input() verb:Verb;
  @Input() isRareEnabled:boolean;
  @Input() isOldEnabled:boolean;
  @Input() language:string = 'ua';

  constructor(private renderer:Renderer) { }

  @Output() clicked = new EventEmitter();
  @ViewChild('accBody') el: ElementRef;

  ngOnInit() { }

  ngAfterViewInit(){
    // this.el.nativeElement.querySelector('collapse').collapse();
    //this.renderer.invokeElementMethod(this.el.nativeElement, 'collapse', ['show']);
  }

  check(pVerb:string){
    this.clicked.emit(pVerb);
  }

  public showPanel(pSearchData:string){
    console.log('WORKED')
    pSearchData = pSearchData.toLowerCase();
    if(pSearchData === this.verb.form1 || pSearchData === this.verb.form2 || pSearchData === this.verb.form3){
      (<any>$(this.el.nativeElement)).collapse('show');
      console.log(pSearchData)
    }
    //Обёртка в <any> позволяет избежать ошибки, при которой в JQueryStatic не находится метод collapse()
    //

    console.log(this.verb.form1 + ' outside')
  }

}
