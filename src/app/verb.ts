import {IVerb} from "./iverb";
export class Verb implements IVerb{
  id:number;
  usability:string;
  form1:string;
  form2:string;
  form3:string;
  pronounceForm1:string;
  pronounceForm2:string;
  pronounceForm3:string;
  languages:Object[];
  example1:string;
  example2:string;
  example3:string;
}
