
const Banner = () => {

    return (

        <div className="carousel w-full">

            <div id="slide1" className="carousel-item relative w-full">

                <img src="https://i.ibb.co/Snn21W6/slider1.png" className="w-full" />

                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <div className="w-11/12 md:w-4/5 mx-auto text-center">

                        <h2 className="text-white text-2xl md:text-6xl font-bold">Master the Art of Portrait Drawing with Precision</h2>

                        <p className="text-white my-4 text-xs md:text-base">Capture the essence of your subjects with our portrait drawing collection. From delicate pencil sketches to bold acrylic portraits, our range offers everything you need to create lifelike and expressive art</p>
                    </div>
                </div>

                <div className="absolute flex justify-between transform -translate-y-1/2 left-2 md:left-5 right-2 md:right-5 top-1/2">
                    <a href="#slide3" className="bg-[#6B2B06] hover:bg-[#8E4826] text-white px-2 rounded-full">❮</a>

                    <a href="#slide2" className="bg-[#6B2B06] hover:bg-[#8E4826] text-white px-2 rounded-full">❯</a>
                </div>

            </div>

            <div id="slide2" className="carousel-item relative w-full">

                <img src="https://i.ibb.co/n0kCqc1/slider2.png" className="w-full" />

                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <div className="w-11/12 md:w-4/5 mx-auto text-center">

                        <h2 className="text-white text-2xl md:text-6xl font-bold">Explore the Beauty of Nature with Landscape Paintings</h2>

                        <p className="text-white my-4 text-xs md:text-base">Immerse yourself in stunning mountain views and serene forest landscapes. Discover unique canvases that bring the tranquility and beauty of nature into your home. Perfect for nature enthusiasts and art lovers alike.</p>
                    </div>
                </div>

                <div className="absolute flex justify-between transform -translate-y-1/2 left-2 md:left-5 right-2 md:right-5 top-1/2">

                    <a href="#slide1" className="bg-[#6B2B06] hover:bg-[#8E4826] text-white px-2 rounded-full">❮</a>

                    <a href="#slide3" className="bg-[#6B2B06] hover:bg-[#8E4826] text-white px-2 rounded-full">❯</a>
                </div>

            </div>

            <div id="slide3" className="carousel-item relative w-full">

                <img src="https://i.ibb.co/k8XZyp5/slider3.png" className="w-full" />

                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <div className="w-11/12 md:w-4/5 mx-auto text-center">

                        <h2 className="text-white text-2xl md:text-6xl font-bold">Unleash Creativity with Diverse Painting Techniques</h2>

                        <p className="text-white my-4 text-xs md:text-base">Explore a variety of painting styles from watercolor florals to abstract oil art. Whether you prefer the softness of watercolor or the richness of oil, find inspiration and supplies for every artistic journey.</p>
                    </div>
                </div>

                <div className="absolute flex justify-between transform -translate-y-1/2 left-2 md:left-5 right-2 md:right-5 top-1/2">
                    <a href="#slide2" className="bg-[#6B2B06] hover:bg-[#8E4826] text-white px-2 rounded-full">❮</a>

                    <a href="#slide4" className="bg-[#6B2B06] hover:bg-[#8E4826] text-white px-2 rounded-full">❯</a>
                </div>

            </div>

        </div>
    );
};

export default Banner;
