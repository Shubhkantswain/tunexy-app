import { LogoIcon } from '~/Svgs'

const Logo = () => {
    return (
        <div className="flex flex-1 basis-0 items-center justify-start">
            <button className="flex items-center justify-center p-0">
                <LogoIcon width="40" height="40" />
            </button>
        </div>
    ) 
}

export default Logo