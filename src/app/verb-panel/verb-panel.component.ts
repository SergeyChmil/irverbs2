import {
  Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef, AfterViewInit, NgZone
} from '@angular/core';
import {Verb} from "../verb";
declare var $: JQueryStatic;

@Component({
  selector: 'app-verb-panel',
  templateUrl: './verb-panel.component.html',
  styleUrls: ['./verb-panel.component.css']
})
export class VerbPanelComponent implements OnInit, AfterViewInit {

  @Input() verb: Verb;
  @Input() isRareEnabled: boolean;
  @Input() language: string;
  @ViewChild('panelBody') el: ElementRef;
  @Output() onRequestedVerbFound = new EventEmitter();
  @Output() onRequestedVerbOpened = new EventEmitter();

  constructor(private _ngZone: NgZone) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.verb.emitter.subscribe(
      data => this.delayedToggle(data),
      error => console.log('Verb search emit error')
    );
  }

  delayedToggle(command:string){
    this._ngZone.runOutsideAngular(() => {
      setTimeout(() => this.toggle(command))
    });
  }

  toggle(command:string){
    try {
      var panelBody: any = <any>$(this.el.nativeElement);
      panelBody.collapse(command);
    }
    catch (e){
      // console.debug('VERB PANEL ERROR ' + e);
    }
  }

}
