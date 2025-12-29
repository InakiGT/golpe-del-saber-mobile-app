export default function JoinForm({ setJoined, joinParty, partyId }) {
  const handleSubmit = (event) => {
    event.preventDefault()

    const form = new FormData(event.currentTarget)
    const teamName = form.get('name')

    if ( teamName.trim() === '' ) return alert('El nombre del equipo no puede ir vacío')

    joinParty(teamName, partyId)
    setJoined(true)
  }

  return (
    <section className="w-10/12 mx-auto bg-main-color text-white px-5 py-8 rounded-lg shadow-2xl shadow-black mt-20">
      <h2 className="text-3xl font-bold text-center">Te estás uniendo a la sala:</h2>
      <p className="text-center font-light text-gray-200">{ partyId }</p>

      <form onSubmit={ handleSubmit } className="mt-6 md:w-1/2 mx-auto flex flex-col">
        <div className="flex flex-col">
          <label htmlFor="name" className="text-xl font-light">Nombre de tu equipo</label>
          <input type="text" className="bg-dark-gray px-2 py-3 mt-2 rounded-lg border-2 border-borders" name="name" id="name" placeholder="Los zorros" />
        </div>
        <button className="cursor-pointer mx-auto bg-main-yellow text-2xl mt-4 text-black font-black py-2 px-4 rounded-lg drop-shadow-[0_0_6px_rgba(250,204,21,0.8)] hover:scale-110 transition-transform" type="submit">Unirse</button>
      </form>
    </section>
  )
}
