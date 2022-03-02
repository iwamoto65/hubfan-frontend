import useSWR, { SWRConfig } from "swr"
import { fetchPlayersData } from "../repositories/player"

export const getStaticProps = async () => {
  const players = await fetchPlayersData();

  return {
    props: {
      fallback: {
        '/api/players': players
      }
    }
  }
}

const PlayersContainer = () => {
  const { data, error } = useSWR('/api/players')

  if (error) return <div>{ error }</div>
  if(!data) return <div>now fetching data...</div>

  return (
    <p>
      {data.map((player) =>
        <span key={ player.handle_name }>
          { player.handle_name }
          { player.birthday }
        </span>
      )}
    </p>
  )
}

const Home = ({ fallback }) => {
  return (
    <SWRConfig value={{ fallback }}>
      <PlayersContainer />
    </SWRConfig>
  )
}

export default Home
