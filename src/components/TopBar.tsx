import Icon from './Icon';
import SocialIcon from './SocialIcon';

const TopBar = () => {
  return (
    <div className="w-[var(--content-width)] mx-auto min-h-12 flex items-center gap-[34px] border-b border-white/20 text-white/70 text-xs">
      <span className="inline-flex items-center gap-2.5 whitespace-nowrap">
        <Icon name="map" />
        99 Plain Street, Perth, Western Australia
      </span>

      <span className="inline-flex items-center gap-2.5 whitespace-nowrap">
        <Icon name="clock" />
        1-5 days of the week
      </span>

      <span className="inline-flex items-center gap-2.5 whitespace-nowrap">
        <Icon name="mail" />
        contact@Codeflux.com
      </span>

      <div className="flex gap-2 ml-auto" aria-label="Social links">
        <a href="/" aria-label="Facebook" className="w-[34px] h-[34px] inline-grid place-items-center rounded-full bg-white/10 text-white text-xs font-extrabold">
          <SocialIcon name="facebook" />
        </a>

        <a href="/" aria-label="Twitter" className="w-[34px] h-[34px] inline-grid place-items-center rounded-full bg-white/10 text-white text-xs font-extrabold">
          <SocialIcon name="twitter" />
        </a>

        <a href="/" aria-label="Instagram" className="w-[34px] h-[34px] inline-grid place-items-center rounded-full bg-white/10 text-white text-xs font-extrabold">
          <SocialIcon name="instagram" />
        </a>
      </div>
    </div>
  );
};

export default TopBar;