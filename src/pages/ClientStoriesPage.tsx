
import sds from '../assets/software/sds.webp';
import BrandsFullGreyComponent from '../components/shared/BrandsFullGreyComponent';
import CompHeader from '../components/shared/CompHeader';

const ClientStoriesPage = () => {
  return (
    <>
      <main className='container-wrapper'>
        <CompHeader
            highlighter=""
            title={<p>Client <span className="text-sky-600">Stories</span></p>}
            subheading="Grow your team or grow online with Codeflux. Complete the contact form and our client support team will get in touch with you."
            variant="default"
        />
        <div className='gap-12 py-2 md:gap-24 md:py-12'>
            <div className="w-full md:space-y-6 md:col-span-2">
              <a href="/client-stories/wamsi/">
              <div className="relative aspect-[1/1] max-h-[850px] overflow-hidden md:aspect-[2/1]">
                <img src={sds} alt=""/>
              </div>
              </a>
              <div className="py-8 md:w-3/4">
                <a href="/client-stories/wamsi/">
                <h3 className="h3 mb-2.5 md:mb-4">WAMSI (West Australian Marine Science Institue)</h3>
                <h4 className="h4 mb-2.5 font-medium md:mb-6">Modernising the Digital Home of WA’s Leading Marine Science Institution</h4>
                <span className="block text-md font-light md:text-lg">We partnered with WAMSI to refresh their website, creating a clear and intuitive platform that better showcases their research, improves access to publications, and supports their role as a leader in marine science across Western Australia.</span></a></div></div>
        </div>
        <div className='flex flex-row justify-between'>

          <div className='w-full md:space-y-6 md:max-w-[480px]'>
            <a href=''>
              <img src={sds} alt=""/>
            </a>
            <div className='py-8'>
              <a href="/client-stories/perth-is-ok/">
                <h3 className="h3 mb-2.5 md:mb-4">Perth is OK!</h3>
                <h4 className="h4 mb-2.5 font-medium md:mb-6">Transforming Perth’s Leading Social Site with Innovative Digital Solutions</h4>
                <span className="block text-md font-light md:text-lg">In collaboration with @blockbranding, we gave PiOK a vibrant overhaul using NextJS. The new site not only amped up user engagement but also nailed Google's Core Web Vitals, taking user satisfaction to the next level. Check out how we are helping to turn Perth's largest independent digital media outlet in Western Australia into an online powerhouse!</span>
              </a>
            </div>
          </div>
          <div className='w-full md:space-y-6 md:max-w-[480px] md:justify-self-end'>
            <a href=''>
              <img src={sds} alt=""/>
            </a>
            <div className='py-8'>
              <a href="/client-stories/perth-is-ok/">
                <h3 className="h3 mb-2.5 md:mb-4">Envision Medical</h3>
                <h4 className="h4 mb-2.5 font-medium md:mb-6">Streamlining Radiology for Dental Professionals with a Web App</h4>
                <span className="block text-md font-light md:text-lg">Discover how we leveraged the power of WordPress, Laravel, and PHP to create a seamless digital platform for O-RAD, enhancing their workflow and client experience. By integrating a custom website and a web application, we enabled O-RAD to deliver faster, more efficient radiology services for dental professionals.</span>
              </a>
            </div>
          </div>
        </div>
      </main>
      <BrandsFullGreyComponent/>
    </>
  )
}

export default ClientStoriesPage
