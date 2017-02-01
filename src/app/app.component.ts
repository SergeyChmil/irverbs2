import {Component, OnInit, NgZone} from '@angular/core';
import {VerbService} from "./verb.service";
import {Verb} from "./verb";
import {IVerb} from "./iverb";
import {WindowRefService} from "./window.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private isRareEnabled: boolean = true;
  private language: string = 'ru';

  verbs: Verb[] = [];
  showedVerbs: Verb[] = [];
  rawData: IVerb[];

  private _window: Window;

  constructor(private verbService: VerbService, private  windowRef: WindowRefService, private _ngZone: NgZone) {
    this._window = windowRef.nativeWindow;
  }

  ngOnInit() {
    this.getAllVerbs();
  }

  getAllVerbs() {
    console.log('get verbs')
    this.verbService.getVerbAPI()
      .subscribe(
        data => this.rawData = data,
        error => console.log('Server error'),
        function () {
          for (var key in this.rawData) {
            var verb: Verb = new Verb(this.rawData[key]);
            this.verbs.push(verb);
            this.showedVerbs.push(verb);
          }
        }.bind(this)
      );
  }

  requestFound(verbType:string, isClicked:boolean) {
    if (!this.isRareEnabled && !isClicked && verbType === 'rare') this.switchIsRareEnabled();
  }

  onSearch(pVerb: string, isClicked:boolean = false) {
    try {
      pVerb = pVerb.toLowerCase();
      if (pVerb === 'was' || pVerb == 'were') {
        pVerb = 'be';
      }

      for (var key in this.verbs) {
        var verb: Verb = this.verbs[key];
        if(verb.react(pVerb)){
          this.requestFound(verb.usability, isClicked);
          if(!isClicked)this.delayedMove(this.showedVerbs.indexOf(verb));
        }
      }
    }
    catch (e){
      // console.log('ARR ERROR ' + e)
    }
  }

  delayedMove(index:number){
    this._ngZone.runOutsideAngular(() => {
      setTimeout(() => this.moveList(index))
    });
  }

  moveList(index:number) {
    this._window.scroll(0,index*34);
  }

  switchIsRareEnabled() {
    if(this.isRareEnabled){
      this.showedVerbs = [];
      for (var key in this.verbs) {
        var verb: Verb = this.verbs[key];
        if(verb.usability === 'normal')this.showedVerbs.push(verb);
      }
    }else{
      this.showedVerbs = [];
      for (var key in this.verbs) {
        var verb: Verb = this.verbs[key];
        this.showedVerbs.push(verb);
      }
    }

    this.isRareEnabled = !this.isRareEnabled;
  }



}
