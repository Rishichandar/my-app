
const aboutContent = [
    {
        type: 'heading',
        content: 'About PosBytz',
        className: 'text-black font-roboto text-[50px] font-normal',
    },
    {
        type: 'paragraph',
        content: 'PosBytz is a complete omnichannel solution for Retail & Restaurants.',
    },
    {
        type: 'paragraph',
        content: 'We are a team passionately focused on driving small business success.',
    },
    {
        type: 'paragraph',
        content: 'Our vision is to leverage cloud-based technologies to help companies improve service and profitability.',
    },
    {
        type: 'paragraph',
        content: 'We address the needs of a wide range of customers from small independent stores to local chains and large enterprises.',
    },
    {
        type: 'paragraph',
        content: 'PosBytz is a product of <a href="https://bytize.org" className="text-blue-500 underline">Bytize, Inc.</a>',
    },
   
];

const Aboutposbytz = () => {
    return (
        <>
            <div className="grid grid-cols-2 gap-4 mt-[120px]">
                {/* About Container */}
                <div id="about" className="flex flex-col justify-center ml-[130px]">
                    {aboutContent.map((item, index) => {
                        if (item.type === 'heading') {
                            return <h1 key={index} className={item.className}>{item.content}</h1>;
                        } else if (item.type === 'paragraph') {
                            return (
                                <p key={index} className="text-gray-500 text-lg leading-relaxed" style={{ color: 'grey' }}>
                                    <span dangerouslySetInnerHTML={{ __html: item.content }} />
                                </p>
                            );
                        }
                        return null;
                    })}
                </div>

                {/* Image Container */}
                <div id="image-container" className="grid grid-rows-3 gap-4">
                    {/* First Row: First Image */}
                    <div className="flex items-center justify-center row-start-1">
                        <img src="https://posbytz.com/wp-content/uploads/2021/09/logo_default_2x.svg" alt="PosBytz Logo" className="w-48 h-auto mt-[60px]" />
                    </div>
                    
                    {/* Second Row: Text */}
                    <div className="flex items-center justify-center row-start-2">
                        <span>a product of</span>
                    </div>
                    
                    {/* Third Row: Second Image */}
                    <div className="flex items-center justify-end row-start-3">
                        <img src="https://posbytz.com/wp-content/uploads/2021/09/bytize.svg" alt="Bytize Logo" className="w-38 h-auto mr-[250px] " />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Aboutposbytz;
