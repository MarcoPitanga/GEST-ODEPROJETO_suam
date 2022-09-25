import { Menu } from './../components/Menu'

export const Layout = ({ titulo, children }) => {
  return (
    <>
      <div className="w-screen h-screen bg-[#5DC5F1] flex justify-center items-center">
        <div className="w-full h-full xl:w-2/4 lg:w-3/4 lg:h-5/6 md:w-4/5 md:h-4/5 bg-white md:rounded-xl p-2 xl:p-4 flex flex-col items-center">
          <div className="text-4xl md:text-5xl mb-4 text-[#5DC5F1] font-black">{titulo}</div>
          <hr className="w-full h-5 border-[#5DC5F1]" />
          <Menu />
          <div className="mt-4 md:mt-8 lg:mt-12">{children}</div>
        </div>
      </div>
    </>
  )
}
