
import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';


type CardProp = {
    href: string,
    alt: string

}
const PlanCard: FC<CardProp> = ({ href, alt }) => {
    return (



        <div className='mb-3 "basis-1/3 flex-1 hover:-translate-y-4 duration-200 hover:animate-pulse cursor-pointer"'>
            <Link href={"https://api.whatsapp.com/send?phone=554732634973"}  target="_blank" rel="noopener noreferrer" >
                <Image
                    alt={alt}
                    src={href}
                    width={293}
                    height={425}
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    style={{
                        
                    }}
                />
            </Link>
        </div>
    )
}

export default PlanCard;

