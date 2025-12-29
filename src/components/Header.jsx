
export default function Header() {
  return (
   <header className="bg-dark-gray text-white py-4 px-8 border-b border-borders flex items-center justify-between relative">
      <div className="flex items-center gap-5">
        <div className="bg-main-yellow drop-shadow-[0_0_6px_rgba(250,204,21,0.8)] backdrop-blur-xl w-10 h-10 rounded-full flex items-center justify-center text-black relative">
          <svg
            width={30}
            height={30}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13 2L4 14H11L9 22L20 10H13L13 2Z"
              fill="#000"
            />
          </svg>
        </div>
        <h1 className="font-bold text-2xl">GolpeDelSaber</h1>
      </div>
    </header>
  )
}
