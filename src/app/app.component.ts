import {Component, OnInit, AfterViewInit, ViewChild, ElementRef} from '@angular/core';
import {VerbService} from "./verb.service";
import {Verb} from "./verb";
import {Subject} from "rxjs";

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
    console.log(pString + ' found')
  }

  /******
   * Send raw data to every panel for checking
   */

  onSearch(pVerb: string) {
    pVerb = pVerb.toLowerCase();
    if (pVerb === 'was' || pVerb == 'were') {
      pVerb = 'be';
    }
    this.rememberClicked(pVerb);
    this.rawSearchSubject.next(pVerb);
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
