import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { Autoplay } from "swiper/modules";
const Informacion = () => {
    const servicios = [
        {
          id: 1,
          servicio: "LITIGACIÓN",
          descripcion: "Estrategia, compromiso y preparación para hacer valer tus derechos.",
          enlace: "/",
          imagen: "https://cdn.pixabay.com/photo/2016/07/29/15/40/handshake-1558222_960_720.jpg" // Imagen representativa de litigación
        },
        {
          id: 2,
          servicio: "ASESORÍA LEGAL",
          descripcion: "Asesoramiento experto para garantizar el cumplimiento legal y proteger tus intereses.",
          enlace: "/",
          imagen: "https://cdn.pixabay.com/photo/2017/08/01/08/29/people-2561332_960_720.jpg" // Imagen representativa de asesoría legal
        },
        {
          id: 3,
          servicio: "DERECHO CONSTITUCIONAL",
          descripcion: "Defensa y promoción de los derechos fundamentales y garantías constitucionales.",
          enlace: "/",
          imagen: "https://cdn.pixabay.com/photo/2016/10/06/22/21/law-1728493_960_720.jpg" // Imagen representativa de derecho constitucional
        },
        {
          id: 4,
          servicio: "DERECHO LABORAL",
          descripcion: "Asesoramiento en relaciones laborales, derechos de los trabajadores y cumplimiento normativo.",
          enlace: "/",
          imagen: "https://cdn.pixabay.com/photo/2016/11/29/06/15/business-1868728_960_720.jpg" // Imagen representativa de derecho laboral
        },
        {
          id: 5,
          servicio: "DERECHO CIVIL",
          descripcion: "Solución de conflictos entre particulares en materias como contratos, propiedad y familia.",
          enlace: "/",
          imagen: "https://cdn.pixabay.com/photo/2016/09/17/20/58/hammer-1678984_960_720.jpg" // Imagen representativa de derecho civil
        },
        {
          id: 6,
          servicio: "DERECHO PENAL",
          descripcion: "Defensa legal en casos de acusaciones criminales y protección de tus derechos.",
          enlace: "/",
          imagen: "https://cdn.pixabay.com/photo/2017/06/26/22/23/handcuffs-2446712_960_720.jpg" // Imagen representativa de derecho penal
        },
        {
          id: 7,
          servicio: "DERECHO AMBIENTAL",
          descripcion: "Asesoramiento en normativas medioambientales y sostenibilidad.",
          enlace: "/",
          imagen: "https://cdn.pixabay.com/photo/2016/11/08/05/26/earth-1807521_960_720.jpg" // Imagen representativa de derecho ambiental
        },
        {
          id: 8,
          servicio: "DERECHO EMPRESARIAL - CORPORATIVO",
          descripcion: "Consultoría legal para empresas en aspectos corporativos y comerciales.",
          enlace: "/",
          imagen: "https://cdn.pixabay.com/photo/2017/08/01/00/25/people-2569234_960_720.jpg" // Imagen representativa de derecho empresarial
        },
        {
          id: 9,
          servicio: "CASOS PRO BONO",
          descripcion: "Compromiso con la comunidad ofreciendo servicios legales gratuitos a quienes lo necesitan.",
          enlace: "/",
          imagen: "https://cdn.pixabay.com/photo/2017/02/05/12/40/volunteer-2035043_960_720.jpg" // Imagen representativa de casos pro bono
        },
        {
          id: 10,
          servicio: "OTROS SERVICIOS",
          descripcion: "Servicios legales adicionales adaptados a tus necesidades específicas.",
          enlace: "/",
          imagen: "https://cdn.pixabay.com/photo/2016/11/19/14/00/law-1834100_960_720.jpg" // Imagen representativa de otros servicios legales
        }
      ];
       
      
//   return (
    // style={{backgroundColor: "transparent",clipPath: "polygon(36% 0, 56% 8%, 100% 0, 100% 100%, 0 100%, 0 0)" }}

//     <section className="bottom-0 bg-transparent overflow-hidden py-10">
//   <ul className="flex justify-center items-center gap-6 flex-wrap">
//     {servicios.map((servicio) => (
//       <li
//         key={servicio.id}
//         className="bg-violet-500 w-[280px] h-[400px] p-5 rounded-3xl text-white shadow-lg flex flex-col justify-between items-center transition-all duration-300 hover:scale-105 hover:bg-violet-600"
//       >
//         <div className="w-full h-40 overflow-hidden rounded-xl">
//           <img
//             src={servicio.imagen}
//             alt={`Imagen de ${servicio.servicio}`}
//             className="w-full h-full object-cover"
//           />
//         </div>
//         <h2 className="font-bold text-xl mt-3">{servicio.servicio}</h2>
//         <p className="text-sm text-center text-gray-200">{servicio.descripcion}</p>
//         <a
//           href={servicio.enlace}
//           className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-xl mt-3 transition-all duration-300 text-center w-full"
//         >
//           Más Información
//         </a>
//       </li>
//     ))}
//   </ul>
// </section>
//   )

    return (
      <section className="relative py-10 px-[20px]  bg-gray-200">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
        //   pagination={{ clickable: false }}
          navigation
          autoplay={{
            delay: 2500,  
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        //   
          modules={[Pagination, Navigation,Autoplay]}

          className="w-[100%] "
        >

          {servicios.map((servicio) => (
            <SwiperSlide key={servicio.id}>
              <li className="m-4 mx-12  bg-azul-100 p-5 rounded-3xl text-white shadow-lg flex flex-col justify-between items-center transition-all duration-300 hover:scale-105 hover:bg-blue-900 h-[400px] ">
                
                <div className="w-full h-40 overflow-hidden rounded-xl">
                  <img src={servicio.imagen} alt={servicio.servicio} className="w-full h-full object-cover" />
                </div>

                <h2 className="font-bold text-xl mt-3">{servicio.servicio}</h2>
                
                <p className="text-sm text-center text-gray-200">{servicio.descripcion}</p>
                
                <a href={servicio.enlace} className="bg-azul-100 hover:bg-blue-600 text-white px-4 py-2 rounded-xl mt-3 transition-all duration-300 text-center w-full">
                  Más Información
                </a>

              </li>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    );
  };



export default Informacion
