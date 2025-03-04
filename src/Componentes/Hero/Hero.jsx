
const Hero = () => {
  return (
    <section className=" w-full h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-5xl mx-auto text-center px-6">
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
    </section>
  );
}

export default Hero
