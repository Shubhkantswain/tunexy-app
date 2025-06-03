import React from 'react'
import Header from './_header/Header'
import MainContent from './_mainContent/MainContent'
import PlaybackController from './_playbackController/PlaybackController'
import { ClientOnly } from '~/layout/ClientOnly'

function DesktopLayout() {
    return (

        <div className="flex-col h-screen bg-black text-white hidden md:flex">
            {/* Header */}
            <Header />


            {/* Main Content with Resizable Sidebar */}
            <MainContent />

           <PlaybackController/>
        </div>
    )
}

export default DesktopLayout