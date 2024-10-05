import acmeLogo from '@/assets/logo-acme.png'
import pulseLogo from '@/assets/logo-pulse.png'
import echoLogo from '@/assets/logo-echo.png'
import celestialLogo from '@/assets/logo-celestial.png'
import apexLogo from '@/assets/logo-apex.png'
import quantumLogo from '@/assets/logo-quantum.png'
export const LogoTicker = () => {
  return (
    <section className='py-20 md:py-24'>
      <div className="container">
        <div className="flex items-center space-x-5" >
          <div className='flex-1 md:flex-none'>
            <h2 className='text-[16px] w-full'>Trusted by top innovative teams</h2>
          </div>
          <div className='flex-1 flex items-center overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]'>
          <div className="flex flex-none items-center space-x-14 overflow-hidden">
            {[
              acmeLogo,
              pulseLogo,
              echoLogo,
              celestialLogo,
              apexLogo,
              quantumLogo,
            ].map((logo, index) => (
              <div key={index} className='w-auto h-6'>
                <img src={logo.src} alt={logo.src} className="w-full h-full" />
              </div>
            ))}
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};
