import form from "./form";

const renderForm = ()=>{
    const formElement = document.createElement('form');
    formElement.className = "from-inline";
    formElement.innerHTML = form();
    document.querySelector('main .card-body').appendChild(formElement);
}

export default renderForm;