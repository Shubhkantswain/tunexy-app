import React from 'react'
import { AccountIcon } from '~/Svgs'

const Account = () => {
    return (
        <button className='p-2 rounded-full bg-[#1f1f1f] hover:bg-[#292929] text-[#DCDCDC] hover:text-[#ffffff]'>
            <AccountIcon width="20" height="20"/>
        </button>
    )
}

export default Account