import { Component, signal } from "@angular/core";
import {
  IgxButtonModule,
  IgxIconComponent,
  IgxInputDirective,
  IgxInputGroupComponent,
} from "igniteui-angular";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    IgxButtonModule,
    IgxIconComponent,
    IgxInputDirective,
    IgxInputGroupComponent,
  ],
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  // Signal to track the current view state
  viewState = signal<"state-a" | "state-b">("state-a");

  toggleState() {
    this.viewState.update((current) =>
      current === "state-a" ? "state-b" : "state-a",
    );
  }
}
