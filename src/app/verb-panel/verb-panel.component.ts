import {
  Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef, AfterViewInit, NgZone
} from '@angular/core';
import {Verb} from "../verb";
import {Subject} from "rxjs";
import {VerbService} from "../verb.service";
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
  // @Input() clickedVerb: string;
  // @Input() rawSearchSubject: Subject<any>;
  // @Input() preciseSearchSubject: Subject<any>;
  @ViewChild('panelBody') el: ElementRef;
  @Output() onRequestedVerbFound = new EventEmitter();
  @Output() onRequestedVerbOpened = new EventEmitter();

  isPanelOpen: boolean = false;


  constructor(private _ngZone: NgZone) {

    // this.verbService.searchVerbInputed.subscribe(pVerb => {
    //   this.onSearch(pVerb);
    //   console.log('panel said: ' + pVerb + ' and ' + this.verb.form1);
    // })
  }

  onSearch(pVerb){
    // console.log(pVerb + '   wewewewe' )
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.verb.emitter.subscribe(
      data => this.delayedToggle(data),
      error => console.log('Verb search emit error')
    );
    // this.rawSearchSubject.subscribe(event => {
    //     this.filterRequest(event);
    //   }
    // );
    // this.preciseSearchSubject.subscribe(event => {
    //   this.togglePanelDelayed(event);
    // });
    //
    /****
     * Подписка на события shown.bs.collapse и hidden.bs.collapse, которые выстреливают при разворачивании - сворачивании
     * этой панели. Позволяет отслеживать текущее состояние панели
     */
    // $(this.el.nativeElement).on('shown.bs.collapse', (event) => {
    //   // this.togglePanel(this.clickedVerb, true);
    //   // this.verb.react();
    //   this.verb.modifyState(true);
    // });
    // //
    // $(this.el.nativeElement).on('hidden.bs.collapse', (event) => {
    //   // this.togglePanel(this.clickedVerb, true);
    //   // this.verb.emitter.emit('hidden');
    //   this.verb.modifyState(false);
    // });

  }

  delayedToggle(command:string){
    this._ngZone.runOutsideAngular(() => {
      setTimeout(() => this.toggle(command))
    });
  }

  toggle(command:string){
    console.log(command);
    try {
      var panelBody: any = <any>$(this.el.nativeElement);
      panelBody.collapse(command);
    }
    catch (e){
      console.debug('VERB PANEL ERROR ' + e);
    }
  }

  /****
   * Проверка корректности запроса поиска
   * @param pRawData
   */
  filterRequest(pRawData: string):void {
    // if (pRawData === this.verb.form1 || pRawData === this.verb.form2 || pRawData === this.verb.form3) {
    //   this.onRequestedVerbFound.emit(this.verb.form1);
    // }else{
    //   this.onRequestedVerbFound.emit('wrong_request');
    // }
  }

  /*****
   * вызываю с задержкой, чтобы angular поставил выполнение основной функции togglePanel в очередь
   * иначе функция обращается к шаблону до того, как тот отрендерит родительский элемент и произойдет ошибка
   * @param pVerb
   */
  togglePanelDelayed(pVerb: string) {
    // this._ngZone.runOutsideAngular(() => {
    //   setTimeout(() => this.togglePanel(pVerb))
    // });
  }

  /***
   * Решает, скрывать или показывать тело панели
   * @param pVerb ключ
   * @param isClicked показывает при значении true, что запрос пришёл по клику
   */
  togglePanel(pVerb: string, isClicked:boolean = false) {
    // try {
    //   var panelBody: any = <any>$(this.el.nativeElement);
    //
    //   if(pVerb === this.verb.form1 || pVerb === this.verb.form2 || pVerb === this.verb.form3 ){
    //     if (!this.isPanelOpen){
    //       panelBody.collapse("show");
    //       this.isPanelOpen = true;
    //     }
    //     if(!isClicked) this.onRequestedVerbOpened.emit(pVerb);
    //   }else{
    //     if (this.isPanelOpen){
    //       panelBody.collapse("hide");
    //       this.isPanelOpen = false;
    //     }
    //   }
    // }
    // catch (e){
    //   console.log();
    // }
  }


}
