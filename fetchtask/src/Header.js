const Header = ({setDataType}) => {
    return(
        <header>
            <button id = "users" onClick={() => setDataType("users")}> users </button>
            <button id = "posts" onClick={()=>setDataType("posts")}> posts </button>
            <button id = "comments" onClick={()=>setDataType("comments")}> comments </button>
        </header>
    )
}

export default Header