import { NextPage } from 'next'
import Presentacion from './presentacion'
import Convercion from './convercion'

interface Props {}

const PresentacionConvercion: NextPage<Props> = ({}) => {
  return (
    <div className='md:flex justify-around'>
        <Presentacion />
        <Convercion/>
        
    </div>
  )
}

export default PresentacionConvercion