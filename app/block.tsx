import Image from 'next/image';

const Block: React.FC = () => {
    return ( 
    <div className="p-4 mx-auto relative z-10 w-full pt-10 pb-20 md:pt-20 flex flex-col md:flex-row items-start md:items-center">
        <div className="md:w-1/2 pl-8 md:pl-16">
            <div className="text-2xl ml-24 pb-5 md:text-4xl text-left bg-clip-text text-transparent bg-gradient-to-b from-sky-400 to bg-purple-500 bg-opacity-50">
            While you spent time <br />with your family,<br />our solutions work <br />towards your success.
            </div>
            <p className="mt-4 ml-24 text-lg font-normal text-neutral-300 max-w-lg text-left">
            We leverage top-tier Internet marketing tools to ensure the success of our valued partners. 
            Our commitment includes a customer-centric approach, delivering predictable results, 
            and an unwavering focus on enhancing profitability.
            </p>
        </div>
        <div className="md:w-1/2 flex justify-center mt-4 md:mt-0">
        <Image 
            src="/images/wave.png" 
            alt="Marketing Wave" 
            width={521} 
            height={640} 
            className="max-w-full h-auto" 
        />
        </div>
    </div>
    );
}

export default Block;