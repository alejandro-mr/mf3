import GlassCard from "../../../../components/GlassCard/GlassCard";
import FacebookLink from "../../../../components/FacebookLink/FacebookLink";
import InstagramLink from "../../../../components/InstagramLink/InstagramLink";
import TiktokLink from "../../../../components/TiktokLink/TiktokLink";

function SocialSection() {
  return (
    <div className="section-wrapper max-sm:px-4 bg-gray-5 relative items-center pt-[6.5rem] pb-[8.25rem] z-0">
      <GlassCard>
        <div className="h-1.5 w-44 bg-gold self-center" />
        <div className="max-w-[44.75rem] pt-[3.125rem] pb-16 px-[6.5rem] flex flex-col gap-9">
          <p className="font-bebas text-3xl text-center tracking-wide">
            ¡No te quedes atrás y síguenos!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 font-semibold text-lg">
            <FacebookLink />
            <InstagramLink />
            <TiktokLink />
          </div>
        </div>
      </GlassCard>
      <div className="absolute bottom-0 inset-x-0 h-full bg-gray-5/75 mix-blend-multiply -z-10" />
    </div>
  );
}

export default SocialSection;
