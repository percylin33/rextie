import { NextPage } from 'next'
import CardComentario from './card-comentarios'

interface Props {}

const Comentarios: NextPage<Props> = ({}) => {
  return (
    <div>
        <div>
            <p className='text-[#0032ff] py-8 font-extrabold text-3xl text-center'>Descubre lo que dicen nuestros clientes</p>
        </div>
        <div className='mb-6'>
            <p className='text-center text-xs'>Conoce de primera mano lo que es cambiar dinero con Rextie.</p>
        </div>
        <div >
            <CardComentario />
        </div>
    </div>
  )
}

export default Comentarios