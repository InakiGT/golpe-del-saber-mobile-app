import Teams from '@/components/Tems'
import useGame from '@/hooks/useGame'
import Header from '@/components/Header'
import JoinForm from '@/components/JoinForm'
import GameOver from '@/components/GameOver'
import WaitingTime from '@/components/WaitingTime'
import AnsweringButton from '@/components/AnsweringButton'

export default function App() {
  const {
    teams,
    joined,
    partyId,
    question,
    setJoined,
    joinParty,
    attakingTime,
    isGameFinished,
    pressTeamAndAttack,
    pressButtonAndAnswer,
  } = useGame()

  const isWaitingTime = () => !question && !attakingTime && joined && !isGameFinished

  return (
    <div>
      <Header />

      <main>
        {
          !joined &&
          <JoinForm setJoined={ setJoined } joinParty={ joinParty } partyId={ partyId } />
        }
        {
          attakingTime &&
          <Teams pressTeamAndAttack={ pressTeamAndAttack } teams={ teams } />
        }
        {
          question &&
          <AnsweringButton question={ question } pressButtonAndAnswer={ pressButtonAndAnswer }  />
        }
        {
          isWaitingTime() &&
          <WaitingTime />
        }
        {
          isGameFinished &&
          <GameOver />
        }
      </main>
    </div>
  )
}
