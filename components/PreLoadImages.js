const style = {
    width: '10px',
    height: '10px',
    display: 'none',
}

export default function PreLoadImage() {
    return(
        <>
            <img src={'/Images/bg-desktop-dark.jpg'} style={style}/>
            <img src={'/Images/bg-desktop-light.jpg'} style={style}/>
            <img src={'/Images/bg-mobile-dark.jpg'} style={style}/>
            <img src={'/Images/bg-mobile-light.jpg'} style={style}/>
        </>
    )
}