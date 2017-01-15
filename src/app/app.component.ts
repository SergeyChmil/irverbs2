import {Component, OnInit, AfterViewInit, QueryList, ViewChildren, ViewChild} from '@angular/core';
import {VerbService} from "./verb.service";
import {Verb} from "./verb";
import {VerbPanelComponent} from "./verb-panel/verb-panel.component";
import {childOfKind} from "tslint";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {

  private isRareEnabled: boolean = true;
  private isOldEnabled: boolean = true;
  private language: string = 'ru';
  private searchedString: string = '';

  verbs: Verb[];

  constructor(private verbService:VerbService) {
  }

  @ViewChildren(VerbPanelComponent) verbPanelsList: QueryList<VerbPanelComponent>;
  @ViewChild('verbPanel') verbPanel;

  ngOnInit() {
    this.getAllVerbs();
  }

  ngAfterViewInit(){
    console.log(this.verbPanel)
  }

  getAllVerbs() {
    this.verbService.getVerbAPI()
      .subscribe(
        data => this.verbs = data,
        error => console.log('Server error')
      );
  }

  onSearch(pString:string){
    // window.open('#'+pString.toLowerCase(), "_self");
    // console.log(this.verbs);
  }

  onRareClick(){
    this.isRareEnabled = !this.isRareEnabled;
  }
  //
  // onOldClick(){
  //   this.isOldEnabled = !this.isOldEnabled;
  // }

}
