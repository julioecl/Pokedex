/* 1 - selecionar o pokemom desejado;
2 - chamar a imagem dele no cartão e na listagem;
3 - importar dados da tabela de pokemom da planilha;
Nome, número, tipo, status, habilidades.
4 - mudar a cor conforme o tipo;
5 - evento de clique.
*/
const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.cartao-pokemon')


listaSelecaoPokemons.forEach(pokemon => {
    pokemon.addEventListener('click', () => {
        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')

        const idPokemonSelecionado = pokemon.attributes.id.value

        const cartaoPokemonParaAbrir = document.getElementById('cartao-'+ idPokemonSelecionado)
        cartaoPokemonParaAbrir.classList.add('aberto')
        
        const pokemonAtivoNaListagem = document.querySelector('.ativo')
        pokemonAtivoNaListagem.classList.remove('ativo')

        const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
        pokemonSelecionadoNaListagem.classList.add('ativo')

    })
})







