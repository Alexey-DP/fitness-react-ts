import { motion } from 'framer-motion';
import { SelectedPage, SideAnimation } from '@/shared/enums';
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";
import HText from '../hTexts/HText';
import { benefits, IBenefit } from './benefitsArray';
import Benefit from './Benefit';
import ActionButton from '../buttons/ActionButton';
import SideAnimationDiv from '../animations/SideAnimationDiv';
import SideAnimationP from '../animations/SideAnimationP';

interface IProps {
  setSelectedPage: (value: SelectedPage) => void;
}

const Benefits = ({setSelectedPage}: IProps) => {
  return <section
          id={SelectedPage.Benefits}
          className='mx-auto mix-h-full w-5/6 py-20'>
          <motion.div
            onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}>
            <SideAnimationDiv className='md:my-5 md:w-3/5' side={SideAnimation.Left}>
              <HText>MORE THAN JUST GYM.</HText>
              <p className="my-5 text-sm">
                We provide world class fitness equipment, trainers and classes to
                get you to your ultimate fitness goals with ease. We provide true
                care into each and every member.
              </p>
            </SideAnimationDiv>
            <div
              className='mt-5 items-center justify-between gap-8 md:flex'>
              {benefits.map((benefit: IBenefit) => (
                <Benefit
                  key={benefit.title}
                  icon={benefit.icon}
                  title={benefit.title}
                  description={benefit.description}
                  setSelectedPage={setSelectedPage}/>
              ))}
            </div>

            <div className='mt-16 items-center justify-between gap-20 md:mt-28 md:flex'>
              <img
                className='mx-auto'
                src={BenefitsPageGraphic}
                alt='benefits-page-graphic' />
              <div>
                <div className='relative'>
                  <div className='before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves'>
                    <SideAnimationDiv side={SideAnimation.Left}>
                      <HText>
                        MILLIONS OF HAPPY MEMBERS GETTING{' '}
                        <span className='text-primary-500'>FIT</span>.
                      </HText>
                    </SideAnimationDiv>
                  </div>
                </div>

                <div>
                  <SideAnimationP className="my-5" side={SideAnimation.Right}>
                    Nascetur aenean massa auctor tincidunt. Iaculis potenti amet
                    egestas ultrices consectetur adipiscing ultricies enim. Pulvinar
                    fames vitae vitae quis. Quis amet vulputate tincidunt at in
                    nulla nec. Consequat sed facilisis dui sit egestas ultrices
                    tellus. Ullamcorper arcu id pretium sapien proin integer nisl.
                    Felis orci diam odio.
                  </SideAnimationP>
                  <SideAnimationP className="mb-5" side={SideAnimation.Left}>
                    Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
                    tellus quam porttitor. Mauris velit euismod elementum arcu neque
                    facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
                    enim mattis odio in risus nunc.
                  </SideAnimationP>
                </div>

                <SideAnimationDiv className='relative mt-16' side={SideAnimation.Right}>
                  <div className='before:absolute before:-bottom-20 before:left-[150px] before:z-[1] before:content-sparkles'>
                    <ActionButton setSelectedPage={setSelectedPage}>
                      Join Now
                    </ActionButton>
                  </div>
                </SideAnimationDiv>
              </div>
            </div>
          </motion.div>

        </section>
}

export default Benefits