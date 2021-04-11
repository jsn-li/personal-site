import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from "@fortawesome/free-brands-svg-icons";

type IconLinkProps = {
  href: string,
  icon: IconDefinition
}

export default function IconLink({ href, icon }: IconLinkProps) {
  return (
    <a href={href}>
      <FontAwesomeIcon className="inline-block m-1 h-9 w-9" icon={icon} />
    </a>
  )
}
