import MyClasses from '@/shared/tw-classes';

interface IProps {
  name: string;
  description?: string;
  image: string;
}

const Class = ({
  name,
  description,
  image
}: IProps) => {
  return <li className='relative mx-5 inline-block h-[380px] w-[450px]'>
    <div className={MyClasses.overlayStyles}>
      <p className='text-xl'>{name}</p>
      <p className='mt-5'>{description}</p>
    </div>
    <img src={image} alt={`image-${name}`} />
  </li>
}

export default Class