const Button = ({label, uppercase}) => {
  return (
    <button className={`bg-[#FA5757] text-white px-8 text-md py-2 rounded-lg ${uppercase ? 'uppercase':''} hover:text-[#FA5757] hover:bg-white border-2 border-[#FA5757] `}>
        {label}
    </button>
  )
}

export default Button
