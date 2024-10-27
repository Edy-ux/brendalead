export interface Data {
    name?: string
    avatar?: string
    links?: Link[]
    socials?: Social[]
    plans?: Plan[]
  }
  
  export interface Link {
    title: string
    href: string
    image?: string
  }
  
  export interface Social {
    title: string
    href: string
  }
  
  
  export interface Plan {
    id?: number
    href: string,
    alt: string
    comodato:string
    name: string
    benefits?: String[]
}

export interface CardProp {
  href: string,
  alt: string
  comodato:string
  name: string
  benefits?: String[]
}