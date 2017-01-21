import {Observable} from "rxjs";
export interface IVerb {
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
}
