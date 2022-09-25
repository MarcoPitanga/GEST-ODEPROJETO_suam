/* import { Link } from 'react-router-dom'
 */
export const Button = ({ text, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-[#5DC5F1] text-white py-3 px-4 rounded-2xl hover:bg-[#3da9d8] ${className}`}
    >
      {text}
    </button>
  )
}
