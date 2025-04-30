interface ButtonProps{
    texto: string
    link: string
}

export default function Button(props: ButtonProps){
    return(
        <div>
            <a 
          href={props.link}
          target='_blank'
          rel='noopener noreferrer'>
            <button className="items-center bg-black text-white py-2 px-4 rounded-md font-bold hover:bg-gray-800 transition-colors w-36 h-12">{props.texto}</button>
          </a>
        </div>
    )
}