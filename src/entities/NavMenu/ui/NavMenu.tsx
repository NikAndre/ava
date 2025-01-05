import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/shared/components/ui/navigation-menu"
import {
  LINK_ADMIN,
  LINK_HOME,
  LINK_METRICS,
  LINK_MODELS
} from "@/app/router/constants";

import {
  useLocation,
} from 'react-router-dom';

export const NavMenu = () => {
  const {pathname} = useLocation()

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink active={pathname === LINK_HOME} href={LINK_HOME} className={navigationMenuTriggerStyle()}>
            Главная
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink active={pathname === LINK_METRICS} href={LINK_METRICS} className={navigationMenuTriggerStyle()}>
            Метрики
          </NavigationMenuLink>
        </NavigationMenuItem>
          <NavigationMenuLink active={pathname === LINK_MODELS} href={LINK_MODELS} className={navigationMenuTriggerStyle()}>
            Модели
          </NavigationMenuLink>
        <NavigationMenuItem>
          <NavigationMenuLink active={pathname === LINK_HOME} href={LINK_HOME} className={navigationMenuTriggerStyle()}>
            Заявки
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink active={pathname === LINK_ADMIN} href={LINK_ADMIN} className={navigationMenuTriggerStyle()}>
            Администратор
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}