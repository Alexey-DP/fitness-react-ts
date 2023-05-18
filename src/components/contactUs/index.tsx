import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { SelectedPage, SideAnimation } from '@/shared/enums';
import SideAnimationDiv from '../animations/SideAnimationDiv';
import HText from '../hTexts/HText';
import MyClasses from '@/shared/tw-classes';

import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png";


interface IProps {
  setSelectedPage: (value: SelectedPage) => void;
}

const ContactUs = ({
  setSelectedPage}: IProps) => {
    const {
      register,
      trigger,
      formState: { errors }
    } = useForm();

    const onSubmit = async (e: any) => {
      const isValid = await trigger();
      if(!isValid) {
        e.preventDefault();
      }

    }


  return <section
          id={SelectedPage.ContactUs}
          className='mx-auto w-5/6 pt-24 pb-32'>
            <motion.div
              onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}>
              <SideAnimationDiv
                className='md:w-3/5'
                side={SideAnimation.Left}>
                  <HText>
                    <span className="text-primary-500">JOIN NOW</span> TO GET IN SHAPE
                  </HText>
                  <p className='my-5'>
                    Congue adipiscing risus commodo placerat. Tellus et in feugiat nisl
                    sapien vel rhoncus. Placerat at in enim pellentesque. Nulla
                    adipiscing leo egestas nisi elit risus sit. Nunc cursus sagittis.
                  </p>
                </SideAnimationDiv>

                <div className='mt-10 justify-between gap-8 md:flex'>
                  <SideAnimationDiv
                    className='mt-10 basis-3/5 md:mt-0'
                    side={SideAnimation.Right}>
                      <form
                        target='_blank'
                        onSubmit={onSubmit}
                        action="https://formsubmit.co/298d434a66f94179bc3191e4e3ec7cb2"
                        method='POST'>
                          {/* NAME */}
                          <input
                            className={MyClasses.inputStyles}
                            type='text'
                            placeholder='NAME'
                            {...register('name', {
                              required: true,
                              maxLength: 52
                            })}/>
                            {errors.name && (
                              <p className='mt-1 text-red-400'>
                                {errors.name.type === 'required' && 'This field is required.'}
                                {errors.name.type === "maxLength" && "Max length is 52 char."}
                              </p>)}
                          {/* EMAIL */}
                          <input
                            className={MyClasses.inputStyles}
                            type='email'
                            placeholder='EMAIL'
                            {...register('email', {
                              required: true,
                              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                            })}/>
                            {errors.email && (
                              <p className='mt-1 text-red-400'>
                                {errors.email.type === 'required' && 'This field is required.'}
                                {errors.email.type === "pattern" && "Invalid email address."}
                              </p>)}
                          {/* MESSAGE */}
                          <textarea
                            className={MyClasses.inputStyles}
                            rows={4}
                            cols={50}
                            placeholder='MESSAGE'
                            {...register('message', {
                              required: true,
                              maxLength: 2000
                            })}/>
                            {errors.message && (
                              <p className='mt-1 text-red-400'>
                                {errors.message.type === 'required' && 'This field is required.'}
                                {errors.message.type === "maxLength" && "Max length is 2000 char."}
                              </p>)}

                          <button
                            type='submit'
                            className='mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white '>
                              SUBMIT
                            </button>
                        </form>
                    </SideAnimationDiv>
                    <SideAnimationDiv
                      className='relative mt-16 basis-2/5 md:mt-0'
                      side={SideAnimation.Left}>
                        <div className='md:before:content-evolvetext w-full before:absolute before:-bottom-20 before:-right-20'>
                          <img
                            className='w-full'
                            src={ContactUsPageGraphic}
                            alt='contact-us-page-graphic' />
                        </div>
                      </SideAnimationDiv>
                </div>
            </motion.div>
  </section>
}

export default ContactUs