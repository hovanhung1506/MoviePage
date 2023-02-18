const Button = ({
  onClick,
  className,
  children,
  type = 'button',
  color,
  full = false
}) => {
  let bgColor = 'bg-primary'
  switch (color) {
    case 'primary':
      bgColor = 'bg-primary'
      break
    case 'secondary':
      bgColor = 'bg-secondary'
      break
    default:
      break
  }
  return (
    <button
      type={type}
      className={`px-6 py-3 mt-auto font-semibold capitalize rounded-lg ${bgColor} ${className} ${
        full ? 'w-full' : ''
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
export default Button
