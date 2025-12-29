export default function PlayerCard({ player, pressTeamAndAttack }) {
  return (
    <div
      onClick={ () => pressTeamAndAttack(player.teamId) }
      className="bg-main-color gap-3 p-8 rounded-[60px] border lg:w-8/12 lg:mx-auto border-borders flex flex-col items-center drop-shadow-amber-50 backdrop-blur-xl cursor-pointer hover:scale-110 transition-transform">
      <div className="flex gap-2 w-full sm:justify-start items-center">
        <img
          src="https://png.pngtree.com/thumb_back/fh260/background/20230613/pngtree-close-up-of-a-caracal-cat-image_2911443.jpg"
          className="w-8 h-12 gap-2 md:w-15 md:h-15 rounded-full object-cover"
        />
        <div>
          <h3 className="text-white text-lg font-bold">{ player.teamName }</h3>
        </div>
      </div>
    </div>
  )
}
