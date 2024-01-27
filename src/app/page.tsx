
"use client"
import Header from '@/components/header'
import Board from '@/components/board'
import Keyboard from '@/components/keyboard'
import { Provider } from 'react-redux'
import { store } from '@/store'
import Controls from '@/components/controls'
import { PopupProvider } from '@/components/popup/popup.context'

export default function Home() {

  return (
      
    <Provider store={store}>   
      <PopupProvider>
        <main className='mainPage'>
          <Header    />
          <Board/>
          <Controls/>
          <Keyboard/>
          
        </main>
      </PopupProvider>
    </Provider>
  )
}
