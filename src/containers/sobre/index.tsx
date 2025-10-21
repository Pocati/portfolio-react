import Titulo from "../../components/titulo";
import Paragrafo from "../../components/Paragrafo";
import { GithubSecao } from "./styles";

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="secundario">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam facilis nisi non eius maxime voluptate deleniti similique dolorem, doloribus ullam assumenda unde quis! Praesentium tempore unde eligendi optio ipsum aliquam.

    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=Pocati&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=Pocati&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </section>
)

export default Sobre
