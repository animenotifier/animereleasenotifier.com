import TouchController from "./TouchController"
import Diff from "./Diff"

export default class SideBar {
	element: HTMLElement
	touchController: TouchController

	constructor(element) {
		this.element = element

		document.body.addEventListener("click", e => {
			if(document.activeElement.id === "search")
				return;

			this.hide()
		})

		this.touchController = new TouchController()
		this.touchController.leftSwipe = () => this.hide()
		this.touchController.rightSwipe = () => this.show()
	}

	show() {
		Diff.mutations.queue(() => this.element.classList.add("sidebar-visible"))
	}

	hide() {
		Diff.mutations.queue(() => this.element.classList.remove("sidebar-visible"))
	}

	toggle() {
		let visible = this.element.style.display !== "none"

		if(visible) {
			this.hide()
			this.element.style.display = "none"
		} else {
			this.show()
			this.element.style.display = "flex"
		}
	}
}