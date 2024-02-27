import React, {useState} from 'react';
import {ItemType} from "../mobileMenu/MobileMenu";
import {ListItem, Mask, NavLink} from "./styles";
import {theme} from "../../../styles/Theme";

type PropsMenu = {
    items: ItemType[]
}
export const Menu = ({items}: PropsMenu) => {
    const [padding, setPadding] = useState(0)
    return (
        <ul>
            {items.map(item => {
                const offSetCalc = function () {
                    setPadding('contacts' === item.href ? -50 : 0)
                }
                console.log(padding)
                return (
                    <ListItem key={item.id}>
                        <NavLink
                            to={`${item.href}`}
                            activeClass="active"
                            spy={true}
                            smooth={true}
                            onClick={offSetCalc}
                            offset={padding}

                        >
                            {item.text}
                            <Mask theme={theme}>
                        <span>
                        {item.text}
                        </span>
                            </Mask>
                            <Mask theme={theme}>
                        <span>
                        {item.text}
                        </span>
                            </Mask>
                        </NavLink>
                    </ListItem>
                )
            })}
        </ul>
    );
};
