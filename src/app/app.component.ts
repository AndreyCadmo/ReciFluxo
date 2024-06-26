import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { HeaderComponent } from "./components/header/header.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  template: `
    <app-header></app-header>
    <main>
      <router-outlet />
      <button onclick="window.location.href=''" class="topo">^</button>
    </main>
  `,
  styles: [],
})
export class AppComponent {
  title = "ReciFluxo";
}
