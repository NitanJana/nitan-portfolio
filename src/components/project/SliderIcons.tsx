import { useSwiper } from 'swiper/react';
import { PiCaretLeftBold, PiCaretRightBold } from 'react-icons/pi';

interface SliderIconsProps {
  containerStyle: string;
  btnStyle: string;
  iconStyle?: string;
}

const SliderIcons = ({
  containerStyle,
  btnStyle,
  iconStyle,
}: SliderIconsProps) => {
  const swiper = useSwiper();
  return (
    <div className={containerStyle}>
      <button className={btnStyle} onClick={() => swiper.slidePrev()}>
        <PiCaretLeftBold className={iconStyle} />
      </button>
      <button className={btnStyle} onClick={() => swiper.slideNext()}>
        <PiCaretRightBold className={iconStyle} />
      </button>
    </div>
  );
};

export default SliderIcons;
