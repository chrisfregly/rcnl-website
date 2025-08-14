
function UnderlineEffect({ underline = false, height = "h-1.5", children }) {

    return (
        
        <span className={`relative z-10 after:absolute after:w-full ${ underline ? `after:${height} after:scale-100` : `hover:after:${height} after:scale-0` } after:duration-150 after:ease-in-out hover:after:scale-100 after:bottom-0 after:block after:bg-blue after:-z-1 after:opacity-35`}>
            { children }
            <span className="hover:after:h-5 after:h-5"/>
        </span>
    )
}

export default UnderlineEffect
