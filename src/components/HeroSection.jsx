import CustomImage from "./CustomImage"

export default function HeroSection(){
    const images = [
        "/img/gallery/bb1.jpg",
        "/img/gallery/bb2.jpg",
        "/img/gallery/bb3.jpg",
        "/img/gallery/bb4.jpg",
        "/img/gallery/bb5.jpg",
        "/img/gallery/bb6.jpg",
        "/img/gallery/bb7.jpg",
        "/img/gallery/bb8.jpg",
        "/img/gallery/bb9.jpg"
    ]
    return (
        <div className="section hero">
            <div className="col typography">
                <h1 className="title">Do You Love Food?</h1>
                <p className="info"><span className="logo-text">dinner?</span> is a place for food lovers made BY food lovers. Start with an ingredient and explore the possibilities. New cuisine ideas are just a click away...</p>
                <button className="btn">explore</button>
            </div>
            <div className="col gallery">
                { images.map((src, index) => (
                    <CustomImage key={index} imgSrc={src} pt={"90%"} />
                )) }
            </div>
        </div>
    )
}