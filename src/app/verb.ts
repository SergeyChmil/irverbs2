import {IVerb} from "./iverb";
import { Directive, OnInit, AfterViewInit, EventEmitter} from "@angular/core";

@Directive({
  selector: '[verb]'
})

export class Verb implements IVerb {

  public emitter: EventEmitter<string>;
  private isOpen:boolean = false;

  constructor(private inputData: IVerb) {
    this.emitter = new EventEmitter();
  }


  // ngOnInit() {
  //   // this.verbService.searchVerbInputed.subscribe(pVerb => {
  //   //   // this.onSearch(pVerb);
  //   //   // console.log('verb core said: ' + pVerb + ' and ' + this.form3);
  //   //   this.checkDelayed(pVerb);
  //   // });
  //
  //
  // }

  // ngAfterViewInit() {
  //   // this.verbService.searchVerbInputed.subscribe(pVerb => {
  //   //   // this.checkDelayed(pVerb);
  //   //   console.log(this.form1);
  //   // //   // this.onSearch(pVerb);
  //   // //   console.log('verb core said: ' + pVerb + ' and ' + this.usability);
  //   // });
  //   // console.log('th' + this.example1)
  // }

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

  // checkDelayed(pVerb:string){
  //   // console.log('react delayed')
  //   this._ngZone.runOutsideAngular(() => {
  //     setTimeout(() => this.checkRequest(pVerb))
  //   });
  //
  // }

  // validate = (): boolean => {
  // get checkRequest(pVerb:string)

  // checkRequest = (pVerb: string) => {
  //   console.log(pVerb + ' react')
  //   // console.log(this.form1.map)
  //   // if(pVerb === this.form1 || pVerb === this.form2 || pVerb === this.form3){
  //   //   console.log('true');
  //   //   // return true
  //   // }else{
  //   //   console.log('false');
  //   //   // return false;
  //   // }
  // }

  react(pVerb: string, isClicked:boolean = false): boolean {
    // console.log(this.form1 + ' | ' + this.isOpen + '  : isOpen')
    try{
      if (pVerb === this.form1 || pVerb === this.form2 || pVerb === this.form3) {
        // if(!this.isOpen) {
          this.emitter.emit('show');
          // this.isOpen = !this.isOpen;
          if(this.usability === 'rare') return true;
        // }
      }else{
        // if(this.isOpen) {
          this.emitter.emit('hide');
          // this.isOpen = !this.isOpen;
          // this.switchBoolean(this.isOpen);
          return false;
        // }
      }
    }
    catch (e){
      console.log('VERB ERROR ' + e);
    }
  }

  // modifyState(pBoolean:boolean){
  //   this.isOpen = pBoolean;
  // }


  // public show(){
  //   console.log( this.form1 + '  VERB WORKED')
  // };
  //
  // hide(){
  //   console.log( this.form1 + '  VERB WORKED')
  // };

  get id(): number {
    return this.inputData.id
  };

  get usability(): string {
    return this.inputData.usability
  };

  get form1(): string {
    return this.inputData.form1
  };

  get form2(): string {
    return this.inputData.form2
  };

  get form3(): string {
    return this.inputData.form3
  };

  get pronounceForm1(): string {
    return this.inputData.pronounceForm1
  };

  get pronounceForm2(): string {
    return this.inputData.pronounceForm2
  };

  get pronounceForm3(): string {
    return this.inputData.pronounceForm3
  };

  get languages(): Object[] {
    return this.inputData.languages
  };

  get example1(): string {
    return this.inputData.example1
  };

  get example2(): string {
    return this.inputData.example2
  };

  get example3(): string {
    return this.inputData.example3
  };

}
