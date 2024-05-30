import regionsMapSvg from "../../../../assets/regiones.svg";

function RegionsMap() {
  return (
    <div className="flex flex-col flex-auto w-full bg-gray-5 items-center text-white rounded-[1.25rem] pt-[4.25rem] px-[5.875rem] pb-[5.625rem]">
      <h2 className="font-bebas text-6xl mb-3 leading-[4.5rem]">
        Regiones MF3
      </h2>
      <img src={regionsMapSvg} className="mb-14" />
      <div className="flex flex-auto flex-wrap w-full justify-between">
        {Regions()}
      </div>
    </div>
  );
}

function Regions() {
  return (
    <>
      <div className="bg-gray-6 rounded-2xl p-6 text-xs">
        <p className="font-bebas text-green-neutral text-[1.375rem] leading-6">
          Región 1
        </p>
        <p className="pb-3 font-semibold text-gray-3 leading-5"># Vacantes</p>
        <ul className="leading-5">
          <li>BC</li>
          <li>BCS</li>
          <li>Chihuahua</li>
          <li>Durango</li>
          <li>Sinaloa</li>
          <li>Sonora</li>
        </ul>
      </div>

      <div className="bg-gray-6 rounded-2xl p-6 text-xs">
        <p className="font-bebas text-gold text-[1.375rem] leading-6">
          Región 2
        </p>
        <p className="pb-3 font-semibold text-gray-3 leading-5"># Vacantes</p>
        <ul className="leading-5">
          <li>Chiapas</li>
          <li>Campeche</li>
          <li>Quintana Roo</li>
          <li>Tabasco</li>
          <li>Veracruz</li>
          <li>Yucatán</li>
        </ul>
      </div>

      <div className="bg-gray-6 rounded-2xl p-6 text-xs">
        <p className="font-bebas text-violet-neutral text-[1.375rem] leading-6">
          Región 3
        </p>
        <p className="pb-3 font-semibold text-gray-3 leading-5"># Vacantes</p>
        <ul className="leading-5">
          <li>Coahuila</li>
          <li>Nuevo León</li>
          <li>San Luis Potosí</li>
          <li>Tamaulipas</li>
          <li>Zacatecas</li>
        </ul>
      </div>

      <div className="bg-gray-6 rounded-2xl p-6 text-xs">
        <p className="font-bebas text-red-neutral text-[1.375rem] leading-6">
          Región 4
        </p>
        <p className="pb-3 font-semibold text-gray-3 leading-5"># Vacantes</p>
        <ul className="leading-5">
          <li>Ciudad de México</li>
          <li>Estado de México</li>
          <li>Hidalgo</li>
          <li>Oaxaca</li>
          <li>Puebla</li>
          <li>Querétaro</li>
        </ul>
      </div>

      <div className="bg-gray-6 rounded-2xl p-6 text-xs">
        <p className="font-bebas text-mustard text-[1.375rem] leading-6">
          Región 5
        </p>
        <p className="pb-3 font-semibold text-gray-3 leading-5"># Vacantes</p>
        <ul className="leading-5">
          <li>Aguascalientes</li>
          <li>Colima</li>
          <li>Guanajuato</li>
          <li>Jalisco</li>
          <li>Michoacán</li>
          <li>Nayarit</li>
        </ul>
      </div>
    </>
  );
}

export default RegionsMap;
