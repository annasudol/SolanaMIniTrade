import { AppConfig } from '@utils';

const Footer = () => (
  <div className='font-PTSans text-gray-6 text-sm z-10 relative text-center'>
    &#169; Copyright {new Date().getFullYear()} {AppConfig.name}.
  </div>
);

export { Footer };
