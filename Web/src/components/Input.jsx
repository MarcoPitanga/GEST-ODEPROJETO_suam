import { IMaskInput } from 'react-imask'

export const Input = ({ type, titulo, valor, onChange, disabled = false, cpf = false, className }) => {
  return (
    <div className="relative mb-4 font-semibold text-[#5DC5F1]">
      <label htmlFor={titulo} className="leading-7 text-md">
        {titulo}
      </label>
      {!cpf && (
        <input
          id={titulo}
          type={type}
          value={valor}
          disabled={disabled}
          onChange={(e) => onChange(e.target.value)}
          className={`w-full bg-[#D9D9D9] focus:bg-transparent rounded-lg border-2 border-[#5DC5F1] text-black text-base outline-none py-2 px-3 ${className}`}
        />
      )}
      {cpf && (
        <IMaskInput
          mask="000.000.000-00"
          value={valor}
          onChange={(e) => onChange(e.target.value)}
          className={`w-full bg-[#D9D9D9] focus:bg-transparent rounded-lg border-2 border-[#5DC5F1] text-black text-base outline-none py-2 px-3 ${className}`}
        />
      )}
    </div>
  )
}
