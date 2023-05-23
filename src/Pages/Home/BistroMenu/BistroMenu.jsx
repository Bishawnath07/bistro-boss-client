import img from '../../../assets/home/chef-service.jpg'

const BistroMenu = () => {
    return (
        <div className="bistro-menu relative">
            <img src={img} alt="" />
           <div className=' text-center absolute md:bg-white  -mt-36 md:-mt-80 md:ml-[175px] md:w-8/12 p-5'> 
           <h2 className='text-xl md:text-4xl uppercase font-semibold text-center md:my-8'>Bistro Boss</h2>
           <p className='mb-5  hidden md:block md:text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
           <p className='mb-5 md:hidden text-sm font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, eaque numquam sequi unde molestias quam..</p>
           </div>
        </div>
    );
};

export default BistroMenu;