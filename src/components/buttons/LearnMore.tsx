import AnchorLink from 'react-anchor-link-smooth-scroll';
import { SelectedPage } from '@/shared/enums';
import MyClasses from '@/shared/tw-classes';

type IProps = {
  setSelectedPage: (value: SelectedPage) => void;
}

const LearnMore = ({setSelectedPage}: IProps) => {
  return <AnchorLink
            className={`${MyClasses.transition} text-sm font-bold text-primary-500 underline hover:text-secondary-500`}
            onClick={() => setSelectedPage(SelectedPage.ContactUs)}
            href={`#${SelectedPage.ContactUs}`}>
              <p>Learn More</p>
          </AnchorLink>
}

export default LearnMore