import React from 'react'
import { LogoIcon } from '~/Svgs'

function Logo() {
    return (
        <div className="flex items-center gap-4">
            <button className=" flex items-center justify-center p-0">
                <LogoIcon width="35" height="35" />
            </button>
        </div>
    )
}

export default Logo