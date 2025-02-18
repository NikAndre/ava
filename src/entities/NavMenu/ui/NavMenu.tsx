import {
  NavigationMenu,
  NavigationMenuList,
} from "@/shared/components/ui/navigation-menu";
import {
  LINK_ADMIN,
  LINK_HOME,
  LINK_METRICS,
  LINK_MODELS,
  LINK_REQUEST,
} from "@/app/router/constants";
import { MenuLink } from "@/entities/NavMenu/ui/MenuLink.tsx";

const linksArray = [
  { name: "Главная", link: LINK_HOME },
  { name: "Метрики", link: LINK_METRICS },
  { name: "Модели", link: LINK_MODELS },
  { name: "Заявки", link: LINK_REQUEST },
  { name: "Администратор", link: LINK_ADMIN },
];

export const NavMenu = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {linksArray.map((elem) => {
          return <MenuLink key={elem.name} data={elem} />;
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
};
