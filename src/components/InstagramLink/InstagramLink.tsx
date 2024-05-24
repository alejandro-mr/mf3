import InstagramIcon from "../SocialIcons/Instagram";

const URL = "";

type Props = {
  iconOnly?: boolean;
};

function InstagramLink({ iconOnly }: Props) {
  return (
    <a
      href={URL}
      className="flex gap-1 items-center hover:text-green-neutral group"
    >
      <InstagramIcon styles="fill-white group-hover:fill-green-neutral" />
      {!iconOnly && "@mexicof3"}
    </a>
  );
}

export default InstagramLink;
