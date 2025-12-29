import PlayerCard from './PlayerCard'

export default function Teams({ teams, pressTeamAndAttack }) {
  return (
    <section className="flex flex-col gap-5 mt-10 w-11/12 mx-auto">
      <h3 className='text-white text-2xl text-center font-bold animate-pulse'>Si eres el equipo que responde, elige un jugador a atacar</h3>
      <span className='text-center font-light text-gray-200 animate-pulse'>Si eres de otro equipo no lo intentes, no funcionará</span>
      {
        teams.map(player =>
          <PlayerCard
            key={player.teamId}
            player={ player }
            pressTeamAndAttack={ pressTeamAndAttack }
          />
        )
      }
    </section>
  )
}
