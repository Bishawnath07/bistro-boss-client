
import img2 from '../../../assets/home/slide5.jpg'
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const ChefRecipe = () => {
    return (
        <div className='mt-10'>
            <SectionTitle subHeading="---Should Try---" heading="CHEF RECOMMENDS" ></SectionTitle>
            <div className='grid grid-cols-1 md:grid-cols-3 mt-20 gap-5 mx-10 md:mx-0'>

            <div className="card card-compact w-80 bg-base-100 shadow-xl">
                <figure><img className='rounded-lg ' src={img2} alt="Shoes" /></figure>
                <div className="card-body items-center">
                    <h2 className="card-title">Caeser Salad</h2>
                    <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-outline border-b-4 border-slate-700">add to cart</button>
                    </div>
                </div>
            </div>
            <div className="card card-compact w-80 bg-base-100 shadow-xl">
                <figure><img className='rounded-lg ' src={img2} alt="Shoes" /></figure>
                <div className="card-body items-center">
                    <h2 className="card-title">Caeser Salad</h2>
                    <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-outline border-b-4 border-slate-700">add to cart</button>
                    </div>
                </div>
            </div>
            <div className="card card-compact w-80 bg-base-100 shadow-xl">
                <figure><img className='rounded-lg ' src={img2} alt="Shoes" /></figure>
                <div className="card-body items-center">
                    <h2 className="card-title">Caeser Salad</h2>
                    <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-outline border-b-4 border-slate-700">add to cart</button>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default ChefRecipe;