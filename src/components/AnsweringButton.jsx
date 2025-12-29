
export default function AnsweringButton({ pressButtonAndAnswer, question }) {
  return (
    <div className="w-full flex flex-col gap-10 items-center justify-center min-h-dvh">
      <h2 className="font-bold text-3xl text-white text-center">
        { question }
      </h2>
      <button
        className="
          bg-main-yellow
          text-black
          font-black
          rounded-full
          w-80
          h-80
          text-4xl
          text-center

          /* depth */
          shadow-[0_12px_0_rgb(202,138,4)]
          drop-shadow-[0_0_6px_rgba(250,204,21,0.8)]

          /* interaction */
          transition-all
          duration-150
          ease-out
          hover:brightness-105
          active:translate-y-2
          active:shadow-[0_4px_0_rgb(202,138,4)]
          active:brightness-95

          cursor-pointer
          select-none
        "
        onClick={ pressButtonAndAnswer }
        type="button"
      >
        Responder
      </button>
    </div>
  )
}
