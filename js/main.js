$(document).ready(function () {
    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(DDD) 12345-6789'
    })

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            }
        },

        messages: {
            nome: 'Por favor, insira seu nome',
            email: 'Por favor, digite um e-mail válido',
            telefone: 'Por favor, digite o número do seu telefone'
        },

        submitHandler: function (form) {
            alert("Sua requisição foi enviada para análise, parabéns pela aquisição!");
            form.reset();
        }
    })
})