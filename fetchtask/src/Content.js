const Content = ({items}) => {
    return(
        <main>
            <ul>
                {items.map((item) => (
                    <li>
                        {JSON.stringify(item)}
                    </li>
                ))}
            </ul>
        </main>
    )
}
export default Content