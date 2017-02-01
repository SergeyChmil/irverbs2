import {IVerb} from "./iverb";
import { Directive, EventEmitter} from "@angular/core";

@Directive({
  selector: '[verb]'
})

export class Verb implements IVerb {

  public emitter: EventEmitter<string>;

  constructor(private inputData: IVerb) {
    this.emitter = new EventEmitter();
  }


  react(pVerb: string): boolean {
    try{
      if (pVerb === this.form1 || pVerb === this.form2 || pVerb === this.form3) {
          this.emitter.emit('show');
          return true;
      }else{
          this.emitter.emit('hide');
          return false;
      }
    }
    catch (e){
      console.log('VERB ERROR ' + e);
    }
  }

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
