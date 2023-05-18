import { SelectedPage } from '@/shared/enums';
import MyClasses from '@/shared/tw-classes';
import AnchorLink from 'react-anchor-link-smooth-scroll'

interface IProps {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
}

const Link = ({
  page,
  selectedPage,
  setSelectedPage
}: IProps) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, '-') as SelectedPage;
  return (
    <AnchorLink
      className={`${selectedPage === lowerCasePage ? "text-primary-500": ""} ${MyClasses.transition} hover:text-primary-300`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  )
}

export default Link