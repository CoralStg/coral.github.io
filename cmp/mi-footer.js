class MiFooter extends HTMLElement{
	connectedCallback(){
		this.innerHTML = /*html*/
		  'Copyright &copy; 2021 Coral Santiago Cruz.';
	}
}
customElements.define("mi-footer", MiFooter);
