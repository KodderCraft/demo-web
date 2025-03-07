import palacio from "./palacio_completo.avif"


const Hero = () => {

  return (
    <section className="relative bg-transparent "  >
      
      <div className= " bg-transparent bg-center bg-cover bg-no-repeat  bg-fixed h-[100vh] w-[100%] " style={{backgroundImage: `url(${palacio})` }} >
        {/* <iframe className= { `absolute top-0 left-0 saturate-40 w-full h-full ` }   src="https://player.vimeo.com/video/1063223433?h=f0b401a94e&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=1&amp;player_id=0&amp;app_id=58479&amp;autoplay=1&amp;controls=0&mp;&loop=1"    frameborder="0" allow="autoplay;loop; controls; fullscreen; picture-in-picture; clipboard-write; encrypted-media;" title="video_corporativo"></iframe> */}
        <div style={{clipPath: `polygon(40% 0%, 50% 100%, 0 100%, 0 0%) ` }} className="  sm:flex hidden  h-[100vh] w-[80%] bg-azul-100/80 " > </div>
      </div>



      {/* <div className="max-w-5xl mx-auto text-center px-6 bg-amber-400">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
          Defensa Legal Confiable y Segura
        </h1>
        <p className="mt-4 text-lg text-gray-700">
          Protegemos tus derechos con profesionalismo y experiencia. Consulta gratuita.
        </p>
        <button className="mt-6 px-6 py-3 bg-azul-100/85 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-700 transition">
          Contactanos
        </button>
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/tu-imagen.jpg')] bg-cover bg-center opacity-20"></div>
    */}
    </section>
  );

}
export default Hero
