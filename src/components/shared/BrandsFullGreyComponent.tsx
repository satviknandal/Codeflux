import Brands from './Brands';

interface BrandsFullGreyComponentProps {
  label?: string;
  labelColor?: string;
  labelSize?: string;
}

const BrandsFullGreyComponent = ({
  label = 'Some of the brands empowered by Codeflux',
  labelColor = '#01407b',
  labelSize = 'text-base',
}: BrandsFullGreyComponentProps) => {
  return (
    <div className="mx-auto flex flex-col items-center justify-center bg-[#f4f9f9] px-2 py-8 md:py-20 md:px-[150px]">
      <div className="container-wrapper-transparent">
        <div className="text-center">
          <label
            className={`mb-6 block  text-center ${
                labelSize === 'text-base' ? 'font-medium' : 'font-normal'
            } ${labelSize}`}
            style={{ color: labelColor }}
          >
            {label}
          </label>
          <Brands />
        </div>
      </div>
    </div>
  );
};

export default BrandsFullGreyComponent;
