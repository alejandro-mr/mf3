import GlassCard from "../../../components/GlassCard/GlassCard";
import runningSvg from "../../../assets/running.svg";

function AthleteGlassCard() {
  return (
    <GlassCard>
      <div className="flex flex-col flex-1 px-10 pt-6 pb-8 gap-3.5 max-w-[21.25rem]">
        <div className="self-center relative">
          <img src={runningSvg} className="absolute m-auto inset-0" />
          <div className="rounded-full h-20 w-20 bg-green-neutral opacity-20 blur-lg"></div>
        </div>
        <p className="title">
          Afiliación <span className="text-green-neutral">Atleta</span>
        </p>
        <p className="font-semibold leading-6">
          Da el primer paso de tu carrera deportiva en la MF3, únete a la
          Federación como atleta y participa en nuestro Calendario 2024.
        </p>
        <p className="leading-6">
          Tu historia en nuestro deporte comienza hoy, toma la decisión y únete
          a tu comunidad, afíliate y podrás competir por un lugar en el camino
          hacia Hungría en los Worlds 2024 de la IF3.
        </p>
        <div className="action-wrapper">
          <a className="button bg-green-neutral">Afiliarme</a>
        </div>
      </div>
    </GlassCard>
  );
}

export default AthleteGlassCard;
