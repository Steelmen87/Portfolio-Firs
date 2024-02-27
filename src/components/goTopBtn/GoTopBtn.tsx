import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {Icon} from "../icon/Icon";
import {animateScroll as scroll} from "react-scroll";

export const GoTopBtn = () => {
    const [showBtn, setShowBtn] = useState(false)
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                setShowBtn(true)
            } else {
                setShowBtn(false)
            }
        })
    }, []);
    return (
        <>{showBtn && <StylGoTopBtn onClick={() => scroll.scrollToTop()}>
            <Icon iconId={'goTop'} viewBox={'0 0 16 15'} height={'15'} width={'16'}/>
        </StylGoTopBtn>
        }</>
    );
};
const StylGoTopBtn = styled.button`
    background-color: rgba(0, 0, 0, 0.3);
    padding: 8px;
    position: fixed;
    right: 30px;
    bottom: 30px;
    border-radius: 10px;
`
