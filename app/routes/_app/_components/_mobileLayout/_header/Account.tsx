import React, { useState, useRef, useEffect } from 'react';
import AccountDrowDown from '~/routes/_app/components/AccountDrowDown';
import { AccountIcon } from '~/Svgs';



function Account() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }  
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setOpen(!open)}
        className="p-2 rounded-full bg-[#1f1f1f] hover:bg-[#292929] text-[#DCDCDC] hover:text-white"
      >
        <AccountIcon width="20" height="20" />
      </button>

      {open && (
        <AccountDrowDown/>
      )}
    </div>
  );
}

export default Account;
