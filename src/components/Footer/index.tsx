import { AppConfig } from '@utils';

const Footer = () => (
  <div className='font-PTSans text-gray-6 text-sm absolute bottom-4 left-1/2 translate-x-1/2'>
    Crated by {AppConfig.name}.
  </div>
);

export { Footer };
