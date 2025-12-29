import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { io } from 'socket.io-client'
import { v4 as uuid } from 'uuid'

export default function useGame() {
  const [ params ] = useSearchParams()
  const partyId = params.get('party')

  const [ teamId ] = useState(uuid())
  const [ teams, setTeams ] = useState([])
  const [ joined, setJoined ] = useState(false)
  const [ question, setQuestion ] = useState(null)
  const [ attakingTime, setAttackingTime ] = useState(false)
  const [ answeringTeam, setAnsweringTeam ] = useState(null)
  const [ isGameFinished, setIsGameFinished ] = useState(false)

  const socket = io(import.meta.env.VITE_SOCKET_SERVER_URL, {
    autoConnect: false,
    path: import.meta.env.VITE_SOCKET_PATH,
  })

  const joinParty = (teamName, partyId) => {
    socket.emit('join-party-team', { teamName, partyId, teamId })
  }

  const pressButtonAndAnswer = () => {
    socket.emit('answer-message', { partyId, teamId })
  }

  const pressTeamAndAttack = (attackedTeam) => {
    if ( teamId !== answeringTeam ) return alert('No eres el equipo que puede atacar')
    if ( teamId === attackedTeam ) return alert('No puedes atacarte a ti mismo')
    socket.emit('attack-message', { partyId, attackingTeam: teamId, attackedTeam })
  }

  useEffect(() => {
    socket.connect()

    socket.on('party-started', (data) => {
      const { teams } = data.payload
      if ( teams.length === 4 ) return alert('El máximo de equipos es de 4')

      setTeams([ ...teams ])
    })

    socket.on('change-team-status', () => {
      setQuestion(null)
      setAttackingTime(false)
    })

    socket.on('attacking-time', (data) => {
      const { attacking } = data.payload
      setAttackingTime(attacking)
    })

    socket.on('party-message', (data) => {
      const { teamId } = data.payload
      setAnsweringTeam(teamId)
      setAttackingTime(false)
    })

    socket.on('next-question', (data) => {
      const { question } = data.payload
      setQuestion(question)
    })

    socket.on('finish-game', () => {
      setAnsweringTeam(null)
      setAttackingTime(false)
      setQuestion(null)
      setIsGameFinished(true)
    })
  }, [ socket, teams ])

  return {
    teams,
    joined,
    partyId,
    question,
    joinParty,
    setJoined,
    attakingTime,
    isGameFinished,
    setAttackingTime,
    pressTeamAndAttack,
    pressButtonAndAnswer,
  }
}
