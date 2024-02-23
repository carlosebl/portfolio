import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo>Sobre mim</Titulo>
    <Paragrafo tipo="principal">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, veniam
      porro quo vitae cum doloremque sit dolorum maiores quae distinctio eum
      assumenda similique autem adipisci aspernatur repellendus rem animi
      minima?
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=carlosebl&show_icons=true&theme=dracula" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=carlosebl&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </section>
)

export default Sobre
