import { NextPage } from 'next'
import Presentacion from './presentacion'
import Convercion from './convercion'
import Bancos from './bancos'

interface Props {}

const PresentacionConvercion: NextPage<Props> = ({}) => {
  return (
    <div>
        <Presentacion />
        <Convercion/>
        <Bancos />
    </div>
  )
}

export default PresentacionConvercion