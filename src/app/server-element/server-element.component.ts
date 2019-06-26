import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ElementRef
} from "@angular/core";

@Component({
  selector: "app-server-element",
  templateUrl: "./server-element.component.html",
  styleUrls: ["./server-element.component.css"]
})
export class ServerElementComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy {
  count = 0;
  @Input("srvElement") element: { type: string; name: string; content: string };
  @Input() name: string;
  @ViewChild("header", { static: true }) header: ElementRef;

  constructor() {
    console.log(
      ++this.count,
      "constructor called",
      "header"
      // this.header.nativeElement.textContent
    );
  }

  ngOnInit() {
    console.log(
      ++this.count,
      "ngOnInit called",
      "header",
      this.header.nativeElement.textContent
    );
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(
      ++this.count,
      "ngOnChanges called:",
      changes,
      "header",
      this.header.nativeElement.textContent
    );
  }

  ngDoCheck() {
    console.log(
      ++this.count,
      "ngDoCheck!",
      "header",
      this.header.nativeElement.textContent
    );
  }

  ngAfterContentInit() {
    console.log(
      ++this.count,
      "ngAfterContentInit called!",
      "header",
      this.header.nativeElement.textContent
    );
  }

  ngAfterContentChecked() {
    console.log(
      ++this.count,
      "ngAfterContentChecked called!",
      "header",
      this.header.nativeElement.textContent
    );
  }

  ngAfterViewInit() {
    console.log(
      ++this.count,
      "ngAfterViewInit called!",
      "header",
      this.header.nativeElement.textContent
    );
  }

  ngAfterViewChecked() {
    console.log(
      ++this.count,
      "ngAfterViewChecked called!",
      "header",
      this.header.nativeElement.textContent
    );
  }

  ngOnDestroy() {
    console.log(
      ++this.count,
      "ngOnDestroy called!",
      "header",
      this.header.nativeElement.textContent
    );
  }
}
