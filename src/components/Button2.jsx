const Button2 = ({ label, textColor, bgColor }) => {
  return (
    <button className={`${bgColor ? bgColor: "bg-[#5368DF]"} ${textColor ? textColor : 'text-white'} px-4 py-4 font-bold rounded-md shadow-md capitalize ${bgColor === 'bg-gray-300' ? 'border-gray-300 border-2': ''} 
    max-sm:text-sm max-2xs:px-2 max-2xs:py-2 max-`}>
        {label}
    </button>
  )
}

export default Button2
