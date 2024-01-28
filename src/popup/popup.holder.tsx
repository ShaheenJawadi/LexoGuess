 
import {usePopupState} from '@/popup/popup.context';
import CommonPopup from '@/components/popup/common';
import WelcomePopup from '@/components/popup/welcome';

 

const PopupHolder = () => {
    const { isOpen, view } = usePopupState();
 
    return (
        <CommonPopup open={isOpen}   >
            {view === 'WELCOME' && <WelcomePopup/>}
            {view === 'WRONG' && <div>wrong</div>}
            {view === 'CORRECT' && <div>correct</div>}
        </CommonPopup>
    );
 
};
export default PopupHolder;
