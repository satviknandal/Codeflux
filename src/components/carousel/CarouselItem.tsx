import type { ReactNode } from "react";

interface CarouselItemProps {
  item: {
    image?: ReactNode;
    label?: string;
    location?: string;
  },
};

const CarouselItem = ({
  item
}: CarouselItemProps) => {


  const renderTileItem = (item: CarouselItemProps["item"]) => (
    <div className="tileCarouselitem">
      <div className="tileCarouselitem__inner">
        {item?.image ? (
          <div>{item?.image}</div>
        ) : (
          <div className="tileCarouselitem__image">
            <img src="/img/tilePlaceholder.png" alt={""} />
          </div>
        )}
        <div
          className="tileCarouselitem__body"
        >
          {item?.label && <div>{item?.label}</div>}

          {item?.location && (
            <div className="tileCarouselitem__body__detail">
              <div>{item?.location}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return renderTileItem(item);
};

export default CarouselItem;
