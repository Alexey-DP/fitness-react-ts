import { useRef, useState } from 'react';
import { Bars4Icon, XMarkIcon} from '@heroicons/react/24/solid';
import MyClasses from '@/shared/tw-classes';
import Logo from '@/assets/Logo.png';
import Link from './Link';
import { SelectedPage } from '@/shared/enums';
import useMediaQuery from '@/hooks/useMediaQuery';
import ActionButton from '../buttons/ActionButton';
import { useOnClickOutside } from '@/hooks/useClickOutside';

interface IProps {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
  isTopOfPage: boolean;
}

const Navbar = ({
  selectedPage,
  setSelectedPage,
  isTopOfPage
}: IProps) => {
  const [isMenuToggle, setIsMenuToggle] = useState<boolean>(false);
  const isAboveMediumScreen = useMediaQuery('(min-width: 1060px)');
  const navbarBackground = isTopOfPage ? '' : 'bg-primary-100 drop-shadow'

  const modalRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(modalRef, () => setIsMenuToggle(false));

  return <nav>
    <div
      className={`${navbarBackground} ${MyClasses.flexBetween} fixed top-0 z-30 w-full py-6`}>
      <div className={`${MyClasses.flexBetween} mx-auto w-5/6`}>
        <div className={`${MyClasses.flexBetween} w-full gap-16`}>
          <img src={Logo} alt="logo" />

          {isAboveMediumScreen ? (<div className={`${MyClasses.flexBetween} w-full`}>
            <div className={`${MyClasses.flexBetween} gap-8 text-sm`}>
              <Link
                page={'Home'}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}/>
              <Link
                page={'Benefits'}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}/>
              <Link
                page={'Our Classes'}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}/>
              <Link
                page={'Contact Us'}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}/>
            </div>
            <div className={`${MyClasses.flexBetween} gap-8`}>
              <p>Sign In</p>
              <ActionButton setSelectedPage={setSelectedPage}>Become a Member</ActionButton>
            </div>
          </div>) :
          (<button
            className='rounded-full bg-secondary-500 p-2'
            onClick={() => setIsMenuToggle(!isMenuToggle)}>
              <Bars4Icon className='h-6 w-6 text-white'/>
            </button>)}
        </div>
      </div>
    </div>

    {/* MOBILE MENU MODAL */}
    {!isAboveMediumScreen && isMenuToggle && (
      <div
        className='fixed right-0 bottom-0 z-40 h-full w-[300px] bg-secondary-400 drop-shadow-xl'
        ref={modalRef}>
        <div
          className='flex justify-end p-12'>
          <button
            onClick={() => setIsMenuToggle(!isMenuToggle)}>
              <XMarkIcon className='h-6 w-6 text-gray-400'/>
            </button>
        </div>

        <div className='ml-[33%] flex flex-col gap-10 text-2xl'>
              <Link
                page={'Home'}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}/>
              <Link
                page={'Benefits'}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}/>
              <Link
                page={'Our Classes'}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}/>
              <Link
                page={'Contact Us'}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}/>
        </div>

      </div>
    )}
  </nav>
}

export default Navbar