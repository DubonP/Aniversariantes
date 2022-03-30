import './Card.css';

export function Card(props) {
    return (
      <div className="card_home_item">
        <div className='box_image'>
          <img src={props.aniver.image} className="image_card" />
        </div>
        <p>{props.aniver.titulo}</p>
        <p>{props.aniver.dataaniversario}</p>
      </div>
    )
  }