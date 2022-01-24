import React from "react";
import Container from "../../components/Container/Container";
import Button from "../../components/Button/Button";
import * as S from "./styles";
import { useNavigate } from "react-router-dom";
import useApi from "../../hooks/useApi";
import Foto from "../../img/laiza.png"

export default function SegundaTela() {
  const navigate = useNavigate();
  const { repositorio } = useApi();
  
  return (
    
    <S.Wrapper>
     
    <S.Tabela title="Segunda tela">
         <img src={Foto} className="Img"/>
      <S.Div>
      <S.Div>
      
      <S.Titulo> Laiza Benevides Sobral </S.Titulo>
        {repositorio.map((repository) => (
          
          <S.Row onClick={() => navigate("details")}>
              
            <S.ButtonIcon>
              <S.Label>{repository.name}</S.Label>
              {/* <S.Label>{repository.name}</S.Label> */}
            </S.ButtonIcon>
           
          </S.Row>
        ))}
      </S.Div>

        <S.Footer>
          <Button className="buttonback" name="Back" onClick={() => navigate("../")} />
        </S.Footer>
      </S.Div>
    </S.Tabela>
    </S.Wrapper>
  );
}
