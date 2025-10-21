import styled from "styled-components"
import Paragrafo from "../Paragrafo"
import Titulo from "../titulo"
import { Card, LinkBotao } from "./style"


const Projeto = () => {
  return (
  <Card>
    <Titulo>Projeto Lista de Tarefas</Titulo>
    <Paragrafo tipo="secundario">Lista de Tarefas feita com VueJS</Paragrafo>
    <LinkBotao>Visualizar</LinkBotao>
  </Card>
  )
}

export default Projeto
