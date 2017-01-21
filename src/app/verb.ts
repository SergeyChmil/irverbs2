import {IVerb} from "./iverb";
import {VerbService} from "./verb.service";
import {Injectable, Directive, OnInit, AfterViewInit, HostListener, Input, Output, NgZone} from "@angular/core";
import {Observable} from "rxjs";

@Directive({
  selector: '[verb]'
})

export class Verb implements IVerb, OnInit, AfterViewInit{
  id:number;
  usability:string;
  form1:Observable<string>;
  form2:string;
  form3:string;
  pronounceForm1:string;
  pronounceForm2:string;
  pronounceForm3:string;
  languages:Object[];
  example1:string;
  example2:string;
  example3:string;

  // @Input() verb = () => {};

  // @HostListener('click',["$event"])
  // clickReact(event:Event){
  //   console.dir('azazaz ' + event)
  //   console.dir('azazaz ' + this.form1)
  //   return false;
  // }



  constructor(private _ngZone: NgZone, private verbService:VerbService){

  }

  ngOnInit() {
    // this.verbService.searchVerbInputed.subscribe(pVerb => {
    //   // this.onSearch(pVerb);
    //   // console.log('verb core said: ' + pVerb + ' and ' + this.form3);
    //   this.checkDelayed(pVerb);
    // });



  }

  // fetchEvent(): void {
  //   return  this.verbService.searchVerbInputed.subscribe().then(event => {
  //     // this.ev = event;
  //     console.log(event); // Has a value
  //     console.log(this.form1 + "Worked well" ); // Has a value
  //   });
  // }

  ngAfterViewInit(){
    this.verbService.searchVerbInputed.subscribe(pVerb => {
      this.checkDelayed(pVerb);
      console.log(this.form1);
    //   // this.onSearch(pVerb);
    //   console.log('verb core said: ' + pVerb + ' and ' + this.usability);
    });
    // console.log('th' + this.example1)
  }

  // private onSearch(pVerb:string){
  // //   console.log(pVerb + '   dfdfdf')
  // //   if(pVerb === this.form1 || pVerb === this.form2 || pVerb === this.form3){
  // //     console.log("SERVICE WORKED");
  // //   }else{
  // //
  // //   }
  // //   console.log('verb core said: ' + pVerb + ' and ' );
  // }



  // isExpanded:boolean = false;
  // searchedVerb:string='';

  subscribe(){

  }

  checkDelayed(pVerb:string){
    // console.log('check delayed')
    this._ngZone.runOutsideAngular(() => {
      setTimeout(() => this.checkRequest(pVerb))
    });

  }

  // validate = (): boolean => {
 checkRequest(pVerb:string){
    console.log(this.form1.map)
    // if(pVerb === this.form1 || pVerb === this.form2 || pVerb === this.form3){
    //   console.log('true');
    //   // return true
    // }else{
    //   console.log('false');
    //   // return false;
    // }
  }




  // public show(){
  //   console.log( this.form1 + '  VERB WORKED')
  // };
  //
  // hide(){
  //   console.log( this.form1 + '  VERB WORKED')
  // };

}
