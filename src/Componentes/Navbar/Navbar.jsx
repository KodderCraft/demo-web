import logo from "./logo_tranp.png";
const Navbar = () => {
    const link_nav= [
        {   id : 1,
            nombre : "Home",
            link : "/"
        },
        {   id : 2,
            nombre : "Nosotros",
            link : "/"
        },
        {   id : 3,
            nombre : "Servicios",
            link : "/"
        },
        {   id : 4,
            nombre : "Contacto",
            link : "/"
        }
    ]

    const inco_nav = [
        {id : 1,
         nombre : "facebook",
         icono : "bi bi-facebook",
         link: "https://www.facebook.com/share/1BxKWKKFba/"
        },
        {id : 2,
            nombre : "instagram",
            icono : "bi bi-instagram",
            link: "https://www.instagram.com/connley.abgs.ec/"
           },
        
           {id : 3,
            nombre : "linkedin",
            icono : "bi bi-linkedin",
            link: "https://www.linkedin.com/company/connley-abogados-in/"
           },
           {id : 4,
            nombre : "tiktok",
            icono : "bi bi-tiktok",
            link: "https://www.tiktok.com/@connley.abg.ec?_t=ZM-8uCboXlVnEt&_r=1"
           },
           
           
                   
    ]

  return (
        <nav className="relative md:fixed h-auto  w-full  sm:flex justify-between items-center py-3 font-medium font-ubuntu px-5 md:px-25 lg:px-45 xl:px-60 bg-azul-100/97 backdrop-blur-xs">
        


        <img  src={logo} alt="logo"  className=" h-[60px] w-auto transition-all duration-300  inline-block hover:scale-105  select-none"/>

            <ul className=" gap-3 md:gap-10 lg:gap-15 hidden sm:flex " >
                {link_nav.map((datos) => (<li key={datos.id}><a /*target="__blank"*/ href={datos.link} 
                className="text-amber-50  transition-all duration-300   inline-block hover:scale-110 ">{datos.nombre}</a></li>)
                )}
            </ul>

         
            
         <div className="flex flex-col justify-between sm:hidden bg-azul-100/90 absolute top-[100%] h-[88vh] w-3xs right-0 ">
            <ul>
                {
                    link_nav.map( (datos) => (
                        <li key={datos.id} className=" text-amber-50 transition-colors duration-200 hover:bg-hoverazul/10 w-full  px-6 py-4">
                            <a href={datos.link} >{datos.nombre}</a>
                        </li>                            
                    ))
                }
                
            </ul>
            <ul className="flex justify-around ">
                {
                    inco_nav.map(({id, icono, link}) => (
                        <li key={id} className=" scale-125 my-[30px] hover:scale-150 transition-transform duration-300" >
                            <a target="__blank" href={link} className={`text-amber-50  ${icono}`} > </a>
                        </li>
                    )

                    )
                }
            </ul>
        </div>
        </nav>
    
  )
}

export default Navbar
