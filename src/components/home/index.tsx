import { motion } from 'framer-motion';
import { SelectedPage, SideAnimation } from '@/shared/enums';
import useMediaQuery from '@/hooks/useMediaQuery';
import ActionButton from '../buttons/ActionButton';
import MyClasses from '@/shared/tw-classes';
import SideAnimationDiv from '../animations/SideAnimationDiv';
import LearnMore from '../buttons/LearnMore';

import HomePageText from '@/assets/HomePageText.png';
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";


interface IProps {
  setSelectedPage: (value: SelectedPage) => void;
}

const Home = ({
  setSelectedPage
}: IProps) => {
  const isAboveMediumScreen = useMediaQuery('(min-width: 1060px)');
  return <section
          id={SelectedPage.Home}
          className='gap-16 bg-gray-20 py-10 md:h-full md: pb-0'>
            <motion.div className='md:flex mx-auto w-5/6 items-center justify-center md:h-5/6'
            onViewportEnter={() => setSelectedPage(SelectedPage.Home)}>
              <div className='z-10 mt-32 md:basis-3/5'>
                <SideAnimationDiv className='md:-mt-20' side={SideAnimation.Left}>
                  <div className='relative'>
                    <div className='before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext'>
                      <img src={HomePageText} alt='home-page-text' />
                    </div>
                  </div>

                  <p className='mt-8 text-sm'>
                    Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
                    Studios to get the Body Shapes That you Dream of.. Get Your Dream
                    Body Now.
                  </p>
                </SideAnimationDiv>
                <SideAnimationDiv className='mt-8 flex items-center gap-8' side={SideAnimation.Right}>
                  <ActionButton setSelectedPage={setSelectedPage}>
                    Join Now
                  </ActionButton>
                  <LearnMore setSelectedPage={setSelectedPage}/>
                </SideAnimationDiv>
              </div>
              <div className='flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end'>
                <img src={HomePageGraphic} alt='home-page-graphic' />
              </div>
            </motion.div>

            {isAboveMediumScreen && (
            <div className='h-[150px] w-full bg-primary-100 py-10'>
              <div className='mx-auto w-5/6 '>
                <div className={`${MyClasses.flexBetween} gap-8`}>
                  <img src={SponsorRedBull} alt='redbull-sponsor' />
                  <img src={SponsorForbes} alt='forbes-sponsor' />
                  <img src={SponsorFortune} alt='Fortune-sponsor' />
                </div>
              </div>
            </div>
            )}
          </section>
}

export default Home