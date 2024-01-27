 
import {usePopupState} from '@/popup/popup.context';
import CommonPopup from '@/components/popup/common';

 

const PopupHolder = () => {
    const { isOpen, view } = usePopupState();
 
    return (
        <CommonPopup open={isOpen}   >
            {view === 'WELCOME' && <div>welcome</div>}
            {view === 'WRONG' && <div>wrong</div>}
            {view === 'CORRECT' && <div>correct</div>}

        </CommonPopup>
    );
 
};
export default PopupHolder;
