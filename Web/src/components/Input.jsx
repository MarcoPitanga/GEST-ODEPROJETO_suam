export const Input = ({ type, titulo, valor, onChange, disabled = false, className }) => {
  return (
    <div className="relative mb-4 font-semibold text-[#5DC5F1]">
      <label htmlFor={titulo} className="leading-7 text-md">
        {titulo}
      </label>
      <input
        id={titulo}
        type={type}
        value={valor}
        disabled={disabled}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full bg-[#D9D9D9] focus:bg-transparent rounded-lg border-2 border-[#5DC5F1] text-black text-base outline-none py-2 px-3 ${className}`}
      ></input>
    </div>
  )
}
