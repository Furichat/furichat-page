import Image from 'next/image'

export default function HomePage() {
  return (
    <div className="items-center justify-items-center px-28 font-[family-name:var(--font-inter)]">
      <nav className="p-14 grid grid-flow-col gap-20">
      <Image
      src="/logo-furia.png"
      width={109}
      height={38}
      alt="logo de letras escrito FURIA"
      priority
      quality={100}
    />
        <div className="grid grid-flow-col gap-8 items-center font-bold">
          <a>QUEM SOMOS</a>
          <a>NOTÍCIAS</a>
          <a>FURIA APPERAL</a>
          <a>CHAT DE JOGOS</a>
          <a>PATROCINADORES</a>
        </div>
      </nav>
      <div className='mt-16 flex flex-col items-center'>
        <h1 className='text-5xl font-bold italic'>NÓS SOMOS FURIOSOS</h1>
        <p className='py-10 px-3 text-justify'><span className="font-bold">Somos FURIA</span>. Uma organização de esports que nasceu do desejo de representar o Brasil no CS e conquistou muito mais que isso: expandimos nossas ligas, disputamos os principais títulos, adotamos novos objetivos e ganhamos um propósito maior. Somos muito mais que o sucesso competitivo.<br/><span className="font-bold">Somos um movimento sociocultural</span>.<br/>Nossa história é de <span className="font-bold">pioneirismo, grandes conquistas e tradição</span>. Nosso presente é de <span className="font-bold">desejo, garra e estratégia.</span> A pantera estampada nopeito estampa também nosso <span className="font-bold">futuro de glória</span>. Nossos pilares de performance, lifestyle, conteúdo, business, tecnologia e social são os principais constituintes do movimento FURIA, que representa uma unidade que respeita as individualidades e impacta positivamente os contextos em que se insere. <span className="font-bold">Unimos pessoas e alimentamos sonhos dentro e fora dos jogos</span></p>

        <div className="w-full flex justify-center">
          <Image 
            src="/banner.png"
            width={1280}
            height={509}
            alt="Colagem de três imagens de times variados da fúria"
            priority
            quality={100}
            className='w-screen'
          />
        </div>
        <div className='p-12 grid grid-flow-col gap-14 items-center'>
          <Image
          src="/cs2.png"
          width={116}
          height={116}
          alt='logo CSGO 2'
          ></Image>
          <Image
          src="/cs1.png"
          width={217}
          height={122}
          alt='logo CSGO'
          ></Image>
          <Image
          src="/porsche_cup.png"
          width={228}
          height={74}
          alt='logo Porsche Cup'
          ></Image>
          <Image
          src="/league-of-legends.png"
          width={224}
          height={86}
          alt='logo de League of Legends'
          ></Image>
        </div>
        <div className='p-12 grid grid-flow-col gap-14 items-center'>
        <Image
          src="/kings_league.png"
          width={116}
          height={151}
          alt='logo de League of Legends'
          ></Image>
          <Image
          src="/rainbow6.png"
          width={153}
          height={153}
          alt='logo de League of Legends'
          ></Image>
        </div>
      </div> 

      <footer></footer>
    </div>
  )
}
