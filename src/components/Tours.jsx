import Cards from './Cards.jsx';
function Tours({tours,removeTour}){
    // const data = tours
    return (
        <div className='w-4/5 h-full mt-10 mb-10 flex flex-wrap justify-evenly p-5 '>
            {/* <Cards card1={data[0]}></Cards>
            <Cards card1={data[1]}></Cards>
            <Cards card1={data[2]}></Cards>
            <Cards card1={data[3]}></Cards>
            <Cards card1={data[4]}></Cards>
            <Cards card1={data[5]}></Cards>
            <Cards card1={data[6]}></Cards> */}
            {
            tours.map((tour) => {
                return <Cards tour = {tour} removeTour = {removeTour}></Cards>
            })

            }
        </div>
    );
}

export default Tours;