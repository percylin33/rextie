import { NextPage } from 'next'
import Presentacion from './presentacion'
import Convercion from './convercion'

interface Props { }

const PresentacionConvercion: NextPage<Props> = ({ }) => {
  return (
    <div className=' xl:flex justify-center  mt-5 '>
      <div className='xl:w-full xl:flex justify-center xl:justify-between gap-10'>
        <Presentacion />
        <Convercion />

      </div>

    </div>
  )
}

export default PresentacionConvercion