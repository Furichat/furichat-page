import Image from 'next/image'

export default function Navbar(){
    return(
        <div>
            <nav>
                <Image
                src="/logo-furia.png"
                width={1487}
                height={528}
                alt="Logo de letras escrito FURIA"
                priority
                quality={100}
                className='w-28 h-9 '/>
                <div className="hidden md:grid grid-flow-col gap-8 items-center font-bold">
                    <a href='#quem somos' className='uppercase'>Quem somos</a>
                    <a href='#noticias' className='uppercase'>Notícias</a>
                    <a href='#apparel' className='uppercase'>Furia Apparel</a>
                    <a href='#chat' className='uppercase'>Chat de jogos</a>
                    <a href='#patrocinadores' className='uppercase'>Patrocinadores</a>
                </div>
                </nav>
        </div>
    )
}