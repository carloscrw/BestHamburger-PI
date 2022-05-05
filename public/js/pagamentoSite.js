// customElements.define(
//   "credit-card",
//   class extends HTMLElement {
//     static formAssociated = true;
//     constructor() {
//       super();
//       try {
//         this.guts_ = this.attachInternals();
//       } catch {}
//       let cctemplate = document.getElementById("cc-template");

//       const shadowRoot = this.attachShadow({ mode: "open" }).appendChild(
//         cctemplate.content.cloneNode(true)
//       );

//       this.shadowRoot
//         .querySelector('[name="nameoncard"]')
//         .addEventListener("input", function (evt) {
//           this.getRootNode().host.updateValue();
//         });
//       this.shadowRoot
//         .querySelector('[name="cardnumber"]')
//         .addEventListener("input", function (evt) {
//           this.getRootNode().host.updateValue();
//         });
//       this.shadowRoot
//         .querySelector('[name="experationdate"]')
//         .addEventListener("input", function (evt) {
//           this.getRootNode().host.updateValue();
//         });
//       this.cvvnumberEl_ = this.shadowRoot
//         .querySelector('[name="cvvnumber"]')
//         .addEventListener("input", function (evt) {
//           this.getRootNode().host.updateValue();
//         });

//       this.updateValue();
//     }
//     updateValue() {
//       const ccinfo = new FormData();
//       this.nameoncard_ = this.shadowRoot.querySelector(
//         '[name="nameoncard"]'
//       ).value;
//       this.cardnumber_ = this.shadowRoot.querySelector(
//         '[name="cardnumber"]'
//       ).value;
//       this.experationdate_ = this.shadowRoot.querySelector(
//         '[name="experationdate"]'
//       ).value;
//       this.cvvnumber_ = this.shadowRoot.querySelector(
//         '[name="cvvnumber"]'
//       ).value;

//       ccinfo.append("nameoncard", this.nameoncard_);
//       ccinfo.append("cardnumber", this.cardnumber_);
//       ccinfo.append("experationdate", this.experationdate_);
//       ccinfo.append("cvvnumber", this.cvvnumber_);

//       this.guts_.setFormValue(ccinfo);
//     }
//   }
// );
// const container = document.querySelectorAll('.container')
// container.forEach(element => element.addEventListener('click', 
// () => exibirConteudo(element)))

// const exibirConteudo = (element) => {
//   const cartao = element.childNodes[3]
//   exibirConteudo.classList.toggle('block')
// }
// /*let cartao = new Card({
//   form: '.container-card',
//   container: 'cartao',
//   espaços reservados : { 
//     número : '**** **** **** ****' , 
//     nome : 'Arya Stark' , 
//     expiração : '**//****' , 
//     cvc : '
// });
// $('input').on('change', function() {
//     $('body').toggleClass('blue');
//   });*/

  let formCartao = document.getElementById('container-card')
  formCartao.click= off
  formCartao.click= on
  
function mostrar(off, on){
  formCartao.style.display= 'none'
}


