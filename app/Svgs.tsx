type IconProps = {
    width?: string
    height?: string
}

const LogoIcon = ({ width = "24", height = "24" }: IconProps) => (
    <svg
        width={`${width}`}
        height={`${height}`}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
            <path
                d="M9.772 4.28c.56-.144 1.097.246 1.206.814.1.517-.263 1.004-.771 1.14A7 7 0 1 0 19 12.9c.009-.5.4-.945.895-1 .603-.067 1.112.371 1.106.977L21 13c0 .107-.002.213-.006.32a.898.898 0 0 1 0 .164l-.008.122a9 9 0 0 1-9.172 8.392A9 9 0 0 1 9.772 4.28z"
                fill="#3babdb"
            ></path>
            <path
                d="M15.93 13.753a4.001 4.001 0 1 1-6.758-3.581A4 4 0 0 1 12 9c.75 0 1.3.16 2 .53 0 0 .15.09.25.17-.1-.35-.228-1.296-.25-1.7a58.75 58.75 0 0 1-.025-2.035V2.96c0-.52.432-.94.965-.94.103 0 .206.016.305.048l4.572 1.689c.446.145.597.23.745.353.148.122.258.27.33.446.073.176.108.342.108.801v1.16c0 .518-.443.94-.975.94a.987.987 0 0 1-.305-.049l-1.379-.447-.151-.05c-.437-.14-.618-.2-.788-.26a5.697 5.697 0 0 1-.514-.207 3.53 3.53 0 0 1-.213-.107c-.098-.05-.237-.124-.521-.263L16 6l.011 7c0 .255-.028.507-.082.753h.001z"
                fill="#3babdb"
            ></path>
        </g>
    </svg>
)

const HomeIcon = ({ width = "24", height = "24" }: IconProps) => (
    <svg
        width={`${width}`}
        height={`${height}`}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
            <path
                d="M12 18V15"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M10.07 2.81997L3.14002 8.36997C2.36002 8.98997 1.86002 10.3 2.03002 11.28L3.36002 19.24C3.60002 20.66 4.96002 21.81 6.40002 21.81H17.6C19.03 21.81 20.4 20.65 20.64 19.24L21.97 11.28C22.13 10.3 21.63 8.98997 20.86 8.36997L13.93 2.82997C12.86 1.96997 11.13 1.96997 10.07 2.81997Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </g>
    </svg>
)

const HomeFilledIcon = ({ width = "24", height = "24" }: IconProps) => (
    <svg
        width={`${width}`}
        height={`${height}`}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path

            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.33537 7.87495C1.79491 9.00229 1.98463 10.3208 2.36407 12.9579L2.64284 14.8952C3.13025 18.2827 3.37396 19.9764 4.54903 20.9882C5.72409 22 7.44737 22 10.8939 22H13.1061C16.5526 22 18.2759 22 19.451 20.9882C20.626 19.9764 20.8697 18.2827 21.3572 14.8952L21.6359 12.9579C22.0154 10.3208 22.2051 9.00229 21.6646 7.87495C21.1242 6.7476 19.9738 6.06234 17.6731 4.69181L16.2882 3.86687C14.199 2.62229 13.1543 2 12 2C10.8457 2 9.80104 2.62229 7.71175 3.86687L6.32691 4.69181C4.02619 6.06234 2.87583 6.7476 2.33537 7.87495ZM12 18.75C11.5858 18.75 11.25 18.4142 11.25 18V15C11.25 14.5858 11.5858 14.25 12 14.25C12.4142 14.25 12.75 14.5858 12.75 15V18C12.75 18.4142 12.4142 18.75 12 18.75Z"
            fill="currentColor"
        ></path>
    </svg>
)

const ExploreIcon = ({ width = "24", height = "24" }: IconProps) => (
    <svg
        width={`${width}`}
        height={`${height}`}
        viewBox="0 0 24 24"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        aria-labelledby="exploreIconTitle"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="square"
        strokeLinejoin="miter"
        fill="none"
        color="currentColor"
    >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
            <polygon points="14.121 14.121 7.05 16.95 9.879 9.879 16.95 7.05"></polygon>
            <circle cx="12" cy="12" r="10"></circle>
        </g>
    </svg>
)

const ExploreFilledIcon = ({ width = "24", height = "24" }: IconProps) => (
    <svg
        width={`${width}`}
        height={`${height}`}
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
    >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
            <g id="Layer_2" data-name="Layer 2">
                <g id="invisible_box" data-name="invisible box">
                    <rect width="48" height="48" fill="none"></rect>
                </g>
                <g id="icons_Q2" data-name="icons Q2">
                    <path d="M24,2A22,22,0,1,0,46,24,21.9,21.9,0,0,0,24,2ZM34.7,14.7,28,28,14.7,34.7a1.1,1.1,0,0,1-1.4-1.4L20,20l13.3-6.7A1.1,1.1,0,0,1,34.7,14.7ZM24,22a2,2,0,1,0,2,2A2,2,0,0,0,24,22Z"></path>
                    <path d="M24,22a2,2,0,1,0,2,2A2,2,0,0,0,24,22Zm0,0a2,2,0,1,0,2,2A2,2,0,0,0,24,22Z"></path>
                </g>
            </g>
        </g>
    </svg>
)

const LibrarayIcon = ({ width = "24", height = "24" }: IconProps) => (
    <svg
        width={`${width}`}
        height={`${height}`}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"

    >
        <path
            d="M19.5617 7C19.7904 5.69523 18.7863 4.5 17.4617 4.5H6.53788C5.21323 4.5 4.20922 5.69523 4.43784 7"
            stroke="currentColor"
            strokeWidth="1.5"
        />
        <path
            d="M17.4999 4.5C17.5283 4.24092 17.5425 4.11135 17.5427 4.00435C17.545 2.98072 16.7739 2.12064 15.7561 2.01142C15.6497 2 15.5194 2 15.2588 2H8.74099C8.48035 2 8.35002 2 8.24362 2.01142C7.22584 2.12064 6.45481 2.98072 6.45704 4.00434C6.45727 4.11135 6.47146 4.2409 6.49983 4.5"
            stroke="currentColor"
            strokeWidth="1.5"
        />
        <path
            d="M15 18H9"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
        />
        <path
            d="M2.38351 13.793C1.93748 10.6294 1.71447 9.04765 2.66232 8.02383C3.61017 7 5.29758 7 8.67239 7H15.3276C18.7024 7 20.3898 7 21.3377 8.02383C22.2855 9.04765 22.0625 10.6294 21.6165 13.793L21.1935 16.793C20.8437 19.2739 20.6689 20.5143 19.7717 21.2572C18.8745 22 17.5512 22 14.9046 22H9.09536C6.44881 22 5.12553 22 4.22834 21.2572C3.33115 20.5143 3.15626 19.2739 2.80648 16.793L2.38351 13.793Z"
            stroke="currentColor"
            strokeWidth="1.5"
        />
    </svg>
)

const LibrarayFilledIcon = ({ width = "25", height = "25" }: IconProps) => (
    <svg
        width={`${width}`}
        height={`${height}`}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M8.50989 2.00001H15.49C15.7225 1.99995 15.9007 1.99991 16.0565 2.01515C17.1643 2.12352 18.0711 2.78958 18.4556 3.68678H5.54428C5.92879 2.78958 6.83555 2.12352 7.94337 2.01515C8.09917 1.99991 8.27741 1.99995 8.50989 2.00001Z"
            fill="currentColor"
        />
        <path
            d="M6.31052 4.72312C4.91989 4.72312 3.77963 5.56287 3.3991 6.67691C3.39117 6.70013 3.38356 6.72348 3.37629 6.74693C3.77444 6.62636 4.18881 6.54759 4.60827 6.49382C5.68865 6.35531 7.05399 6.35538 8.64002 6.35547L8.75846 6.35547L15.5321 6.35547C17.1181 6.35538 18.4835 6.35531 19.5639 6.49382C19.9833 6.54759 20.3977 6.62636 20.7958 6.74693C20.7886 6.72348 20.781 6.70013 20.773 6.67691C20.3925 5.56287 19.2522 4.72312 17.8616 4.72312H6.31052Z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.67239 7.54204H15.3276C18.7024 7.54204 20.3898 7.54204 21.3377 8.52887C22.2855 9.5157 22.0625 11.0403 21.6165 14.0896L21.1935 16.9811C20.8437 19.3724 20.6689 20.568 19.7717 21.284C18.8745 22 17.5512 22 14.9046 22H9.09536C6.44881 22 5.12553 22 4.22834 21.284C3.33115 20.568 3.15626 19.3724 2.80648 16.9811L2.38351 14.0896C1.93748 11.0403 1.71447 9.5157 2.66232 8.52887C3.61017 7.54204 5.29758 7.54204 8.67239 7.54204ZM8 18.0001C8 17.5859 8.3731 17.2501 8.83333 17.2501H15.1667C15.6269 17.2501 16 17.5859 16 18.0001C16 18.4144 15.6269 18.7502 15.1667 18.7502H8.83333C8.3731 18.7502 8 18.4144 8 18.0001Z"
            fill="currentColor"
        />
    </svg>
)

const SearchIcon = ({ width = "24", height = "24" }: IconProps) => (
    <svg
        width={`${width}`}
        height={`${height}`}
        data-encore-id="icon"
        role="img"
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="currentColor"
    >
        <path d="M10.533 1.27893C5.35215 1.27893 1.12598 5.41887 1.12598 10.5579C1.12598 15.697 5.35215 19.8369 10.533 19.8369C12.767 19.8369 14.8235 19.0671 16.4402 17.7794L20.7929 22.132C21.1834 22.5226 21.8166 22.5226 22.2071 22.132C22.5976 21.7415 22.5976 21.1083 22.2071 20.7178L17.8634 16.3741C19.1616 14.7849 19.94 12.7634 19.94 10.5579C19.94 5.41887 15.7138 1.27893 10.533 1.27893ZM3.12598 10.5579C3.12598 6.55226 6.42768 3.27893 10.533 3.27893C14.6383 3.27893 17.94 6.55226 17.94 10.5579C17.94 14.5636 14.6383 17.8369 10.533 17.8369C6.42768 17.8369 3.12598 14.5636 3.12598 10.5579Z"></path>
    </svg>
)

const SearchFilledIcon = ({ width = "24", height = "24" }: IconProps) => (
    <svg
        width={`${width}`}
        height={`${height}`}
        data-encore-id="icon"
        role="img"
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="currentColor"
    >
        <path d="M15.356 10.558c0 2.623-2.16 4.75-4.823 4.75-2.664 0-4.824-2.127-4.824-4.75s2.16-4.75 4.824-4.75c2.664 0 4.823 2.127 4.823 4.75z"></path>
        <path d="M1.126 10.558c0-5.14 4.226-9.28 9.407-9.28 5.18 0 9.407 4.14 9.407 9.28a9.157 9.157 0 0 1-2.077 5.816l4.344 4.344a1 1 0 0 1-1.414 1.414l-4.353-4.353a9.454 9.454 0 0 1-5.907 2.058c-5.18 0-9.407-4.14-9.407-9.28zm9.407-7.28c-4.105 0-7.407 3.274-7.407 7.28s3.302 7.279 7.407 7.279 7.407-3.273 7.407-7.28c0-4.005-3.302-7.278-7.407-7.278z"></path>
    </svg>
)

const AccountIcon = ({ width = "24", height = "24" }: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={`${width}`} height={`${height}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="5" /><path d="M20 21a8 8 0 0 0-16 0" /></svg>
)

const PlusIcon = ({ width = "24", height = "24" }: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={`${width}`} height={`${height}`} viewBox="0 0 24 24"><defs><path id="ic_action_add-a" d="M21,11 L13,11 L13,3 C13,2.448 12.552,2 12,2 C11.448,2 11,2.448 11,3 L11,11 L3,11 C2.448,11 2,11.448 2,12 C2,12.552 2.448,13 3,13 L11,13 L11,21 C11,21.553 11.448,22 12,22 C12.552,22 13,21.553 13,21 L13,13 L21,13 C21.552,13 22,12.552 22,12 C22,11.448 21.552,11 21,11 Z"></path></defs><g fill-rule="evenodd" fill="transparent"><rect width="24" height="24"></rect><use href="#ic_action_add-a" fill="currentColor"></use></g></svg>
)

const HeartIcon = ({ width = "24", height = "24" }: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={`${width}`} height={`${height}`} viewBox="0 0 24 24"><defs><path id="ic_action_favorite-a" d="M16,3 C14.499,3 13.092,3.552 12,4.544 C10.908,3.552 9.501,3 8,3 C4.691,3 2,5.691 2,9 C2,14.535 8.379,18.788 11.445,20.832 C11.613,20.944 11.807,21 12,21 C12.193,21 12.387,20.944 12.555,20.832 C15.62,18.788 22,14.535 22,9 C22,5.691 19.309,3 16,3 Z M12,18.797 C9.077,16.832 4,13.186 4,9 C4,6.794 5.794,5 8,5 C9.263,5 10.429,5.592 11.198,6.625 C11.575,7.131 12.425,7.131 12.802,6.625 C13.571,5.592 14.737,5 16,5 C18.206,5 20,6.794 20,9 C20,13.186 14.923,16.832 12,18.797 Z"></path></defs><g fill-rule="evenodd" fill="transparent"><rect width={`${width}`} height={`${height}`}></rect><use fill-rule="nonzero" href="#ic_action_favorite-a" fill="currentColor"></use></g></svg>
)

const DefaultListIcon = ({ width = "24", height = "24" }: IconProps) => (
    <svg
        width={`${width}`}
        height={`${height}`}
        data-encore-id="icon"
        role="img"
        aria-hidden="true"
        viewBox="0 0 16 16"
        fill="currentColor"
    >
        <path d="M15 14.5H5V13h10v1.5zm0-5.75H5v-1.5h10v1.5zM15 3H5V1.5h10V3zM3 3H1V1.5h2V3zm0 11.5H1V13h2v1.5zm0-5.75H1v-1.5h2v1.5z"></path>
    </svg>
)


const CompactListIcon = ({ width = "24", height = "24" }: IconProps) => (
    <svg
        width={`${width}`}
        height={`${height}`}
        data-encore-id="icon"
        role="img"
        aria-hidden="true"
        viewBox="0 0 16 16"
        fill="currentColor"
    >
        <path d="M15.5 13.5H.5V12h15v1.5zm0-4.75H.5v-1.5h15v1.5zm0-4.75H.5V2.5h15V4z" />
    </svg>
)

const DefaultGridIcon = ({ width = "24", height = "24" }: IconProps) => (
    <svg
        width={`${width}`}
        height={`${height}`}
        data-encore-id="icon"
        role="img"
        aria-hidden="true"
        viewBox="0 0 16 16"
        fill="currentColor"
    >
        <path d="M1 1h6v6H1V1zm1.5 1.5v3h3v-3h-3zM1 9h6v6H1V9zm1.5 1.5v3h3v-3h-3zM9 1h6v6H9V1zm1.5 1.5v3h3v-3h-3zM9 9h6v6H9V9zm1.5 1.5v3h3v-3h-3z" />
    </svg>
)

const CompactGridIcon = ({ width = "24", height = "24" }: IconProps) => (
    <svg
        width={`${width}`}
        height={`${height}`}
        data-encore-id="icon"
        role="img"
        aria-hidden="true"
        viewBox="0 0 16 16"
        fill="currentColor"
    >
        <path d="M1 1h3v3H1V1Zm0 5.5h3v3H1v-3ZM4 12H1v3h3v-3ZM6.5 1h3v3h-3V1Zm3 5.5h-3v3h3v-3Zm-3 5.5h3v3h-3v-3ZM15 1h-3v3h3V1Zm-3 5.5h3v3h-3v-3Zm3 5.5h-3v3h3v-3Z" />
    </svg>
)


const DownArrowIcon = ({ width = "24", height = "24" }: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={`${width}`} height={`${height}`} className="-rotate-90" viewBox="0 0 24 24"><defs><path id="ic_navigation_goback-a" d="M16,22 C15.744,22 15.488,21.902 15.293,21.707 L6.293,12.707 C5.902,12.316 5.902,11.684 6.293,11.293 L15.293,2.293 C15.684,1.902 16.316,1.902 16.707,2.293 C17.098,2.684 17.098,3.316 16.707,3.707 L8.414,12 L16.707,20.293 C17.098,20.684 17.098,21.316 16.707,21.707 C16.512,21.902 16.256,22 16,22 Z"></path></defs><g fill-rule="evenodd" fill="transparent"><rect width="24" height="24"></rect><use href="#ic_navigation_goback-a" fill="currentColor"></use></g></svg>
)

const QueueIcon = ({ width = "24", height = "24" }: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={`${width}`} height={`${height}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15V6" /><path d="M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" /><path d="M12 12H3" /><path d="M16 6H3" /><path d="M12 18H3" /></svg>
)

const MoreIcon = ({ width = "24", height = "24" }: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={`${width}`} height={`${height}`} viewBox="0 0 24 24"><defs><path id="ic_action_more-a" d="M19,14 C17.895,14 17,13.105 17,12 C17,10.895 17.895,10 19,10 C20.105,10 21,10.895 21,12 C21,13.105 20.105,14 19,14 Z M14,12 C14,10.895 13.105,10 12,10 C10.895,10 10,10.895 10,12 C10,13.105 10.895,14 12,14 C13.105,14 14,13.105 14,12 Z M7,12 C7,10.895 6.105,10 5,10 C3.895,10 3,10.895 3,12 C3,13.105 3.895,14 5,14 C6.105,14 7,13.105 7,12 Z"></path></defs><g fill-rule="evenodd" fill="transparent"><rect width="24" height="24"></rect><use fill-rule="nonzero" href="#ic_action_more-a" fill="currentColor"></use></g></svg>
)

const PlayIcon = ({ width = "24", height = "24" }: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={`${width}`} height={`${height}`} viewBox="0 0 24 24"><defs><path id="ic_playback_play-a" d="M21.54933,11.208 L7.32711083,2.131 C7.05155533,1.955 6.7155554,1.957 6.44177768,2.136 C6.16799996,2.315 6,2.644 6,3 L6,21 C6,21.354 6.16711108,21.683 6.43911102,21.862 C6.57777765,21.954 6.73333318,22 6.8888887,22 C7.038222,22 7.18666641,21.958 7.32177749,21.873 L21.5439967,12.951 C21.8239966,12.775 21.9991077,12.442 22,12.081 C22.0008855,11.72 21.8293299,11.386 21.54933,11.208 Z"></path></defs><g fill-rule="evenodd" fill="transparent"><rect width="24" height="24"></rect><use href="#ic_playback_play-a" fill="currentColor"></use></g></svg>
)

const PauseIcon = ({ width = "24", height = "24" }: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={`${width}`} height={`${height}`} viewBox="0 0 24 24"><defs><path id="ic_playback_pause-a" d="M9,22 L6,22 C5.45,22 5,21.55 5,21 L5,3 C5,2.45 5.45,2 6,2 L9,2 C9.55,2 10,2.45 10,3 L10,21 C10,21.55 9.55,22 9,22 Z M19,21 L19,3 C19,2.45 18.55,2 18,2 L15,2 C14.45,2 14,2.45 14,3 L14,21 C14,21.55 14.45,22 15,22 L18,22 C18.55,22 19,21.55 19,21 Z"></path></defs><g fill-rule="evenodd" fill="transparent"><rect width="24" height="24"></rect><use fill-rule="nonzero" href="#ic_playback_pause-a" fill="currentColor"></use></g></svg>
)

const PrevIcon = ({ width = "24", height = "24" }: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={`${width}`} height={`${height}`} viewBox="0 0 24 24"><defs><path id="ic_playback_previous-a" d="M18.462,4.113 C18.131,3.943 17.733,3.967 17.427,4.181 L9,10.079 L9,4 C9,3.45 8.55,3 8,3 L6,3 C5.45,3 5,3.45 5,4 L5,20 C5,20.55 5.45,21 6,21 L8,21 C8.55,21 9,20.55 9,20 L9,13.921 L17.427,19.82 C17.598,19.939 17.799,20 18,20 C18.158,20 18.316,19.963 18.462,19.887 C18.793,19.715 19,19.373 19,19 L19,5 C19,4.627 18.793,4.285 18.462,4.113 Z"></path></defs><g fill-rule="evenodd" fill="transparent"><rect width="24" height="24"></rect><use href="#ic_playback_previous-a" fill="currentColor"></use></g></svg>
)


const NextIcon = ({ width = "24", height = "24" }: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={`${width}`} height={`${height}`} viewBox="0 0 24 24"><defs><path id="ic_playback_next-a" d="M18,3 L16,3 C15.45,3 15,3.45 15,4 L15,10.067 L6.57,4.182 C6.26,3.97 5.87,3.939 5.54,4.111 C5.21,4.293 5,4.636 5,5.009 L5,18.99 C5,19.363 5.21,19.707 5.54,19.878 C5.68,19.96 5.84,20 6,20 C6.2,20 6.4,19.939 6.57,19.818 L15,13.923 L15,20 C15,20.55 15.45,21 16,21 L18,21 C18.55,21 19,20.55 19,20 L19,4 C19,3.45 18.55,3 18,3 Z"></path></defs><g fill-rule="evenodd" fill="transparent"><rect width="24" height="24"></rect><use href="#ic_playback_next-a" fill="currentColor"></use></g></svg>
)

const MicIcon = ({ width = "24", height = "24" }: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={`${width}`} height={`${height}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" /><path d="M19 10v2a7 7 0 0 1-14 0v-2" /><line x1="12" x2="12" y1="19" y2="22" /></svg>
)

const CloseIcon = ({ width = "24", height = "24" }: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={`${width}`} height={`${height}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
)

const SkipBackwardIcon = ({ width = "24", height = "24" }: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={`${width}`} height={`${height}`} viewBox="0 0 24 24">
        <defs>
            <path id="ic_playback_jumpback15-a" d="M12,1 C9.447,1 7.051,1.865 5.124,3.417 L3.854,2.146 C3.724,2.016 3.534,1.967 3.355,2.021 C3.179,2.074 3.046,2.221 3.01,2.401 L2.01,7.401 C1.977,7.566 2.028,7.735 2.146,7.854 C2.241,7.948 2.369,8 2.5,8 C2.533,8 2.565,7.997 2.598,7.99 L7.598,6.99 C7.779,6.954 7.925,6.821 7.978,6.645 C8.031,6.468 7.983,6.277 7.853,6.146 L6.553,4.846 C8.099,3.662 9.988,3 12,3 C16.963,3 21,7.038 21,12 C21,16.963 16.963,21 12,21 C9.143,21 6.518,19.688 4.799,17.399 C4.467,16.958 3.841,16.869 3.399,17.2 C2.958,17.532 2.868,18.159 3.2,18.6 C5.3,21.396 8.507,23 12,23 C18.065,23 23,18.065 23,12 C23,5.935 18.065,1 12,1 Z M10.349,15 C10.4283333,15 10.4835833,14.983 10.51475,14.949 C10.5459167,14.915 10.5615,14.8611667 10.5615,14.7875 L10.5615,14.7875 L10.5615,9.322 C10.5615,9.24266667 10.5459167,9.18741667 10.51475,9.15625 C10.4835833,9.12508333 10.4283333,9.1095 10.349,9.1095 L10.349,9.1095 L9.6435,9.1095 C9.5075,9.1095 9.38,9.13783333 9.261,9.1945 L9.261,9.1945 L7.9775,9.781 C7.90383333,9.815 7.85425,9.85183333 7.82875,9.8915 C7.80325,9.93116667 7.7905,9.99066667 7.7905,10.07 L7.7905,10.07 L7.7905,10.631 C7.7905,10.7386667 7.83016667,10.7925 7.9095,10.7925 C7.94916667,10.7925 8.02566667,10.7726667 8.139,10.733 L8.139,10.733 L9.3035,10.3505 L9.3035,14.7875 C9.3035,14.8611667 9.3205,14.915 9.3545,14.949 C9.3885,14.983 9.44233333,15 9.516,15 L9.516,15 L10.349,15 Z M14.208,15.1275 C14.6443333,15.1275 15.0339167,15.0495833 15.37675,14.89375 C15.7195833,14.7379167 15.98875,14.5126667 16.18425,14.218 C16.37975,13.9233333 16.4775,13.5776667 16.4775,13.181 C16.4775,12.637 16.3018333,12.2020833 15.9505,11.87625 C15.5991667,11.5504167 15.1316667,11.3875 14.548,11.3875 C14.293,11.3875 14.0493333,11.4158333 13.817,11.4725 L13.817,11.4725 L13.9105,10.0785 L15.993,10.0785 C16.0723333,10.0785 16.1275833,10.0615 16.15875,10.0275 C16.1899167,9.9935 16.2055,9.93966667 16.2055,9.866 L16.2055,9.866 L16.2055,9.322 C16.2055,9.24266667 16.1899167,9.18741667 16.15875,9.15625 C16.1275833,9.12508333 16.0723333,9.1095 15.993,9.1095 L15.993,9.1095 L13.0775,9.1095 C13.0038333,9.1095 12.9485833,9.12791667 12.91175,9.16475 C12.8749167,9.20158333 12.8536667,9.25966667 12.848,9.339 L12.848,9.339 L12.712,11.634 L12.712,12.1695 C12.712,12.2431667 12.729,12.297 12.763,12.331 C12.797,12.365 12.8508333,12.382 12.9245,12.382 C12.9585,12.382 13.0024167,12.3791667 13.05625,12.3735 C13.1100833,12.3678333 13.188,12.3593333 13.29,12.348 C13.5733333,12.3253333 13.8453333,12.314 14.106,12.314 C14.4856667,12.314 14.7661667,12.38625 14.9475,12.53075 C15.1288333,12.67525 15.2195,12.9005 15.2195,13.2065 C15.2195,13.5125 15.1288333,13.7448333 14.9475,13.9035 C14.7661667,14.0621667 14.4998333,14.1415 14.1485,14.1415 C13.9501667,14.1415 13.7475833,14.1245 13.54075,14.0905 C13.3339167,14.0565 13.0746667,13.9941667 12.763,13.9035 C12.7176667,13.8921667 12.6850833,13.8836667 12.66525,13.878 C12.6454167,13.8723333 12.627,13.8695 12.61,13.8695 C12.5136667,13.8695 12.4655,13.9346667 12.4655,14.065 L12.4655,14.065 L12.4655,14.592 C12.4655,14.6656667 12.47825,14.7195 12.50375,14.7535 C12.52925,14.7875 12.5788333,14.8186667 12.6525,14.847 C13.1398333,15.034 13.6583333,15.1275 14.208,15.1275 Z"></path>
        </defs>
        <g fill-rule="evenodd" fill="transparent">
            <rect width="24" height="24"></rect>
            <use fill-rule="nonzero" href="#ic_playback_jumpback15-a" fill="currentColor"></use>
        </g>
    </svg>
)

const SkipForwardIcon = ({ width = "24", height = "24" }: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={`${width}`} height={`${height}`} viewBox="0 0 24 24">
        <defs>
            <path id="ic_playback_jumpforward30-a" d="M9.089,15.13 C8.858,15.13 8.614,15.105 8.357,15.056 C8.1,15.007 7.862,14.939 7.642,14.852 C7.567,14.823 7.517,14.79 7.49,14.752 C7.464,14.715 7.451,14.65 7.451,14.557 L7.451,14.045 C7.451,13.912 7.5,13.846 7.598,13.846 C7.615,13.846 7.634,13.849 7.655,13.855 C7.674,13.861 7.708,13.869 7.754,13.881 C8.326,14.043 8.757,14.124 9.046,14.124 C9.416,14.124 9.698,14.044 9.891,13.885 C10.085,13.726 10.181,13.494 10.181,13.187 C10.181,12.915 10.092,12.715 9.913,12.584 C9.734,12.454 9.457,12.389 9.081,12.389 C8.93,12.389 8.805,12.395 8.704,12.406 C8.602,12.418 8.517,12.423 8.447,12.423 C8.332,12.423 8.274,12.354 8.274,12.215 L8.274,11.903 C8.274,11.799 8.284,11.721 8.304,11.669 C8.323,11.617 8.366,11.556 8.429,11.487 L9.827,9.98 L7.746,9.98 C7.671,9.98 7.616,9.963 7.581,9.928 C7.547,9.893 7.529,9.839 7.529,9.763 L7.529,9.209 C7.529,9.128 7.547,9.072 7.581,9.04 C7.616,9.008 7.671,8.992 7.746,8.992 L10.971,8.992 C11.052,8.992 11.108,9.008 11.14,9.04 C11.171,9.072 11.187,9.128 11.187,9.209 L11.187,9.686 C11.187,9.79 11.177,9.868 11.157,9.92 C11.137,9.972 11.095,10.033 11.032,10.102 L9.662,11.498 C10.217,11.527 10.653,11.692 10.971,11.992 C11.289,12.293 11.448,12.689 11.448,13.18 C11.448,13.579 11.348,13.925 11.148,14.22 C10.949,14.515 10.671,14.74 10.316,14.896 C9.96,15.052 9.552,15.13 9.089,15.13 Z M14.542,15.13 C13.808,15.13 13.244,14.859 12.851,14.315 C12.458,13.772 12.262,12.994 12.262,11.983 C12.262,10.977 12.46,10.203 12.855,9.66 C13.251,9.117 13.813,8.845 14.541,8.845 C15.269,8.845 15.831,9.117 16.227,9.66 C16.622,10.204 16.82,10.978 16.82,11.983 C16.82,12.994 16.624,13.772 16.231,14.315 C15.84,14.858 15.276,15.13 14.542,15.13 Z M14.542,14.09 C14.894,14.09 15.146,13.928 15.296,13.604 C15.446,13.28 15.521,12.74 15.521,11.983 C15.521,11.232 15.446,10.694 15.296,10.371 C15.145,10.047 14.894,9.885 14.542,9.885 C14.19,9.885 13.938,10.047 13.788,10.371 C13.638,10.694 13.563,11.232 13.563,11.983 C13.563,12.74 13.638,13.28 13.788,13.604 C13.939,13.928 14.19,14.09 14.542,14.09 Z M20.99,2.402 C20.954,2.221 20.821,2.075 20.644,2.022 C20.471,1.968 20.276,2.016 20.146,2.147 L18.875,3.418 C16.948,1.865 14.553,1 12,1 C5.935,1 1,5.935 1,12 C1,18.065 5.935,23 12,23 C15.492,23 18.699,21.396 20.801,18.601 C21.132,18.16 21.043,17.533 20.602,17.201 C20.162,16.87 19.535,16.958 19.202,17.4 C17.481,19.688 14.857,21 12,21 C7.038,21 3,16.963 3,12 C3,7.038 7.038,3 12,3 C14.012,3 15.901,3.662 17.447,4.846 L16.147,6.146 C16.016,6.276 15.968,6.468 16.022,6.645 C16.076,6.821 16.221,6.954 16.403,6.99 L21.403,7.99 C21.435,7.997 21.468,8 21.5,8 C21.631,8 21.759,7.948 21.854,7.854 C21.972,7.736 22.024,7.566 21.991,7.402 L20.99,2.402 Z"></path>
        </defs>
        <g fill-rule="evenodd" fill="transparent">
            <rect width="24" height="24"></rect>
            <use fill-rule="nonzero" href="#ic_playback_jumpforward30-a" fill="currentColor"></use>
        </g>
    </svg>
)

const MuteIcon = ({ width = "24", height = "24" }: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={`${width}`} height={`${height}`} viewBox="0 0 24 24">
        <defs>
            <path id="ic_playback_volumeon-a" d="M14.447,2.106 C14.306,2.035 14.153,2 14,2 C13.787,2 13.576,2.068 13.4,2.2 L7,7 L3,7 C1.9,7 1,7.9 1,9 L1,15 C1,16.1 1.9,17 3,17 L7,17 L13.4,21.8 C13.576,21.932 13.788,22 14,22 C14.152,22 14.306,21.965 14.447,21.894 C14.786,21.725 15,21.379 15,21 L15,3 C15,2.621 14.786,2.275 14.447,2.106 Z"></path>
        </defs>
        <g fill-rule="evenodd" fill="transparent">
            <use href="#ic_playback_volumeon-a" fill="currentColor"></use>
        </g>
    </svg>
)

const VolumeIcon = ({ width = "24", height = "24" }: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={`${width}`} height={`${height}`} viewBox="0 0 24 24">
        <defs>
            <path id="ic_playback_volumeon-a" d="M14.447,2.106 C14.306,2.035 14.153,2 14,2 C13.787,2 13.576,2.068 13.4,2.2 L7,7 L3,7 C1.9,7 1,7.9 1,9 L1,15 C1,16.1 1.9,17 3,17 L7,17 L13.4,21.8 C13.576,21.932 13.788,22 14,22 C14.152,22 14.306,21.965 14.447,21.894 C14.786,21.725 15,21.379 15,21 L15,3 C15,2.621 14.786,2.275 14.447,2.106 Z"></path>
        </defs>
        <g fill-rule="evenodd" fill="transparent">
            <rect width="24" height="24"></rect>
            <path fill="#FFF" fill-rule="nonzero" d="M18.481,18.999 C18.481,18.775 18.556,18.549 18.711,18.363 C21.762,14.676 21.762,9.323 18.711,5.637 C18.359,5.212 18.419,4.581 18.844,4.229 C19.271,3.877 19.902,3.937 20.253,4.362 C23.915,8.786 23.916,15.211 20.253,19.636 C19.901,20.062 19.27,20.122 18.845,19.77 C18.605,19.573 18.481,19.287 18.481,18.999 Z M16.172,16.82 C16.626,17.135 17.25,17.025 17.567,16.572 C19.478,13.838 19.478,10.163 17.567,7.428 C17.25,6.975 16.626,6.864 16.172,7.18 C15.718,7.497 15.608,8.12 15.924,8.572 C17.357,10.623 17.358,13.377 15.924,15.427 C15.803,15.601 15.744,15.801 15.744,15.998 C15.743,16.314 15.893,16.626 16.172,16.82 Z" opacity=".5"></path>
            <use href="#ic_playback_volumeon-a" fill="currentColor"></use>
        </g>
    </svg>
)

const ExpandIcon = ({ width = "24", height = "24" }: IconProps) => (
    <svg
        width={`${width}`}
        height={`${height}`}
        viewBox="0 0 16 16"
        role="img"
        aria-hidden="true"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M6.53 9.47a.75.75 0 0 1 0 1.06l-2.72 2.72h1.018a.75.75 0 0 1 0 1.5H1.25v-3.579a.75.75 0 0 1 1.5 0v1.018l2.72-2.72a.75.75 0 0 1 1.06 0zm2.94-2.94a.75.75 0 0 1 0-1.06l2.72-2.72h-1.018a.75.75 0 1 1 0-1.5h3.578v3.579a.75.75 0 0 1-1.5 0V3.81l-2.72 2.72a.75.75 0 0 1-1.06 0z" />
    </svg>
)

const MinimizeIcon = ({ width = "24", height = "24" }: IconProps) => (
    <svg
        width={`${width}`}
        height={`${height}`}
        viewBox="0 0 16 16"
        role="img"
        aria-hidden="true"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M14.53 1.47a.75.75 0 0 1 0 1.06l-2.72 2.72h1.018a.75.75 0 1 1 0 1.5H9.25V3.171a.75.75 0 1 1 1.5 0V4.19l2.72-2.72a.75.75 0 0 1 1.06 0zM1.47 14.53a.75.75 0 0 1 0-1.06l2.72-2.72H3.171a.75.75 0 0 1 0-1.5H6.75v3.579a.75.75 0 1 1-1.5 0V11.81l-2.72 2.72a.75.75 0 0 1-1.06 0z" />
    </svg>
)

const FullScreenIcon = ({ width = "24", height = "24" }: IconProps) => (
    <svg
        width={`${width}`}
        height={`${height}`}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.25 3C0.25 2.0335 1.0335 1.25 2 1.25H5.375V2.75H2C1.86193 2.75 1.75 2.86193 1.75 3V5.42857H0.25V3ZM14 2.75H10.625V1.25H14C14.9665 1.25 15.75 2.0335 15.75 3V5.42857H14.25V3C14.25 2.86193 14.1381 2.75 14 2.75ZM1.75 10.5714V13C1.75 13.1381 1.86193 13.25 2 13.25H5.375V14.75H2C1.0335 14.75 0.25 13.9665 0.25 13V10.5714H1.75ZM14.25 13V10.5714H15.75V13C15.75 13.9665 14.9665 14.75 14 14.75H10.625V13.25H14C14.1381 13.25 14.25 13.1381 14.25 13Z"
            fill="currentColor"
        />
    </svg>
)

const ExitScreenIcon = ({ width = "24", height = "24" }: IconProps) => (
    <svg
        width={`${width}`}
        height={`${height}`}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.12 1.25V3.67857C12.12 3.81664 12.2319 3.92857 12.37 3.92857H15.75V5.42857H12.37C11.4035 5.42857 10.62 4.64507 10.62 3.67857V1.25H12.12ZM3.87998 3.67895V1.279H5.37998V3.67895C5.37998 4.64545 4.59648 5.42895 3.62998 5.42895H0.26998V3.92895H3.62998C3.76805 3.92895 3.87998 3.81702 3.87998 3.67895ZM10.62 12.2785C10.62 11.3116 11.4039 10.529 12.37 10.529H15.75V12.029H12.37C12.2315 12.029 12.12 12.1409 12.12 12.2785V14.739H10.62V12.2785ZM3.63091 12.0603H0.25V10.5603H3.63091C4.5983 10.5603 5.38 11.3447 5.38 12.3103V14.7389H3.88V12.3103C3.88 12.1714 3.76809 12.0603 3.63091 12.0603Z"
            fill="currentColor"
        />
    </svg>
)

const LeftArrowIcon = ({ width = "24", height = "24" }: IconProps) => (
    <svg
        width={`${width}`} height={`${height}`}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="currentColor"
    >
        <path
            d="M15 18L9 12L15 6"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
)

const RightArrowIcon = ({ width = "24", height = "24" }: IconProps) => (
    <svg
        width={`${width}`} height={`${height}`}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="currentColor"
    >
        <path
            d="M9 6L15 12L9 18"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
)

const ShareIcon = ({ width = "24", height = "24" }: IconProps) => (
    <svg
        width={`${width}`} height={`${height}`}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M20 13V17.5C20 20.5577 16 20.5 12 20.5C8 20.5 4 20.5577 4 17.5V13M12 3L12 15M12 3L16 7M12 3L8 7"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
)


//close
export {
    LogoIcon,
    HomeIcon,
    ExploreIcon,
    LibrarayIcon,
    SearchIcon,
    AccountIcon,
    PlusIcon,
    DefaultListIcon,
    CompactListIcon,
    DefaultGridIcon,
    CompactGridIcon,
    DownArrowIcon,
    QueueIcon,
    MoreIcon,
    PlayIcon,
    PauseIcon,
    PrevIcon,
    NextIcon,
    SkipBackwardIcon,
    SkipForwardIcon,
    MuteIcon,
    VolumeIcon,
    ExpandIcon,
    MinimizeIcon,
    FullScreenIcon,
    ExitScreenIcon,
    LeftArrowIcon,
    RightArrowIcon,
    HomeFilledIcon,
    ExploreFilledIcon,
    LibrarayFilledIcon,
    SearchFilledIcon,
    MicIcon,
    CloseIcon,
    HeartIcon,
    ShareIcon
}