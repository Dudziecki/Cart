import styled from "styled-components";

export const Menu = styled.nav`
    ul {
        list-style: none;
        display: flex;
       
        li{
            margin: 0;
        }
        li > a {
            color: green;
           
        }

        li + li {
            margin-left: 20px;
        }
    }

`