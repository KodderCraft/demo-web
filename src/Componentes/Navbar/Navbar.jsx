import logo from "./logo_tranp.png";
import libra from "./libra.png";
import { useState } from "react";

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
const Navbar = () => {
    const [open, setOpen] = useState(true);

    const menu_mobil = () =>{
        setOpen (!open)
    };
    

  return (
        <nav className="fixed z-2  h-[50px] md:h-[80px]  top-0 left-0   w-full  flex justify-between items-center py-[5px] sm:py-[10px] font-medium font-ubuntu px-8 md:px-25 lg:px-45 xl:px-60 bg-azul-100/85 transition-colors duration-200  hover:bg-azul-100">
        
        {/* menu para escritorio */}

        
        <img  src={logo} alt="logo"  className=" scale-200  h-auto  w-[75px] transition-all duration-300   hover:scale-210  select-none"/>
       

            <ul className=" gap-3 md:gap-10 lg:gap-15 hidden sm:flex " >
                {link_nav.map((datos) => (<li key={datos.id}><a /*target="__blank"*/ href={datos.link} 
                className="text-amber-50  transition-all duration-300   inline-block hover:scale-110 ">{datos.nombre}</a></li>)
                )}
            </ul>  
         
         {/* BOTON menu para mobil */}
        <button onClick={menu_mobil} className="sm:hidden scale-y-120 text-[40px]  text-amber-50   cursor-pointer " >{open ? (<i class="bi bi-list  transition-all duration-400"></i>) : (<i className="bi bi-x "></i>)}
            </button>
        
        {/* menu mobil  */}
    <div className={` absolute top-[100%] left-0   h-screen  justify-end transition-all duration-300 ${open? "bg-transparent ": "bg-azul-100/35 cursor-pointer flex sm:hidden w-screen"} ` } onClick={()=>setOpen(true)}>
        <div onClick={(e) => e.stopPropagation()} className={ ` cursor-default absolute  flex sm:hidden flex-col justify-items-center gap-[60px] bg-azul-100/90  h-screen w-3xs  transition-all duration-300   ${open ? ("left-[-400px] transition-all duration-300 ") : ("left-[0] transition-all duration-300   ")}`} >
            {/* otras paginas */}
            <ul>
                {
                    link_nav.map( (datos) => (
                        <li key={datos.id} className=" cursor-pointer text-amber-50 transition-colors duration-200 hover:bg-hoverazul/10 w-full  px-6 py-4">
                            <a href={datos.link} >{datos.nombre}</a>
                        </li>                            
                    ))
                }
                
            </ul>
            
            {/* redes sociales */}
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
            <img src={libra} alt="justicia - equilibrio" className="fil  w-[70px] mx-auto"/>
            </div>
        </div>
        
        </nav>
    
  )
}

export default Navbar
