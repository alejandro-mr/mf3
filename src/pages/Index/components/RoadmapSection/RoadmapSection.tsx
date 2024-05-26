function RoadmapSection() {
  return (
    <div className="section-wrapper bg-gray-6 bg-[url('/roadmap-bg.png')] bg-contain bg-no-repeat px-10 pt-[21.375rem] items-center">
      <div className="bg-gray-2 text-gray-6 rounded-[20px] pt-[3.875rem] pb-[9.813rem] px-24 w-full">
        <div className="flex flex-col gap-4 items-center pb-28 text-gray-5">
          <p className="font-bold text-2xl text-black pb-4">
            Comienza tu historia en <span className="text-red-dark">MF3</span> y
            sé tu mejor versión
          </p>
          <p className="max-w-3xl text-center text-gray-5 font-semibold text-lg">
            Si quieres formar parte de la MF3, tu primera prueba será medirte en
            los clasificatorios (Qualifiers MF3) que se están llevando a cabo en
            todo el país.
          </p>
          <p className="max-w-3xl text-center text-gray-5">
            Inscríbete y participa contra otros deportistas que buscan abrirse
            camino en el Functional Fitness, gracias a su formato Online, podrás
            participar desde el Box en el que estás inscrito y así ver en donde
            estás en el mundo del F.F. de México.
          </p>
        </div>
        <div className="grid grid-cols-[minmax(0,_1fr)_minmax(1rem,_14.5rem)_minmax(0,_1fr)]">
          <div className="flex flex-col items-end gap-5">
            <p className="font-bebas text-6xl	text-green-neutral">
              Regionales 2024
            </p>
            <div className="text-right flex flex-col items-end gap-4">
              <p>
                Los eventos regionales son el primer evento presencial del
                calendario 2024, eventos que tomarán lugar en diferentes
                regiones de nuestro país. En ellos podrás competir contra otros
                deportistas que fueron seleccionados a través de los eventos
                online y competencias sancionadas.
              </p>
              <p>
                Los ganadores de sus categorías en los regionales, tendrán
                acceso para competir en el Nacional 2024, busca en nuestras
                redes la última información sobre tu evento más cercano
              </p>
              <p className="font-semibold">
                ¡Sé parte de uno de los eventos confirmados en tu región y
                acércate un paso más hacia la grandeza!
              </p>
              <a className="bg-white text-gray-2 rounded-3xl py-1.5 px-7 mt-2">
                Próximamente
              </a>
            </div>
          </div>
          <div className="row-span-3 flex flex-col items-center mt-[22px] mb-[350px] relative">
            <span className="h-full w-px bg-white absolute" />
            <span className="h-4 w-4 rounded-full bg-green-neutral/80 relative before:absolute before:h-2 before:w-2 before:inset-0 before:m-auto before:bg-white before:rounded-full"></span>
            <span className="mt-[420px] mb-auto h-4 w-4 rounded-full bg-red-neutral/80 relative before:absolute before:h-2 before:w-2 before:inset-0 before:m-auto before:bg-white before:rounded-full"></span>
            <span className="h-4 w-4 rounded-full bg-black relative before:absolute before:h-2 before:w-2 before:inset-0 before:m-auto before:bg-white before:rounded-full"></span>
          </div>
          <div></div>
          <div></div>
          <div className="flex flex-col items-start gap-5">
            <p className="font-bebas text-6xl	text-red-neutral">Nacional 2024</p>
            <div className="text-left flex flex-col items-start gap-4">
              <p>
                En el nacional, los mejores atletas se enfrentarán en el mayor
                evento del Functional Fitness en nuestro país. Los mejores
                atletas de los eventos regionales tendrán su lugar en la
                competencia y podrán competir por formar parte de la Delegación
                Mexicana que nos representará en Hungría para los World 2024.
              </p>
              <p>
                Mantente al tanto en nuestras redes de los resultados de los
                regionales, y las últimas noticias sobre el Nacional 2024
              </p>
              <p className="font-semibold">
                ¡Conviértete en uno de los mejores atletas de tu país y
                representa a tu nación en el escenario mundial!
              </p>
              <a className="bg-white text-gray-2 rounded-3xl py-1.5 px-7 mt-2">
                Próximamente
              </a>
            </div>
          </div>
          <div className="flex flex-col items-end gap-5">
            <p className="font-bebas text-6xl	text-black">Worlds 2024</p>
            <div className="text-right flex flex-col items-end gap-4">
              <p>
                El mundial en Hungría es el escenario más importante del
                Functional Fitness. El evento organizado por la Federación
                Internacional de Functional Fitness reúne a los mejores atletas
                de más de 50 países en un solo lugar y México es uno de ellos.
              </p>
              <p>
                Busca más información en nuestras redes o en las redes de la
                Federación Internacional de Functional Fitness (IF3)
              </p>
              <p className="font-semibold">
                ¡Participa, compite con los mejores atletas de tu país y llega
                hasta la mayor justa del Functional Fitness!
              </p>
              <a className="bg-white text-gray-2 rounded-3xl py-1.5 px-7 mt-2">
                Próximamente
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoadmapSection;
