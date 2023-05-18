import { SelectedPage, SideAnimation } from '@/shared/enums';
import { motion } from 'framer-motion';
import SideAnimationDiv from '../animations/SideAnimationDiv';
import HText from '../hTexts/HText';
import { IClass, classes } from './classesArray';
import Class from './Class';

interface IProps {
  setSelectedPage: (value: SelectedPage) => void;
}

const OurClasses = ({
  setSelectedPage
}: IProps) => {
  return <section
            id={SelectedPage.OurClasses}
            className='w-full bg-primary-100 py-20'>
              <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}>
                  <SideAnimationDiv
                    className='mx-auto w-5/6'
                    side={SideAnimation.Left}>
                      <div className='md:w-3/5'>
                        <HText>OUR CLASSES</HText>
                        <p className='py-5'>
                          Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
                          tellus quam porttitor. Mauris velit euismod elementum arcu neque
                          facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
                          enim mattis odio in risus nunc.
                        </p>
                      </div>
                    </SideAnimationDiv>
                    <div className='mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden'>
                      <ul className='w-[2800px] whitespace-nowrap'>
                        {classes.map((item: IClass, index) => (
                          <Class
                            key={`${item.name}-${index}`}
                            name={item.name}
                            description={item.description}
                            image={item.image}/>))}
                      </ul>
                    </div>
                </motion.div>
  </section>
}

export default OurClasses