function mandarParaWhatsapp() {
    let number = "+";

    let nome = document.getElementById('nome').value;
    let data_nascimento = document.getElementById('nascimento').value;
    let endereço = document.getElementById('endereço').value;
    let telefone = document.getElementById('telefone').value;
    let cpf = document.getElementById('cpf').value;
    let email = document.getElementById('email').value;
    let modalidade = document.getElementById('modalidade').value;
    let dias = document.getElementById('dias_aluno').value;

    var url = "https://wa.me/" + number + "?text="
    + "Nome: "  +nome+ "%0a"
    + "Data de Nascimento: "  +data_nascimento+ "%0a"
    + "Endereço: "  +endereço+ "%0a"
    + "Telefone: "  +telefone+ "%0a"
    + "CPF: "  +cpf+ "%0a"
    + "E-mail: "  +email+ "%0a"
    + "Modalidade: "  +modalidade+ "%0a"
    + "Dias de prática: "  +dias

    window.open(url, 'blank_').focus();
}