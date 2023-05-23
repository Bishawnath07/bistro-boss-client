
const FoodCard = ({item}) => {
    const {name, image, price, recipe} = item;
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 mt-20 gap-5 mx-10 md:mx-0'>

            <div className="card card-compact w-80 bg-base-100 shadow-xl">
                <figure><img className='rounded-lg ' src={image} alt="Shoes" /></figure>
                <div className="card-body items-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-outline border-b-4 border-slate-700">add to cart</button>
                    </div>
                </div>
            </div>
          
            </div>
    );
};

export default FoodCard;