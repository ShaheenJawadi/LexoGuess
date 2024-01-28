 
import {usePopupState} from '@/popup/popup.context';
import CommonPopup from '@/components/popup/common';
import WelcomePopup from '@/components/popup/welcome';
import GameOverPopup from '@/components/popup/gameOver';

 

const PopupHolder = () => {
    const { isOpen, view } = usePopupState();
 
    return (
        <CommonPopup open={isOpen}   >
            {view === 'WELCOME' && <WelcomePopup/>}
            {view === 'WRONG' && <GameOverPopup/>}
            {view === 'CORRECT' && <div>correct</div>}
        </CommonPopup>
    );
 
};
export default PopupHolder;
