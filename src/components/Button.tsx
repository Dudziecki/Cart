import styled, {css} from "styled-components";

type btnTypeProps ={
    color?: string
    textColor?: string
    isBordered?: boolean
}
export const Button = styled.button<btnTypeProps>`
    width: 86px;
    height: 30px;
    background-color: ${props => props.color};
    cursor: pointer;
    border-radius: 5px;
    font-size: 10px;
    margin-left: 5px;
    color: ${props => props.textColor};
    ${props => props.isBordered === true && css<btnTypeProps>`
        border:2px solid ${props=>props.textColor};
        &:hover{
            border:none;
            background-color: ${props => props.textColor};
            color: ${props => props.color};
            transition:.2s
        }
    `};
    ${props => props.isBordered === false && css<btnTypeProps>`
        border:none;
        &:hover{
           border:2px solid ${props=>props.color};
            background-color: ${props => props.textColor};
            color: ${props => props.color};
            transition:.2s
        }
    `};
    &:last-child{
        margin-left:12px;
    }
    
`