$(document).ready(function() {
    // Aplicar máscara ao campo CPF
    $('#cpf').mask('000.000.000-00', {reverse: true});

    // Aplicar máscara ao campo telefone
    $('#telefone').mask('(00) 00000-0000');

    // Aplicar máscara ao campo CEP
    $('#cep').mask('00000-000');
});
