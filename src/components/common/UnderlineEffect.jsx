
function UnderlineEffect({ underline = false, children }) {
    return (
        <span className={`relative z-10 after:absolute after:w-full ${ underline ? "after:h-1.5 after:scale-100" : "hover:after:h-1.5 after:scale-0" } after:duration-150 after:ease-in-out hover:after:scale-100 after:bottom-0 after:block after:bg-blue after:z-[-1] after:opacity-75`}>
            { children }
        </span>
    )
}

export default UnderlineEffect
