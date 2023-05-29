import fastify from 'fastify'

// Fastify é o Express melhorado
const app = fastify()

// Rota padrão do nosso aplicativo
app.get('/', () => {
  return 'Hello World'
})

// Criando a 'porta de entrada' do servidor
app
  .listen({
    // Servidor ficará na porta 3333
    port: 3333,
    // 'then', já 'listen' retorna uma PROMISSE
  })
  .then(() => {
    console.log('🎉 Servidor HTTP rodando na porta 3333')
  })
