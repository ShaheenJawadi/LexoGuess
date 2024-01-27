 
import {usePopupState} from '@/popup/popup.context';
import CommonPopup from '@/components/popup/common';
const PopupHolder = () => {
    const { isOpen } = usePopupState();
 
    return (
        <CommonPopup open={isOpen}   >
            popup

        </CommonPopup>
    );
 
};
export default PopupHolder;
