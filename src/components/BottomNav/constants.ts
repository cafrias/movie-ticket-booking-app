import { BottomNavLinkProps } from "./BottomNavLink";
import HomeIcon from "./assets/Home.svg";
import LocationIcon from "./assets/Location.svg";
import TicketIcon from "./assets/Ticket.svg";
import CategoryIcon from "./assets/Category.svg";
import ProfileIcon from "./assets/Profile.svg";

export const BottomNavLinks: BottomNavLinkProps[] = [
  {
    icon: HomeIcon,
    href: "#",
    title: "Home",
  },
  {
    icon: LocationIcon,
    href: "#",
    title: "Location",
  },
  {
    icon: TicketIcon,
    href: "#",
    title: "Tickets",
  },
  {
    icon: CategoryIcon,
    href: "#",
    title: "Categories",
  },
  {
    icon: ProfileIcon,
    href: "#",
    title: "Profile",
  },
];
