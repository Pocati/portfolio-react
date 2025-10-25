import Avatar from "../../components/avatar"
import Paragrafo from "../../components/Paragrafo"
import Titulo from "../../components/titulo"
import { Descricao, BotaoTema, SideBarContainer } from "./styles"


const SideBar = () => (
  <aside>
    <SideBarContainer>
      <Avatar />
      <Titulo fontSize={20}>Hipócrates Matheus</Titulo>
      <Paragrafo tipo="secundario">
        Pocati
      </Paragrafo>
      <Descricao tipo="principal">
        Desenvolvedor Front-End Jr.
      </Descricao>
      <BotaoTema>Trocar Tema</BotaoTema>
    </SideBarContainer>
  </aside>
)


export default SideBar
