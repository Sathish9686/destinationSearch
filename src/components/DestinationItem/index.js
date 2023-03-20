import './index.css'

const DestinationItem = props => {
  const {destinationsList} = props
  const {name, imgUrl} = destinationsList

  return (
    <li className="destination-item">
      <img src={imgUrl} className="destination-image" alt={name} />
      <p className="name">{name}</p>
    </li>
  )
}

export default DestinationItem
