import {
    NavigationMenuItem,
    navigationMenuTriggerStyle,
} from "@/shared/components/ui/navigation-menu";
import { NavLink } from "react-router-dom";

type IProps = {
    data: {
        name:string
        link:string;
    };
}

export const MenuLink = ({data}:IProps) => {
    return (
        <NavigationMenuItem>
            <NavLink
                to={data.link}
                style={({isActive}) => ({ color: isActive ? "var(--primary)" : "#94A3B8" })}
                className={navigationMenuTriggerStyle()}
            >
                {data.name}
            </NavLink>
        </NavigationMenuItem>
    );
};
