module.exports = [
  {
    endpoint: '/register',
    type: 'POST',
    args:[
      {
        name: 'name',
        type: 'string'
      },
      {
        name: 'email',
        type: 'string'
      },
      {
        name: 'password',
        type: 'string'
      },
      {
        name: 'matricula',
        type: 'string'
      },
      {
        name: 'type',
        type: 'string'
      },
      {
        name: 'externalAgentType',
        type: 'string'
      },
      {
        name: 'cnpj',
        type: 'char'
      },
      {
        name: 'cep',
        type: 'string'
      },
      {
        name: 'companyName',
        type: 'string'
      },
      {
        name: 'socialReason',
        type: 'string'
      },
      {
        name: 'cpf',
        type: 'string'
      }
    ]
  },
  {
    endpoint: '/login',
    type: 'POST',
    args: [
      {
        name: 'email',
        type: 'string'
      },
      {
        name: 'password',
        type: 'string'
      }
    ]
  },
  {
    endpoint: '/alocated',
    type: 'GET',
    args: [
      {
        name: 'subjectId',
        type: 'Int'
      }
    ]
  }
]
