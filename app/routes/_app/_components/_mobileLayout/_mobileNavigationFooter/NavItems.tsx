import { Link, useLocation } from '@remix-run/react';
import { NAVIGATION_ITEMS } from '~/constants';

const NavItems = () => {
    const { pathname } = useLocation()

    return (
        <>
            {NAVIGATION_ITEMS.map(({ path, name, Icon, ActiveIcon }) => {
                const isActive = pathname == path; // Replace this with actual route match if needed

                return (
                    <Link
                        key={path}
                        to={path}
                        onClick={(e) => {
                            if (isActive) {
                                e.preventDefault();
                                e.stopPropagation();
                            }
                        }}
                        className={`flex flex-col items-center text-xs
                            }`}
                    >
                        {
                            isActive ? <ActiveIcon /> : <Icon />
                        }
                        <span className={`${isActive ? "font-bold" : "font-thin"} text-[9px]`}>{name}</span>
                    </Link>
                );
            })}
        </>
    )
}

export default NavItems