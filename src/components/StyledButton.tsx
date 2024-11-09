import styled, {css} from "styled-components";

type StyledbtnPropsType = {
    color?: string
    fontSize?: string
    primary?: boolean
    outlined?:boolean

}

export const StyledButton = styled.button<StyledbtnPropsType>`
    padding: 20px 15px;
    border: none;
    //background-color: blueviolet;
    background-color: ${props => props.color || "blueviolet"};
    border-radius: 5px;
    color: snow;
    font-size: 2rem;
    font-weight: bold;
    cursor: pointer;

    &:hover {
        background-color: #3d0606;
    }

    &:last-child {
        background-color: aqua;
    }
    
    ${props => props.primary && css<StyledbtnPropsType>`
        background-color: ${props => props.color || "blueviolet"};
        color: blueviolet;
    `}
    ${props=>props.outlined && css<StyledbtnPropsType>`
        background-color: ${props => props.color || "blueviolet"};
        color: red;
    `}
`