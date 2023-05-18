import { motion } from 'framer-motion';
import { SelectedPage } from '@/shared/enums';
import LearnMore from '../buttons/LearnMore';

interface IProps {
  icon: JSX.Element;
  title: string;
  description: string;
  setSelectedPage: (value: SelectedPage) => void;
}

const Benefit = ({
  icon,
  title,
  description,
  setSelectedPage
}: IProps) => {
  return <motion.div
          className='mt-5 rounded-md border-2 border-gray-500 px-5 py-16 text-center'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 }
            }}>
          <div className='mb-4 flex justify-center'>
            <div className='rounded-full border-2 border-gray-100 bg-primary-100 p-4'>{icon}</div>
          </div>
          <h4 className='font-bold'>{title}</h4>
          <p className='my-3'>{description}</p>
          <LearnMore setSelectedPage={setSelectedPage}/>
        </motion.div>
}

export default Benefit