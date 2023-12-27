
"use client"
import Header from '@/components/header'
import Board from '@/components/board'
import Keyboard from '@/components/keyboard'
import { Provider } from 'react-redux'
import { store } from '@/store'

export default function Home() {

  return (
      
    <Provider store={store}>   
      <main className='mainPage'>
        <Header    />
        <Board/>
        <Keyboard/>
      </main>
    </Provider>
  )
}
