const scrollBar = (props) => {
    return(
        <div style={{overflowY: 'scroll', height: '72vh'}}>
            {props.children}
        </div>
    )
}

export default scrollBar;