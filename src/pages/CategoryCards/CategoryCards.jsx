

const CategoryCards = () => {

    return (

        <div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 items-center gap-6">
                {/* Card 1 */}
                <div className="indicator">
                    <span className="indicator-item indicator-center indicator-middle badge bg-[#F79D84] text-[#401F04] text-xl font-semibold p-4">
                        Landscape Painting
                    </span>
                    <img
                        alt=""
                        src="https://i.ibb.co/YR1k6j0/11.png" />
                </div>

                {/* Card 2 */}
                <div className="indicator">
                    <span className="indicator-item indicator-center indicator-middle badge bg-[#F79D84] text-[#401F04] text-xl font-semibold p-4">
                    Portrait Drawing
                    </span>
                    <img
                        alt=""
                        src="https://i.ibb.co/z2L7ySb/22.png" />
                </div>

                {/* Card 3 */}
                <div className="indicator">
                    <span className="indicator-item indicator-center indicator-middle badge bg-[#F79D84] text-[#401F04] text-xl font-semibold p-4">
                    Watercolor Painting
                    </span>
                    <img
                        alt=""
                        src="https://i.ibb.co/smVcNTT/33.png" />
                </div>

                {/* Card 4 */}
                <div className="indicator">
                    <span className="indicator-item indicator-center indicator-middle badge bg-[#F79D84] text-[#401F04] text-xl font-semibold p-4">
                    Oil Painting
                    </span>
                    <img
                        alt=""
                        src="https://i.ibb.co/ykwqdVd/44.png" />
                </div>

                {/* Card 5 */}
                <div className="indicator">
                    <span className="indicator-item indicator-center indicator-middle badge bg-[#F79D84] text-[#401F04] text-xl font-semibold p-4">
                    Charcoal Sketching
                    </span>
                    <img
                        alt=""
                        src="https://i.ibb.co/31jMbwb/55.png" />
                </div>

                {/* Card 6 */}
                <div className="indicator">
                    <span className="indicator-item indicator-center indicator-middle badge bg-[#F79D84] text-[#401F04] text-xl font-semibold p-4">
                    Cartoon Drawing
                    </span>
                    <img
                        alt=""
                        src="https://i.ibb.co/sFnzXbs/66.png" />
                </div>

            </div>
        </div>
    );
};

export default CategoryCards;