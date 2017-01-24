import {Component, OnInit, AfterViewInit, ViewChild, ElementRef} from '@angular/core';
import {VerbService} from "./verb.service";
import {Verb} from "./verb";
import {Subject} from "rxjs";
import {forEach} from "@angular/router/src/utils/collection";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {

  @ViewChild('verbsList') el: ElementRef;

  private isRareEnabled: boolean = true;
  private language: string = 'ru';

  verbs: Verb[];
  clickedVerb:string;
  rawSearchSubject: Subject<any> = new Subject();
  preciseSearchSubject: Subject<any> = new Subject();

  constructor(private verbService: VerbService) {
  }

  ngOnInit() {
    this.getAllVerbs();
  }

  ngAfterViewInit() { }

  getAllVerbs() {
    this.verbService.getVerbAPI()
      .subscribe(
        data => this.verbs = data,
        error => console.log('Server error')
      );
  }

  onRequestFound(pString: string) {
    if (!this.isRareEnabled) this.switchIsRareEnabled();
    this.preciseSearchSubject.next(pString);
    // console.log(pString + ' found')
  }

  /******
   * Send raw data to every panel for checking
   */

  onSearch(pVerb: string) {
    pVerb = pVerb.toLowerCase();
    if (pVerb === 'was' || pVerb == 'were') {
      pVerb = 'be';
    }

    // for(var key in this.verbs){
    //   //   // console.log(key + '   wweweewewewewe')
    //   //   key.search(pVerb)
    //       var verb:Verb = this.verbs[key];
    //       // verb.checkRequest(pVerb);
    //       // console.log(verb.form1)
    //     // checkRequest : (verb) => (verb.checkRequest(pVerb))
    //
    //   }
    // for (var i:number =0; i < this.verbs.length; i++){
    //   var verb = this.verbs[i];
    //   verb.check(pVerb);
    // }

    for(var key in this.verbs){
      var ruba:Verb = this.verbs[key];
      ruba.checkRequest(pVerb);
      // console.log(verb.usability + '   wweweewewewewe');
      // key.search(pVerb)
    }

    // this.verbs.forEach(value => {
    //     value.check(pVerb);
    //   });
    // this.rememberClicked(pVerb);
    // this.rawSearchSubject.next(pVerb);

    // this.verbService.search(pVerb);


    // this.verbService.searchVerbInputed.emit(pVerb);
    // this.verbs.forEach((verb) => function (verb: Verb) {
    //   // if(verb.check(pVerb)){
    //   //   // verb.check(pVerb);
    //   //   console.log('vidfboidfgbiorgb')
    //   // }else{
    //   //
    //   // }
    //   this.verbSe
    // });

    // this.verbs.forEach(vvverb => {
    //   vvverb.show();
    // })



  //   function (numbers) {
  //     numbers.forEach(element => {
  //       if (element > this.max) {
  //         this.max = element;
  //       }
  //     });
  //   }
  // };









  }

  moveList(event) {
    // console.log(event + '   catched event');
    window.open('#' + event, "_self").scroll(window.scrollX, (window.scrollY - 52));
  }

  switchIsRareEnabled() {
    this.isRareEnabled = !this.isRareEnabled;
  }

  rememberClicked(pString:string){
    this.clickedVerb = pString;
    this.preciseSearchSubject.next(pString);
    console.log(pString + ' remembered')
  }


}
