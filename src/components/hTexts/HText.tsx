import { ReactNode } from 'react'

interface IProps {
  children: ReactNode
}

const HText = ({children}: IProps) => {
  return <h2
          className='basis-3/5 font-montserrat text-3xl font-bold'>
            {children}
        </h2>
}

export default HText