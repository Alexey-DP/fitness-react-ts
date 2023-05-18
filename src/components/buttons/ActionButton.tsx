import { ReactNode } from 'react';
import { SelectedPage } from '@/shared/enums';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import MyClasses from '@/shared/tw-classes';

interface IProps {
  children: ReactNode;
  setSelectedPage: (value: SelectedPage) => void;
}

const ActionButton = ({
  children,
  setSelectedPage
}: IProps) => {
  return (
    <AnchorLink
      className={`rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white ${MyClasses.transition}`}
      onClick={() => setSelectedPage(SelectedPage.ContactUs)}
      href={`#${SelectedPage.ContactUs}`}
      >{children}</AnchorLink>
  )
}

export default ActionButton