import styled from "styled-components";
import { AiFillDelete } from "react-icons/ai";

export const Div = styled.div`
  display: flex;
  flex: 1;
  margin: 7px;
  flex-direction: column;
  background: #86368C;
  border-radius: 34px;
`;

export const Tabela = styled.div`
 width: 557px;
    height: 826px;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  margin-top: -1900px;


  .Img{
    width: 255px;
    border-radius: 140px;
    margin-left: 142px;
    position: absolute;
    margin-top: -163px;
  }
`;
export const Wrapper = styled.div`
  height: 440vh;
  background-color: #F8FFAD;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Row = styled.div`
  display: flex;
  flex-direction:column;
  align-items: center;
  background: yellow;
    padding: 10px;
    border-radius: 9px;
    width: 519px;
    /* margin-top: 10px; */
    margin: 7px;
    cursor: pointer;
    transition: all 0.2s;

    &:hover{
      background: #DFD044;
    }
`;

export const Label = styled.label`
  padding-left: 10px;
  color: purple;
  font-size: 16px;

`;

export const Titulo = styled.h4`
  padding-left: 10px;
  color: yellow;
    font-size: 27px;
    text-align: center;
    margin-top: 20px;

`;

export const ButtonLink = styled.button`

border-radius: 10px;
    width: 107px;
    height: 29px;
    background: #F1A4F6;
    border-color: #561a56;

    a{
      color: white;
      text-decoration: none;

    }
    
 
`;


export const ButtonIcon = styled.button`
  background-color: transparent;
  border: none;
`;



export const Footer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 202px;
`;
