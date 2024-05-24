import TiktokIcon from "../SocialIcons/Tiktok";

const URL = "";

type Props = {
  iconOnly?: boolean;
};

function TiktokLink({ iconOnly }: Props) {
  return (
    <a
      href={URL}
      className="flex gap-1 items-center hover:text-green-neutral group"
    >
      <TiktokIcon styles="fill-white group-hover:fill-green-neutral" />
      {!iconOnly && "@mexicofff"}
    </a>
  );
}

export default TiktokLink;
