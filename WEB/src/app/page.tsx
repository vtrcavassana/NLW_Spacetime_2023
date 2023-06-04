// import { Botao } from '@/components/Botao'
import { User } from 'lucide-react'
import Image from 'next/image'
import nlwLogo from '../assets/nlw-spacetime-logo.svg'

export default function Home() {
  return (
    <main className="grid h-screen grid-cols-2">
      {/* Esquerda */}
      <div className="relative flex flex-col items-start justify-between overflow-hidden border-r border-white/10 bg-[url(../assets/bg-stars.svg)] bg-cover px-28 py-16">
        {/* Blur */}
        <div className="absolute right-0 top-1/2 h-[280px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-700 opacity-50 blur-full"></div>
        {/* Stripes */}
        <div className="absolute bottom-0 right-2 top-0 w-2 bg-stripes" />

        {/* Login */}
        <a
          href="http://"
          className="flex items-center gap-3 text-left transition-colors hover:text-gray-50"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400">
            <User className="h-5 w-5 text-gray-500" />
          </div>

          <p className="max-w-[140px] text-sm leading-snug">
            <span className="underline">Crie sua conta</span> e salve suas
            memórias!
          </p>
        </a>

        {/* Hero - parte principal do conteúdo */}
        <div className="space-y-5">
          {/* Componente nativo do Typescript para exibir imagens */}
          <Image src={nlwLogo} alt="NLW Spacetime" />

          <div className="max-w-[420px] space-y-1">
            <h1 className="text-5xl font-bold leading-tight text-gray-50">
              Sua cápsula do tempo
            </h1>
            <p className="text-lg leading-relaxed">
              Colecione momentos marcantes da sua jornada e compartilhe (se
              quiser) com o mundo!
            </p>
          </div>

          <a
            href=""
            className="inline-block rounded-full bg-green-500 px-5 py-3 font-alt text-sm uppercase leading-none text-black hover:bg-green-600"
          >
            CADASTRAR LEMBRANÇA
          </a>
        </div>

        {/* Copyright */}
        <div className="text-sm leading-relaxed text-gray-200">
          Feito com 💜 no NLW da{' '}
          <a
            target="_blank"
            rel="noreferrer"
            className="underline hover:text-gray-100"
            href="https://rocketseat.com.br"
          >
            Rocketseat
          </a>{' '}
        </div>
      </div>

      {/* Direita */}
      <div className="flex flex-col bg-[url(../assets/bg-stars.svg)] bg-cover p-16">
        <div className="flex flex-1 items-center justify-center">
          {/* No TailwindCSS, quando quiser utilizar uma medida que não é padrão, basta digitar w-[numpx] ou h-[numpx] */}
          <p className="w-[360px] text-center leading-relaxed">
            {/* {' '} força o Typescript/Javascript a pular linha */}
            Você ainda não registrou nenhuma lembrança, comece a{' '}
            <a href="" className="underline hover:text-gray-50">
              criar agora
            </a>
            !
          </p>
        </div>
      </div>
    </main>
  )
}

// export default function Home() {
//   return (
//     <h1>
//       Hello World
//       {/* Componentes - Funções que retornam HTML */}
//       {/* <Botao/> */}

//       {/* Propriedades é uma forma de passar informações a um Componente */}
//       <Botao titulo='Vitu'/>
//       <Botao titulo='Virtu'/>
//       <Botao titulo='Vi'/>
//     </h1>
//   )
// }
