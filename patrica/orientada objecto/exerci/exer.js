
// 1.exer Criando um Objeto Literal com Métodos
const livro = {
    titulo: "primaver",
    autor: "Machado de Assis",
    anoPublicacao: 1899,

    // Método que retorna informações do livro
    getInfo: function() {
        return `${this.titulo} de ${this.autor}, publicado em ${this.anoPublicacao}.`;
    },

    // Método que verifica se o livro é um clássico
    isClassico: function() {
        return this.anoPublicacao < 1990;
    }
};

// Testando os métodos
console.log(livro.getInfo()); // Exibe as informações do livro
console.log(livro.isClassico()); // Verifica se é clássico (retorna true)


//  exerci 2 Função para Criar Objetos - Fábrica de Objetos
function criarPessoa(nome, idade, profissao) {
    return {
        nome: nome,
        idade: idade,
        profissao: profissao,

        // Método para saudar
        saudar: function() {
            return `Olá, meu nome é ${this.nome}.`;
        },

        // Método para mostrar informações
        mostrarInfo: function() {
            return `Nome: ${this.nome}, Idade: ${this.idade}, Profissão: ${this.profissao}.`;
        }
    };
}

// Testando a função criando várias pessoas
const pessoa1 = criarPessoa("Alice", 30, "Engenheira");
const pessoa2 = criarPessoa("Bob", 25, "Designer");
const pessoa3 = criarPessoa("Carlos", 40, "Professor");

// Chamando os métodos para verificar o funcionamento
console.log(pessoa1.saudar());        // Olá, meu nome é Alice.
console.log(pessoa1.mostrarInfo());   // Nome: Alice, Idade: 30, Profissão: Engenheira.

console.log(pessoa2.saudar());        // Olá, meu nome é Bob.
console.log(pessoa2.mostrarInfo());   // Nome: Bob, Idade: 25, Profissão: Designer.

console.log(pessoa3.saudar());        // Olá, meu nome é Carlos.
console.log(pessoa3.mostrarInfo());   // Nome: Carlos, Idade: 40, Profissão: Professor.

//  3 Criando uma Classe Básica
class Produto {
    constructor(nome, preco, categoria) {
        this.nome = nome;           // Propriedade nome do produto
        this.preco = preco;         // Propriedade preço do produto
        this.categoria = categoria; // Propriedade categoria do produto
    }

    //  Método para aplicar desconto
    aplicarDesconto(percentual) {
        // Verifica se o percentual é válido
        if (percentual < 0 || percentual > 100) {
            console.log("Percentual de desconto inválido. Deve estar entre 0 e 100.");
            return;
        }
        // Calcula o valor do desconto e reduz o preço
        const desconto = this.preco * (percentual / 100);
        this.preco -= desconto;
    }

    // Método para mostrar detalhes do produto
    mostrarDetalhes() {
        return `Produto: ${this.nome}\nPreço: escudos$${this.preco.toFixed(2)}\nCategoria: ${this.categoria}`;
    }
}


//4 exercio // Classe Básica Produto
class mercadoria {
    constructor(nome, preco, categoria) {
        this.nome = nome;           // Propriedade nome do produto
        this.preco = preco;         // Propriedade preço do produto
        this.categoria = categoria; // Propriedade categoria do produto
    }

    // Método para aplicar desconto
    aplicarDescontar(percentual) {
        if (percentual < 0 || percentual > 100) {
            console.log("Percentual de desconto inválido. Deve estar entre 0 e 100.");
            return;
        }
        const desconto = this.preco * (percentual / 100);
        this.preco -= desconto;
    }

    // Método para mostrar detalhes do produto
    mostrarinformacao() {
        return `Produto: ${this.nome}\nPreço: escudos$${this.preco.toFixed(2)}\nCategoria: ${this.categoria}`;
    }
}

// Classe Eletrônico que herda de Produto
class Eletronico extends mercadoria {
    constructor(nome, preco, categoria, garantia) {
        super(nome, preco, categoria); // Chama o construtor da classe pai
        this.garantia = garantia;       // Propriedade garantia do eletrônico
    }

    // Sobrescreve o método mostrarDetalhes para incluir a garantia
    mostrarimformacao() {
        return `${super.mostrarinformacao()}\nGarantia: ${this.garantia} anos`;
    }
}

// Testando as classes
const produto1 = new Produto("Camiseta", 50, "Vestuário");
console.log(produto1.mostrarimformacao ); // Exibe os detalhes do produto

const eletronico1 = new Eletronico("Smartphone", 1500, "Eletrônicos", 2);
console.log(eletronico1.mostrarimformacao()); // Exibe os detalhes do eletrônico com garantia

// Aplicando desconto e mostrando detalhes novamente
eletronico1.aplicarDescontar(15); // Aplica um desconto de 15%
console.log(eletronico1.mostrarimformacao()); // Exibe os detalhes após o desconto

//5 exerci // Classe ContaBancaria com encapsulamento e acesso privado
class ContaBancaria {
    // Propriedades privadas
    #saldo;  // Saldo da conta
    #titular; // Titular da conta

    constructor(titular) {
        this.#titular = titular; // Inicializa o titular da conta
        this.#saldo = 0;        // Inicializa o saldo como 0
    }

    // Método público para depositar dinheiro
    depositar(valor) {
        if (valor <= 0) {
            console.log("Valor de depósito deve ser positivo.");
            return;
        }
        this.#saldo += valor; // Adiciona o valor ao saldo
        console.log(`Depósito de R$${valor.toFixed(2)} realizado com sucesso.`);
    }

    // Método público para sacar dinheiro
    sacar(valor) {
        if (valor <= 0) {
            console.log("Valor de saque deve ser positivo.");
            return;
        }
        if (valor > this.#saldo) {
            console.log("Saldo insuficiente para realizar o saque.");
            return;
        }
        this.#saldo -= valor; // Subtrai o valor do saldo
        console.log(`Saque de R$${valor.toFixed(2)} realizado com sucesso.`);
    }

    // Método público para verificar o saldo
    verSaldo() {
        return `Saldo atual: R$${this.#saldo.toFixed(2)}`; // Retorna o saldo formatado
    }
}

// Testando a classe ContaBancaria
const conta1 = new ContaBancaria("Carlos Silva");

console.log(conta1.verSaldo()); // Exibe o saldo inicial

conta1.depositar(500);  // Deposita R$500
console.log(conta1.verSaldo()); // Exibe o saldo após depósito

conta1.sacar(200);      // Saca R$200
console.log(conta1.verSaldo()); // Exibe o saldo após saque

conta1.sacar(400);      // Tenta sacar R$400, mas saldo é insuficiente
 // ercio 6 // Classe Funcionario
class Funcionario {
    constructor(nome, salario) {
        this.nome = nome;      // Nome do funcionário
        this.salario = salario; // Salário do funcionário
    }

    // Método para calcular salário
    calcularSalario() {
        return this.salario; // Retorna o salário base
    }

    // Método para mostrar informações do funcionário
    mostrarInfo() {
        return `Funcionário: ${this.nome}, Salário: R$${this.calcularSalario().toFixed(2)}`;
    }
}

// Subclasse Gerente que herda de Funcionario
class Gerente extends Funcionario {
    constructor(nome, salario, bonus) {
        super(nome, salario); // Chama o construtor da classe pai
        this.bonus = bonus;   // Bônus do gerente
    }

    // Sobrescreve o método calcularSalario para incluir o bônus
    calcularSalario() {
        return this.salario + this.bonus; // Retorna salário mais bônus
    }

    // Método para mostrar informações do gerente
    mostrarInfo() {
        return `Gerente: ${this.nome}, Salário: R$${this.calcularSalario().toFixed(2)}`;
    }
}

// Testando as classes
const funcionario1 = new Funcionario("João", 3000);
const gerente1 = new Gerente("Maria", 5000, 2000);

console.log(funcionario1.mostrarInfo()); // Exibe as informações do funcionário
console.log(gerente1.mostrarInfo());     // Exibe as informações do gerente

// Calculando os salários
console.log(`Salário de ${funcionario1.nome}: R$${funcionario1.calcularSalario().toFixed(2)}`);
console.log(`Salário de ${gerente1.nome}: R$${gerente1.calcularSalario().toFixed(2)}`);
// Classe ItemInventario
class ItemInventario {
    constructor(nome, quantidade, preco) {
        this.nome = nome;         // Nome do item
        this.quantidade = quantidade; // Quantidade do item
        this.preco = preco;       // Preço do item
    }

    // Método para calcular o valor total do item
    calcularValorTotal() {
        return this.quantidade * this.preco;
    }
}

//  7 Objeto literal inventario
const inventario = {
    itens: [
        new ItemInventario("Produto A", 10, 5),
        new ItemInventario("Produto B", 3, 20),
        new ItemInventario("Produto C", 5, 15),
    ],

    // Método para calcular o valor total de todos os itens
    calcularValorTotal: function() {
        return this.itens.reduce((total, item) => total + item.calcularValorTotal(), 0);
    }
};

// Testando o inventário
console.log(`Valor total do inventário: escudo$${inventario.calcularValorTotal().toFixed(2)}`);

//8 // Classe Funcionario
class trabalhador {
    constructor(nome, salario) {
        this.nome = nome;
        this.salario = salario;
    }

    calcularSalario() {
        return this.salario;
    }

    mostrarInfo() {
        return `trabalhador : ${this.nome}, Salário: escudo$${this.calcularSalario().toFixed(2)}`;
    }
}

// Classe Departamento
class Departamento {
    constructor(nome) {
        this.nome = nome;
        this.funcionarios = [];
    }

    adicionarFuncionario(funcionario) {
        this.funcionarios.push(funcionario);
    }

    removerFuncionario(nome) {
        this.funcionarios = this.funcionarios.filter(f => f.nome !== nome);
    }

    listarFuncionarios() {
        return this.funcionarios.map(f => f.mostrarInfo()).join("\n");
    }
}

// Classes específicas
class Desenvolvedor extends Funcionario {
    constructor(nome, salario, projetoAtual) {
        super(nome, salario);
        this.projetoAtual = projetoAtual;
    }

    mostrarInfo() {
        return `${super.mostrarInfo()}, Projeto Atual: ${this.projetoAtual}`;
    }
}

class Designer extends Funcionario {
    constructor(nome, salario, portfolio) {
        super(nome, salario);
        this.portfolio = portfolio;
    }

    mostrarInfo() {
        return `${super.mostrarInfo()}, Portfolio: ${this.portfolio}`;
    }
}

// Testando o departamento
const departamento = new Departamento("Desenvolvimento");
const dev = new Desenvolvedor("Pedro", 4000, "App Mobile");
const designer = new Designer("Luana", 3500, "Site Corporativo");

departamento.adicionarFuncionario(dev);
departamento.adicionarFuncionario(designer);

console.log(departamento.listarFuncionarios());
// 9 // Classe Quarto
class Quarto {
    constructor(numero, tipo, preco) {
        this.numero = numero;
        this.tipo = tipo;
        this.preco = preco;
        this.reservado = false; // Estado inicial do quarto
    }

    reservar() {
        this.reservado = true;
    }

    cancelar() {
        this.reservado = false;
    }

    estaDisponivel() {
        return !this.reservado;
    }
}

// Classe Hotel
class Hotel {
    constructor(nome, localizacao) {
        this.nome = nome;
        this.localizacao = localizacao;
        this.quartos = [];
    }

    adicionarQuarto(quarto) {
        this.quartos.push(quarto);
    }

    verDisponibilidade() {
        return this.quartos.filter(quarto => quarto.estaDisponivel());
    }
}

// Testando o sistema de reservas
const hotel = new Hotel("Hotel Exemplo", "São Paulo");
hotel.adicionarQuarto(new Quarto(101, "Simples", 200));
hotel.adicionarQuarto(new Quarto(102, "Luxo", 500));

// Reservando um quarto
hotel.quartos[0].reservar();
console.log(`Quartos disponíveis: ${hotel.verDisponibilidade().length}`);
//
//10 // Classe Livro
class Livro {
    constructor(titulo, autor, genero) {
        this.titulo = titulo;
        this.autor = autor;
        this.genero = genero;
        this.disponivel = true; // Estado inicial do livro
    }

    emprestar() {
        this.disponivel = false;
    }

    devolver() {
        this.disponivel = true;
    }
}

// Classe Biblioteca
class Biblioteca {
    constructor() {
        this.livros = [];
    }

    adicionarLivro(livro) {
        this.livros.push(livro);
    }

    emprestarLivro(titulo) {
        const livro = this.livros.find(l => l.titulo === titulo);
        if (livro && livro.disponivel) {
            livro.emprestar();
            return `Livro "${titulo}" emprestado.`;
        }
        return `Livro "${titulo}" não disponível.`;
    }

    devolverLivro(titulo) {
        const livro = this.livros.find(l => l.titulo === titulo);
        if (livro) {
            livro.devolver();
            return `Livro "${titulo}" devolvido.`;
        }
        return `Livro "${titulo}" não encontrado.`;
    }

    listarDisponiveis(genero) {
        return this.livros.filter(l => l.disponivel && (!genero || l.genero === genero));
    }
}

// Testando o sistema de biblioteca
const biblioteca = new Biblioteca();
biblioteca.adicionarLivro(new Livro("1984", "George Orwell", "Ficção"));
biblioteca.adicionarLivro(new Livro("O Senhor dos Anéis", "J.R.R. Tolkien", "Fantasia"));

console.log(biblioteca.emprestarLivro("1984"));
console.log(biblioteca.listarDisponiveis("Ficção"));

