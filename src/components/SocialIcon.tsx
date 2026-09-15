import FacebookIcon from "../shared/svg/social/FacebookIcon";
import InstagramIcon from "../shared/svg/social/InstagramIcon";
import LinkedinIcon from "../shared/svg/social/LinkedinIcon";
import XIcon from "../shared/svg/social/XIcon";
import type { SocialName } from "../types/SocialName";

type SocialIconProps = {
  name: SocialName;
};

const SocialIcon = ({ name }: SocialIconProps) => {
  return (
    <>
      {name === "facebook" && <FacebookIcon width={16} height={16}/>}
      {name === "twitter" && <XIcon width={14} height={14}/>}
      {name === "instagram" && <InstagramIcon width={18} height={18}/>}
      {name === "linkedin" && <LinkedinIcon width={14} height={14}/>}
    </>

  );
};

export default SocialIcon;