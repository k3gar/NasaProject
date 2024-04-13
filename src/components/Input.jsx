export const Input = ({ ...props }) => {
  return (
    <input
      required
      type='text'
      {...props}
      className='  w-full h-12 p-3 outline-none bg-slateOpacity  rounded-lg transition-colors hover:bg-slate-700/90 '
    />
  )
}
