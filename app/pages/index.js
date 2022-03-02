import styles from '../styles/Home.module.css'

const Home = (props) => {
  return (
    <div className={styles.container}>
      <p>
        {props.players.map((player) =>
          <span key={player.handle_name}>
            {player.handle_name}
            <br />
          </span>
        )}
      </p>
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch("http://hubfan_rails_backend:3000/api/v1/players", { method: "GET" });
  const json = await res.json();

  return {
    props: {
      players: json
    }
  }
}

export default Home
