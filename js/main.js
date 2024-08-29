//Criar funçao para coletar o cep

function Coletar(){
    let input = document.querySelector('.input-cep').value
    console.log(input)
    Dados(input)
}

//Funçãopara consumir api
async function Dados(input){
    let dados = await fetch(`https://viacep.com.br/ws/${input}/json/`).then(response=> response.json())
    console.log(dados)
    ExibirDados(dados)
}

//Função inserir dados na tela
function ExibirDados(dados){
    document.querySelector('.estado').value = dados.uf
    document.querySelector('.cidade').value = dados.localidade
    document.querySelector('.endereco').value = dados.logradouro
    document.querySelector('.ddd').value = dados.ddd
}

function limparFormulario(dados) {
    document.querySelector('.estado').value = ''
    document.querySelector('.cidade').value = ''
    document.querySelector('.endereco').value = ''
    document.querySelector('.ddd').value = ''
}
