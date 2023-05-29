const estilos = {
    color: 'red'
}

// É criado esse interface para especificar
// o TIPO de dado que a propriedade vai receber
interface BotaoProps {
    titulo: string
}

// Atribuímos o TIPO do argumento
// nesse caso argumento 'props', tem o TIPO
// da interface 'BotaoProps', que por sua vez,
// indica que a propriedade 'titulo' recebe uma string
export function Botao(props: BotaoProps) {
    return(
        // <p style={estilos}>Teste</p>

        // Utilizando um argumento da função 'props'
        // que tem como propriedade 'titulo'
        <p style={estilos}>{props.titulo}</p>
    )
}