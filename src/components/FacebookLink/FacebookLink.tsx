import Facebook from "../SocialIcons/Facebook";

const URL = "";

type Props = {
  iconOnly?: boolean;
};

function FacebookLink({ iconOnly }: Props) {
  return (
    <a
      href={URL}
      className="flex gap-1 items-center hover:text-green-neutral group"
    >
      <Facebook styles="fill-white group-hover:fill-green-neutral" />
      {!iconOnly && "/Mexicof3"}
    </a>
  );
}

export default FacebookLink;
