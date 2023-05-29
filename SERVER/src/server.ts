import fastify from 'fastify'
import { PrismaClient } from '@prisma/client'

// Fastify é o Express melhorado
const app = fastify()

// Variável 'prisma' será usado para fazer conexão com nosso banco
const prisma = new PrismaClient()

// Rota padrão do nosso aplicativo
app.get('/', async () => {
  return 'Hello World'
})

// Rota para listar os usuários da aplicação
// 'async/await' pois é uma conexão com um banco
app.get('/usuarios', async () => {
  // 'findMany()' exibe todos os dados da tabela 'usuario'
  const usuarios = await prisma.usuario.findMany()
  return usuarios
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
