
"use client"
import Header from '@/components/header'
import Board from '@/components/board'
import Keyboard from '@/components/keyboard'
import { Provider } from 'react-redux'
import { store } from '@/store'
import Controls from '@/components/controls'
import { PopupProvider } from '@/popup/popup.context'
import PopupHolder from '@/popup/popup.holder'

export default function Home() {

  return (
      
     
      <PopupProvider>
      <Provider store={store}>  
        <main className='mainPage'>
          <Header    />
          <Board/>
          <Controls/>
          <Keyboard/>
          

          <PopupHolder/>
        </main>
      </Provider>
      </PopupProvider>
    
  )
}
