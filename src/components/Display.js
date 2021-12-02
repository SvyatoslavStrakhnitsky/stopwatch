const Display = ({time}) => {
  return (
    <div className="display">
      <span>{time[0]}</span>
      :
      <span>{time[1]}</span>
      :
      <span>{time[2]}</span>
    </div>
  )
}

export default Display