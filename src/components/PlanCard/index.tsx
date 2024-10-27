"use client"
import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';


type CardProp = {
    href: string,
    alt: string
    comodato:string
    name: string
    benefits?: String[]
}
const PlanCard: FC<CardProp> = ({ href, alt, comodato, name, benefits}) => {

    let text = `**Olá Brenda**, gostaria de mais informações sobre o plano  de internet  ${name}. \n ${benefits?.map(b => `\n ${b}`)} \n º ${comodato}`
    
    if (typeof window !== "undefined") {
        text = window.encodeURIComponent(text);
      }
      
    

    return (

        <div   className=" group basis-1/3 flex-1 col-span relative w-full">
            <Link  href={`https://api.whatsapp.com/send?phone=554732634973&text=${text}`} 
                         target="_blank" rel="noopener noreferrer" >
                <Image
                    className="
                     marker:cursor-pointer
                     object-cover
                     transition
                     duration
                     rounded-md
                     shadow-xl
                     group-hover:opacity-90
                     sm:group-hover:opacity-0
                     
                     delay-300
                     
                    
                     "
                    alt={alt}
                    src={href}
                    width={293}
                    height={425}
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    style={{

                    }}
                />

                <div
                   className="
                   
                   opacity-0
                   absolute
                   top-0
                   
                   transition
                   duration-200
                   z-10
                   invisible
                   sm:visible
                   delay-300
                  
                   scale-0
                   group-hover:scale-110
                   group-hover:-translate-y-[1vw]
                   group-hover:translate-x-[1vw]
                   group-hover:opacity-100
                   "
                >
               
                <img
                    className="
                      cursor-pointer
                      object-cover
                      transition
                      duration
                      shadow-xl
                      rounded-t-md
                    "
                    src={href}
                    alt="Thumbnail"
                />
                </div>
            </Link>
        </div>
    )
}

export default PlanCard;

