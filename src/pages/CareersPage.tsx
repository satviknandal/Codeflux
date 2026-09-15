import BrandsFullGreyComponent from '../components/shared/BrandsFullGreyComponent';
import careersbg from "../assets/banner/careersbg.webp";
import CompHeader from '../components/shared/CompHeader';

const CareersPage = () => {

  const DigitalBanner = () => {
    return  <div className="relative h-[300px] md:h-[500px] bg-black overflow-hidden flex flex-col justify-center items-start text-left">
    <div className="container-wrapper-transparent relative z-10 md:pl-6">
      <div className='flex flex-col text-center w-full md:w-[65%] mx-auto'>
        <label className='font-normal text-white text-md md:text-xl md:ml-1'>We're Hiring</label>
        <div  className='font-normal text-sky-400 text-3xl md:text-5xl md:ml-1'>Be a part of our mission.</div>
        <p className='text-white mt-6 text-md md:text-lg'>The Codeflux team is always on the lookout for talented developers. If you're passionate about solutions to tough problems, get in touch.</p>
      </div>
    </div>
      <img src={careersbg} className='w-full h-[300px] md:h-[550px] absolute object-cover md:bottom--[-100px] right-0 opacity-50 md:opacity-75'/>
    </div>
  }

  return (
    <>
      <DigitalBanner/>
      <main className='container-wrapper'>
        <CompHeader
            highlighter=""
            title={<p>Available <span className="text-sky-600">Openings</span></p>}
            subheading="Take a look at our hottest vacancies and apply for the job of your dreams!"
            variant="default"
        />
        <div className="flex flex-col gap-4 md:gap-10 rounded-lg md:rounded-2xl bg-[#f0f8ff] border border-[#d4eafd] p-4 md:p-8 text-[#10405a] md:flex-row md:items-end">
          <div className="flex-1 space-y-2 md:space-y-4">
            <h3 className="m-0 mb-2 text-md md:text-xl font-medium text-[#07324a]">
              404: Jobs not found
            </h3>
            <p className="m-0 mb-2 md:leading-8 text-sm md:text-md">
              However, we're always keen to hear from talented developers, if
              that's you get in touch via{' '}
              <strong>
                <a
                  href="mailto:careers@codeflux.com.au"
                  title="Get in touch"
                  target="_self"
                  rel="noreferrer noopener"
                  className="cursor-pointer text-[#0d9dd0] transition hover:underline"
                >
                  careers@codeflux.com.au
                </a>
                .
              </strong>
            </p>
            <p className="m-0 md:leading-8 text-sm md:text-md">
              Follow us on{' '}
              <a
                href="https://au.linkedin.com/company/hatchet-agency"
                title="Linkedin"
                target="_blank"
                rel="noreferrer noopener"
                className="cursor-pointer text-[#0d9dd0] transition hover:underline"
              >
                LinkedIn
              </a>{' '}
              to see new opportunities first!
            </p>
          </div>
          <a
            target="_blank"
            href="https://au.linkedin.com/company/hatchet-agency"
            rel="noreferrer noopener"
            className="w-full md:w-auto"
          >
            <button className="inline-flex h-auto w-full cursor-pointer items-center justify-center rounded-full border-2 border-[#0d9dd0] bg-[#0d9dd0] px-4 py-3 md:py-4 text-center text-sm md:font-medium text-white transition-colors ease-out hover:border-black hover:bg-white hover:text-black focus-visible:outline-none focus-visible:ring focus-visible:ring-[#cd001a]/50 disabled:opacity-50 sm:h-10 sm:whitespace-nowrap md:w-auto">
              Our LinkedIn
            </button>
          </a>
        </div>
      </main>
      <BrandsFullGreyComponent/>
    </>
  );
};

export default CareersPage;
