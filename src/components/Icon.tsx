import type { ComponentType, SVGProps } from 'react'
import type { IconName } from '../types/IconNames'
import { BriefcaseIcon, CalendarIcon, ChartIcon, ClipboardIcon, ClockIcon, MailIcon, MapIcon, MenuIcon, SearchIcon, TargetIcon } from '../shared/svg'
import SoftwareConsultingIcon from '../shared/svg/SoftwareConsultingIcon'
import { CodeIcon } from '../shared/svg/CodeIcon'
import ArtificialIntelligenceIcon from '../shared/svg/ArtificialIntelligenceIcon'
import DigitalTransformationIcon from '../shared/svg/DigitalTransformationIcon'

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

const iconMap: Record<IconName, IconComponent> = {
  map: MapIcon,
  clock: ClockIcon,
  mail: MailIcon,
  search: SearchIcon,
  menu: MenuIcon,
  clipboard: ClipboardIcon,
  chart: ChartIcon,
  briefcase: BriefcaseIcon,
  target: TargetIcon,
  calendar: CalendarIcon,
  softwareconsulting: SoftwareConsultingIcon,
  code: CodeIcon,
  ai: ArtificialIntelligenceIcon,
  digitaltransform: DigitalTransformationIcon
}

type IconProps = SVGProps<SVGSVGElement> & {
  name: IconName;
};

const Icon = ({ name, ...props }: IconProps) => {
  const Component = iconMap[name]

  return <Component {...props} />
}

export default Icon