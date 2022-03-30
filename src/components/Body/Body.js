import './Body.css'
import { Card } from './Card/Card'
import { aniversariantes } from '../../Data/Aniversariantes'

export default function Body() {
    return (
      <>
  
        <div className='sec_aniversario'>
            <h1 className="title_aniversario">Aniversariantes Geral</h1>
            <div className='container_card_home'>
  
                {
                aniversariantes.map((item) => (
                <Card key={item.id} aniver={item} />
                ))
                }
  
            </div>
        </div>
      </>
      
    )
}