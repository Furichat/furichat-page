import Image from 'next/image'
import Button from './componets/button'

export default function HomePage() {
  return (
    <div className="flex flex-col w-full font-[family-name:var(--font-inter)]">
      <nav>
      <Image
      src="/logo-furia.png"
      width={1487}
      height={528}
      alt="Logo de letras escrito FURIA"
      priority
      quality={100}
      className='w-28 h-9 '
    />
        <div className="hidden md:grid grid-flow-col gap-8 items-center font-bold">
          <a href='#quem somos' className='uppercase'>Quem somos</a>
          <a href='#noticias' className='uppercase'>Notícias</a>
          <a href='#apparel' className='uppercase'>Furia Apparel</a>
          <a href='#chat' className='uppercase'>Chat de jogos</a>
          <a href='#patrocinadores' className='uppercase'>Patrocinadores</a>
        </div>
      </nav>

      {/* Ícone do telegram fixo para acessar o furibot */}
      <a 
        href="https://t.me/Furichat_bot" 
        target="_blank"
        rel="noopener noreferrer"
        className="fixed right-6 bottom-6 z-50 hover:scale-110 transition-transform"
      >
        <Image
          src="/telegram.png"
          width={529}
          height={529}
          alt="Ícone do Telegram"
          className="w-20 h-20 md:w-14 md:h-14"
        />
      </a>

      {/* Começo do conteúdo da página*/}
      <div className='grid grid-flow-row gap-20 md:gap-32 px-9 md:px-28 py-20 md:py-32 mt-24 md:mt-32 mx-auto w-full max-w-screen-xl'>

        <div className='grid grid-flow-row gap-8 md:gap-12 place-items-center text-center'>
          <h1 id='quem somos'>Nós somos furiosos</h1>
          <p className=''><span>Somos FURIA</span>. Uma organização de esports que nasceu do desejo de representar o Brasil no CS e conquistou muito mais que isso: expandimos nossas ligas, disputamos os principais títulos, adotamos novos objetivos e ganhamos um propósito maior. Somos muito mais que o sucesso competitivo.<br/><span>Somos um movimento sociocultural</span>.<br/>Nossa história é de <span>pioneirismo, grandes conquistas e tradição</span>. Nosso presente é de <span>desejo, garra e estratégia.</span> A pantera estampada nopeito estampa também nosso <span>futuro de glória</span>. Nossos pilares de performance, lifestyle, conteúdo, business, tecnologia e social são os principais constituintes do movimento FURIA, que representa uma unidade que respeita as individualidades e impacta positivamente os contextos em que se insere. <span>Unimos pessoas e alimentamos sonhos dentro e fora dos jogos</span></p>
          <div className="w-full flex justify-center overflow-hidden">
            <Image 
              src="/banner.png"
              width={1280}
              height={509}
              alt="Colagem de três imagens dos times de Futebol, Porsche cup e o time de LOL da Fúria"
              priority
              quality={100}
              className='w-full'
            />
          </div>
          <div className='grid grid-cols-2 md:grid-flow-col gap-8 md:gap-14 items-center place-items-center'>
            <Image
            src="/cs2.png"
            width={116}
            height={116}
            alt='Logo do jogo CSGO 2, Homem apontado arma para a direita'
            ></Image>
            <Image
            src="/cs1.png"
            width={217}
            height={122}
            alt='Logo do jogo CSGO, Homem apontado arma para a direita com o texto CS na esquerda e GO na direita'
            ></Image>
            <Image
            src="/porsche_cup.png"
            width={228}
            height={74}
            alt='Logo escrito da Porsche Carrera Cup'
            ></Image>
            <Image
            src="/league-of-legends.png"
            width={224}
            height={86}
            alt='Logo escrito do jogo League of Legends'
            ></Image>
          </div>
          <div className='p-8 md:p-12 grid grid-flow-col gap-10 md:gap-14 items-center justify-center'>
          <Image
            src="/kings_league.png"
            width={116}
            height={151}
            alt='Logo Amarelo da Kings League, Homem de Barba grande com coroa'
            ></Image>
            <Image
            src="/rainbow6.png"
            width={153}
            height={153}
            alt='Logo do jogo Rainbow Six Siege, um 6 grande e uma arma no lugar da bola do 6'
            ></Image>
          </div>
        </div>

        <div className='grid grid-flow-row gap-6 md:gap-9 items-center place-items-center'>
          <h1 id='noticias'>Todas Notícias sobre a Furia</h1>
          <p>Conheça o themove.gg, o portal de notícias sobre esports pela Furia. Feito para você acompanhar tudo que acontece na cena</p>

          <div className='items-center grid grid-flow-row md:grid-flow-col gap-8 md:gap-36 justify-center'>
            <Image
            src='/the-move.png' 
            width={260}
            height={28}
            alt='Logo escrito The move, com letras cada uma com uma fonte diferente'
            ></Image>
            <Button texto='Acesse aqui' link='https://themove.gg/'></Button>
          </div>

          <div className="w-full flex justify-center overflow-hidden">
            <Image
            src='/the-move-print.png'
            width={1040}
            height={432}
            alt='Print tirado do site the move com algumas notícias e a barra de navegação'
            className='w-full'>
            </Image>
          </div>
        </div>

        <div className='grid grid-flow-row gap-6 md:gap-9 items-center place-items-center'>
          <h1 id='apparel'>Vista a Furia</h1>
          <p>A Fúria é a nossa loja online de roupas com estilo único e moderno. Oferecemos uma seleção completa de peças de qualidade - desde camisetas e moletons confortáveis até jaquetas e acessórios que complementam seu visual.</p>
          <Button texto='Acesse a loja' link='https://www.furia.gg/'></Button>
          <div className="w-full flex justify-center overflow-hidden">
            <Image
            src='/panel-adidas.png'
            width={1040}
            height={575}
            alt='Colagem de fotos de modelos e torcedoras da Fúria usando as camisetas da Fúria da adidas'
            className='w-full'>
            </Image>
          </div>
        </div>

        <div className='grid grid-flow-row gap-8 md:gap-14 items-center place-items-center'>
          <h1 id='chat'>Conheça o Furichat</h1>
          <div>
            <p>Furichat é o chatbot para fãs que querem saber de tudo que ta rolando com o Time da FÚRIA no CS:GO.
              <br/><br/><span>Podendo saber:</span><br/><br/>
            </p>
            <ul>
              <li>Quando rolam os próximos jogos da FÚRIA! ⏰</li>
              <li>Placares ao vivo dos jogos atuais! 📊</li>
              <li>Quem são os guerreiros na line principal do time! 💪</li>
            </ul>
          </div>
          <Button texto='Acesse o chat' link='https://t.me/Furichat_bot'></Button>
        </div>

        <div className='grid grid-flow-row gap-8 md:gap-14 items-center place-items-center'>
          <h1 id='patrocinadores'>Nossos patrocinadores</h1>
          <div className='grid grid-cols-2 md:grid-flow-col gap-10 md:gap-20 items-center place-items-center'>
            <Image
            src='/adidas-logo.png'
            width={177}
            height={177}
            alt='Logo da adidas'
            className='w-24 md:w-auto'
            ></Image>
            <Image
            src='/logo-cruzeiro-do-sul.png'
            width={1758}
            height={53}
            alt='Logo Universidade Cruzeiro do Sul'
            className='w-36 md:w-52 h-10 md:h-14'
            ></Image>
            <Image
            src='/lenovo.png'
            width={173}
            height={436}
            alt='Logo Lenovo'
            className='w-24 md:w-auto'
            ></Image>
            <Image
            src='/pokerstars.png'
            width={1630}
            height={311}
            alt='Logo pokerstars'
            className='w-36 md:w-52 h-8 md:h-11'
            ></Image>
          </div>
          <div className='grid grid-flow-col gap-10 md:gap-20 items-center place-items-center'>
            <Image
              src='/hellmanns.png'
              width={583}
              height={297}
              alt='Logo azul da Hellmanns'
              className='w-36 md:w-48 h-20 md:h-24'
              ></Image>
              <Image
              src='/redbull.png'
              width={1530}
              height={246}
              alt='Logo da RedBull e dois touros vemelhos batendo de frente com um sol se pondo atrás'
              className='w-60 md:w-80 h-10 md:h-12'
              ></Image>
          </div>
        </div>
      </div>

      <footer>
        <Image
        src='/furia-pantera.png'
        width={756}
        height={739}
        alt='Logo da Fúria da pantera negra em visão lateral rugindo'
        className='w-24 h-24'
        ></Image>

        <div className='grid grid-flow-row gap-2.5'>
          <p className='uppercase font-bold'>Políticas</p>
          <ul className='grid grid-flow-row gap-2'>
            <li><a
            href="https://www.furia.gg/termos-condicoes"
            target='_blank'
            rel='noopener noreferrer'>
              Termos e Condições</a></li>
            <li><a 
            href="https://www.furia.gg/politica-privacidade"
            target='_blank'
            rel='noopener noreferrer'>
              Política de Privacidade</a></li>
          </ul>
        </div>

        <div className='grid grid-flow-row gap-4 place-items-center'>
          <p className='uppercase font-bold'>Siga a Furia</p>
          <a href="https://www.instagram.com/furiagg/"
          target='_blank'
          rel='noopener noreferrer'>
            <Image
            src='/instagram.png'
            width={20}
            height={20}
            alt='Logo do Instagram'
            ></Image>
          </a>
        </div>

      </footer>
    </div>
  )
}
