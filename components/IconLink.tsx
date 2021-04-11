import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from "@fortawesome/free-brands-svg-icons";

type IconLinkProps = {
  className: string,
  href: string,
  icon: IconDefinition
}

export default function IconLink({ className, href, icon }: IconLinkProps) {
  return (
    <a href={href}>
      <FontAwesomeIcon className={`inline-block mx-2 my-1 h-8 w-8 ${className}`} icon={icon} />
    </a>
  )
}
