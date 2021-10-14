import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  declare readonly outputTarget: Element
  declare readonly nameTarget: HTMLInputElement
  
  static targets = [ "name", "output" ]

  greet() {
    this.outputTarget.textContent =
      `Hello, ${this.nameTarget.value}!`
  }
}
