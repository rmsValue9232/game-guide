import '../styles/GameCard.css';

function GameCard({title, thumbnail, genre, platform, date, id}){
    return (
        <div id={id} className=" group w-4/5 sm:w-72 md:w-4/12 lg:w-3/12 xl:w-2/12 flex flex-col gap-2 flex-shrink-0 justify-center  rounded shadow shadow-black p-3 border-y-4 border-y-tertiary">
            <div className=' -mx-3 -mt-3 border-b-2 overflow-hidden'>
                <img alt="thumbnail" src={thumbnail} className="w-full mx-auto group-hover:scale-110 -z-10"/>
            </div>
            <div className=''>
                <h3 className='font-semibold text-xl'>{title}</h3>
                <h4 className=''>Platform : {platform}</h4>
                <h4>Genre : {genre}</h4>
                <h4>Release Date : {date}</h4>
            </div>
        </div>
    );
}

export default GameCard;