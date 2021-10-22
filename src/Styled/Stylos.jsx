import styled from "styled-components";


const header = styled.header`
     
     display: flex;
     width: 100%;
     height: 50px;
     background-color: #131921;
`;

const headerD = styled.header`
     
     font-size: 10px;
     color: white;
     margin-left: 30px;
     height: 40px;
     margin-top: -3px;
     font-family: Arial, Helvetica, sans-serif;
`;

const pheader = styled.p`
     
     font-size: 10px;
     font-family: Arial, Helvetica, sans-serif;
     padding: 10px 0px 12px 12px;
    
`;

const h3 = styled.h3`
     
     font-size: 13px;
     width: 120px;
     margin-top: -20px;
     color: #ffffff;
    
`;

const logo = styled.img`
     
     width: 8em;
     height: 3em;
     margin-left: 20px;
     margin-top: 0px;
`;

const searchCategoria = styled.main`
     width: 50%;
     height: 35px;
     margin-left: 20px;
     margin-top: 4px;
     border: 4px solid #F0AD64; 
     border-radius: 15px;
`;

const header2 = styled.header`
    display: flex;
    list-style: none;
   height: 40px;
   padding-top: 6px;
   padding-bottom: 6px;
`;

const header2C = styled.header`
    background-color: #242F3E;
    color: white;
`;

export const HeaderDOS = header2
export const HeaderDOSC = header2C
export const SearchCategoria = searchCategoria
export const Pheader = pheader
export const H3 = h3
export const Logo = logo
export const HeaderD = headerD
export const HeaderT = header