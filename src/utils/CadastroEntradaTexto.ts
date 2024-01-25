const secoes = [
    {
        id: 0, 
        titulo: 'Insira alguns dados básicos: ',
        entradaTexto: [
            {
                id: 0,
                label: 'Nome',
                placeholder: 'Digite seu nome completo',
            },
            {
                id: 1,
                label: 'Email',
                placeholder: 'Digite seu email',
            },
            {
                id: 2,
                label: 'Crie uma senha',
                placeholder: 'Insira uma senha',
                secureTextEntry: true,
            },
            {
                id: 3,
                label: 'Confirme sua senha',
                placeholder: 'Insira a senha novamente',
                secureTextEntry: true,
            }
        ],
        checkbox: []
    },
    {
        id: 1,
        titulo: 'Agora, mais alguns dados sobre você: ',
        entradaTexto: [
            {
                id: 0,
                label: 'CEP',
                placeholder: 'Digite seu CEP'
            },
            {
                id: 1,
                label: 'Endereço',
                placeholder: 'Digite seu endereço'
            },
            {
                id: 2,
                label: 'Número',
                placeholder: 'Digite o número'
            },
            {
                id: 3,
                label: 'Complemento',
                placeholder: 'Digite o complemento'
            },
            {
                id: 4,
                label: 'Telefone',
                placeholder: '(00) 00000-0000'
            },                        
        ],
        checkbox: []    
    },
    {
        id: 2,
        titulo: 'Para finalizar, quais são seus planos? ',
        entradaTexto: [],
        checkbox: [
            {
                id: 0,
                value: 'Sulamerica'
            },
            {
                id: 1,
                value: 'Unimed'
            },
            {
                id: 2,
                value: 'Bradesco'
            },
            {
                id: 3,
                value: 'Amil'
            },
            {
                id: 4,
                value: 'Biosaúde'
            },
            {
                id: 5,
                value: 'Biovida'
            },
            {
                id: 6,
                value: 'Outros'
            },
            {
                id: 7,
                value: 'Não tenho plano'
            }

        ]
    }
]

export { secoes }

