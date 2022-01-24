import React from "react";
import Container from "../../components/Container/Container";
import Button from "../../components/Button/Button";
import * as S from "./styles";
import { useNavigate } from "react-router-dom";
import useApi from "../../hooks/useApi";

export default function Details() {
  const navigate = useNavigate();
  const { repositorio } = useApi();
  return (
    
    <S.Wrapper>
    <S.Tabela title="Detalhes">
      <S.Div>
      <S.Div>
      <S.Titulo> Detalhes dos repositórios </S.Titulo>
        {repositorio.map((repository) => (
          <S.Row>
              
            <S.ButtonIcon>
              <S.Label>  {repository.name}</S.Label>
              {/* <S.Label>{repository.name}</S.Label> */}
            </S.ButtonIcon>
            <S.Label>Linguagem utilizada: {repository.language}</S.Label>
            <S.ButtonLink><a href={repository.html_url}> Acesse aqui </a>  </S.ButtonLink> 
           
          </S.Row>
        ))}
      </S.Div>

        <S.Footer>
          <Button className="buttonback" name="Back" onClick={() => navigate("../segundatela")} />
        </S.Footer>
      </S.Div>
    </S.Tabela>
    </S.Wrapper>
  );
}
