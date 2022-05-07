module.exports = {
    USER: {
        REGISTER: {
            STUDENT: {
                SUCCESS: {
                    T1: {
                        type: "Aluno",
                        name: "Estudante 20",
                        email: "user20@email.com",
                        matricula: "200888877",
                        password: "s123456",
                        repeatPassword: "s123456",
                        phoneNumber: "11651516561",
                    }
                }, FAILURE: {
                    T1: {
                        T1: {
                            type: "Aluno",
                            name: "Estudante 20",
                            email: "user20@email.com",
                            matricula: null,
                            password: "s123456",
                            repeatPassword: "s123456",
                            phoneNumber: "11651516561",
                        }
                    }
                },
            },
            PROFESSOR: {
                SUCCESS: {
                    T1: {
                        type: "Professor",
                        email: "user21@email.com",
                        matricula: "150007458",
                        name: "Professor 21",
                        password: "s123456",
                        repeatPassword: "s123456",
                        phoneNumber: "11651516879",
                    }
                },
                FAILURE: {
                    T1: {
                        type: "Professor",
                        email: "user21@email.com",
                        matricula: null,
                        name: "Professor 21",
                        password: "s123456",
                        repeatPassword: "s123456",
                        phoneNumber: "11651516879",
                    }
                },
            },
            JURIDICAL_AGENT: {
                SUCCESS: {
                    T1: {
                        type: "Agente Externo",
                        cnpj: "11874932000180",
                        companyName: "A Empresa 22",
                        socialReason: "Empresa 22 Ltda",
                        externalAgentType: "Pessoa Juridica",
                        email: "user22@email.com",
                        name: "Pessoa Jurídica 22",
                        password: "s123456",
                        repeatPassword: "s123456",
                        phoneNumber: "61551516561",
                    }
                }, FAILURE: {
                    T1: {
                        type: "Agente Externo",
                        cnpj: null,
                        companyName: "A Empresa 22",
                        socialReason: "Empresa 22 Ltda",
                        externalAgentType: "Pessoa Juridica",
                        email: "user22@email.com",
                        name: "Pessoa Jurídica 22",
                        password: "s123456",
                        repeatPassword: "s123456",
                        phoneNumber: "61551516561",
                    }
                },
            },
            PHYSICAL_AGENT: {
                SUCCESS: {
                    T1: {
                        type: "Agente Externo",
                        cpf: "53008548679",
                        externalAgentType: "Pessoa Fisica",
                        email: "user23@email.com",
                        name: "Pessoa Fisica 23",
                        password: "s123456",
                        repeatPassword: "s123456",
                        phoneNumber: "61551516777",
                    }
                }, FAILURE: {
                    T1: {
                        type: "Agente Externo",
                        cpf: null,
                        externalAgentType: "Pessoa Fisica",
                        email: "user23@email.com",
                        name: "Pessoa Fisica 23",
                        password: "s123456",
                        repeatPassword: "s123456",
                        phoneNumber: "61551516777",
                    }
                },
            },
        },
        LOGIN: {
            STUDENT: {
                SUCCESS: {
                    T1: {
                        email: 'user05@email.com',
                        password: '123456',
                    }
                },
                FAILURE: {
                    T1: {
                        email: 'user05@email.com',
                        password: null,
                    }
                }
            },
            PROFESSOR: {
                SUCCESS: {
                    T1: {
                        email: 'user04@email.com',
                        password: '123456',
                    }
                },
                FAILURE: {
                    T1: {
                        email: 'user04@email.com',
                        password: null,
                    }
                }
            },
            JURIDICAL_AGENT: {
                SUCCESS: {
                    T1: {
                        email: 'user01@email.com',
                        password: '123456',
                    }
                },
                FAILURE: {
                    T1: {
                        email: 'user01@email.com',
                        password: null,
                    }
                }
            },
            PHYSICAL_AGENT: {
                SUCCESS: {
                    T1: {
                        email: 'user09@email.com',
                        password: '123456',
                    }
                },
                FAILURE: {
                    T1: {
                        email: 'user09@email.com',
                        password: null,
                    }
                }
            },
        },
    },
    PROJECT: {
        REGISTER: {
            SUCCESS: {
                T1: {
                    name: 'In eget dolor cursus nisi rutrum tempus a sit amet orci',
                    status: 'SB',
                    createdat: '2022-05-06T15:24:39.546',
                    problem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at justo porta dui tincidunt viverra id vitae lorem. Fusce elit eros, bibendum id sem sit amet, elementum iaculis turpis. Donec molestie urna id hendrerit porttitor. Donec dui purus, efficitur et nunc eu, maximus elementum lacus. Nullam pellentesque gravida dolor non sagittis. Suspendisse molestie nulla nec augue eleifend dignissim. Sed volutpat mauris sapien, at luctus arcu euismod non. ',
                    expectedresult: 'Duis feugiat nunc sed nunc aliquam congue. Morbi scelerisque ultricies justo vitae molestie. Donec auctor laoreet pretium.',
                    userid: 1,
                    keywords: [{ keywordid: 1, main: true }, { keywordid: 2, main: false }],
                },
            },
            FAILURE: {
                T1: {
                    name: null,
                    status: 'SB',
                    createdat: '2022-05-06T15:24:39.546',
                    problem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at justo porta dui tincidunt viverra id vitae lorem. Fusce elit eros, bibendum id sem sit amet, elementum iaculis turpis. Donec molestie urna id hendrerit porttitor. Donec dui purus, efficitur et nunc eu, maximus elementum lacus. Nullam pellentesque gravida dolor non sagittis. Suspendisse molestie nulla nec augue eleifend dignissim. Sed volutpat mauris sapien, at luctus arcu euismod non. ',
                    expectedresult: 'Duis feugiat nunc sed nunc aliquam congue. Morbi scelerisque ultricies justo vitae molestie. Donec auctor laoreet pretium.',
                    userid: 1,
                    keywords: [{ keywordid: 1, main: true }, { keywordid: 2, main: false }],
                },
            },
        },
        UPDATE: {
            SUCCESS: {
                T1: {
                    projectid: 1,
                    name: 'In eget dolor cursus nisi rutrum tempus a sit amet orci',
                    problem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at justo porta dui tincidunt viverra id vitae lorem. Fusce elit eros, bibendum id sem sit amet, elementum iaculis turpis. Donec molestie urna id hendrerit porttitor. Donec dui purus, efficitur et nunc eu, maximus elementum lacus. Nullam pellentesque gravida dolor non sagittis. Suspendisse molestie nulla nec augue eleifend dignissim. Sed volutpat mauris sapien, at luctus arcu euismod non. ',
                    expectedresult: 'Duis feugiat nunc sed nunc aliquam congue. Morbi scelerisque ultricies justo vitae molestie. Donec auctor laoreet pretium.',
                    keywords: [{ keywordid: 1, main: true }, { keywordid: 2, main: false }],
                },
            },
            FAILURE: {
                T1: {
                    projectid: null,
                    name: null,
                    problem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at justo porta dui tincidunt viverra id vitae lorem. Fusce elit eros, bibendum id sem sit amet, elementum iaculis turpis. Donec molestie urna id hendrerit porttitor. Donec dui purus, efficitur et nunc eu, maximus elementum lacus. Nullam pellentesque gravida dolor non sagittis. Suspendisse molestie nulla nec augue eleifend dignissim. Sed volutpat mauris sapien, at luctus arcu euismod non. ',
                    expectedresult: 'Duis feugiat nunc sed nunc aliquam congue. Morbi scelerisque ultricies justo vitae molestie. Donec auctor laoreet pretium.',
                    keywords: [{ keywordid: 1, main: true }, { keywordid: 2, main: false }],
                },
            },
        },
        EVALUATE: {
            SUCCESS: {
                T1: {
                    projectId: 1,
                    status: "AC",
                    feedback: "PROPOSTA ACEITA!"
                },
            },
            FAILURE: {
                T1: {
                    projectId: 1,
                    status: "RECUSADA",
                    feedback: "PROPOSTA RECUSADA!"
                },
            },
        },
        REALLOCATE: {
            SUCCESS: {
                T1: {
                    projectId: 1,
                    subjectId: 1,
                    status: "RL",
                    feedback: "PROPOSTA REALOACADA!"
                },
            },
            FAILURE: {
                T1: {
                    projectId: null,
                    subjectId: null,
                    status: "RECUSADA",
                    feedback: "PROPOSTA INEXISTENTE!"
                },
            },
        },
    },
    KEYWORD: {
        REGISTER: {
            SUCCESS: {
                T1: {
                    keyword: 'keyword',
                },
            },
            FAILURE: {
                T1: {
                    keyword: null
                },
            },
        },
        UPDATE: {
            SUCCESS: {
                T1: {
                    keywordid: 1,
                    newKeyword: 'new keyword'
                }
            },
            FAILURE: {
                T1: {
                    keywordid: 1,
                    newKeyword: null
                }
            }
        },
        SUBJECT: {
            SUCCESS: {
                T1: {
                    keywordid: 1,
                    subjectid: 1
                }
            },
            FAILURE: {
                T1: {
                    keywordid: 1,
                    subjectid: null
                }
            }
        },

        UPDATE_SUBJECT: {
            SUCCESS: {
                T1: {
                    keywordid: 1,
                    subjectid: 1

                }
            },
            FAILURE: {
                T1: {
                    keywordid: 1,
                    subjectid: 5
                }
            }
        }
    },
    SUBJECT: {
        REGISTER: {
            SUCCESS: {
                T1: {
                    subject: { name: "Disciplina de Testes", courseSyllabus: "Teste" },
                    keywords: [{ keywordid: 1, keyword: "Palavra-Chave 1" }],
                    subareas: [{ subareaid: 1, knowledgeareaid: 1, description: "Criação de Questionários de Testes", deleted: false }],
                    professors: [{ regnumber: "6843154", userid: 1, fullname: "Professor Teste", email: "teste@email.com" }]
                }
            },
            FAILURE: {
                T1: {
                    subject: { name: "Disciplina de Testes", courseSyllabus: "Teste" },
                    keywords: [{ keywordid: 1, keyword: "Palavra-Chave Teste" }],
                    subareas: [{ subareaid: 1, knowledgeareaid: 1, description: "Criação de Testes para EPS", deleted: false }],
                    professors: [{ regnumber: null, userid: 1, fullname: "Professor Testes", email: "hilteste@email.com" }]
                }
            }
        },
        UPDATE: {
            SUCCESS: {
                T1: {
                    subject: { name: "Testes Integração", courseSyllabus: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget arcu ipsum. Mauris ligula nunc, gravida at felis in, congue rutrum nulla. Phasellus vulputate dictum consectetur. Nulla facilisi. Ut condimentum neque et laoreet pellentesque. Sed eu semper risus. Nam ultrices, tellus eget faucibus efficitur, sapien quam suscipit est, eu porttitor odio ipsum eget risus. Maecenas et ornare ipsum. Praesent non tincidunt arcua.", subjectid: 1, coursesyllabus: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget arcu ipsum. Mauris ligula nunc, gravida at felis in, congue rutrum nulla. Phasellus vulputate dictum consectetur. Nulla facilisi. Ut condimentum neque et laoreet pellentesque. Sed eu semper risus. Nam ultrices, tellus eget faucibus efficitur, sapien quam suscipit est, eu porttitor odio ipsum eget risus. Maecenas et ornare ipsum. Praesent non tincidunt arcua." },
                    keywords: [{ keyword: "Palavra-Chave 01", keywordid: 1 }],
                    subareas: [{ subareaid: 1, description: "Análise de Banco de Dados" }],
                    professors: [{ regnumber: "6843154", userid: 3, fullname: "Professor 03", email: "user03@email.com" }]
                }
            },
            FAILURE: {
                T1: {
                    subject: { name: "Testes Integração", courseSyllabus: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget arcu ipsum. Mauris ligula nunc, gravida at felis in, congue rutrum nulla. Phasellus vulputate dictum consectetur. Nulla facilisi. Ut condimentum neque et laoreet pellentesque. Sed eu semper risus. Nam ultrices, tellus eget faucibus efficitur, sapien quam suscipit est, eu porttitor odio ipsum eget risus. Maecenas et ornare ipsum. Praesent non tincidunt arcua.", subjectid: null, coursesyllabus: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget arcu ipsum. Mauris ligula nunc, gravida at felis in, congue rutrum nulla. Phasellus vulputate dictum consectetur. Nulla facilisi. Ut condimentum neque et laoreet pellentesque. Sed eu semper risus. Nam ultrices, tellus eget faucibus efficitur, sapien quam suscipit est, eu porttitor odio ipsum eget risus. Maecenas et ornare ipsum. Praesent non tincidunt arcua." },
                    keywords: [{ keyword: "Palavra-Chave 01", keywordid: 1 }],
                    subareas: [{ subareaid: 1, description: "Análise de Banco de Dados" }],
                    professors: [{ regnumber: "6843154", userid: 3, fullname: "Professor 03", email: "user03@email.com" }]
                }
            },
        }
    },
};