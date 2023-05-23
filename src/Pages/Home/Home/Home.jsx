import { Helmet } from "react-helmet-async";
import Featured from "../../Featured/Featured";
import Banner from "../Banner/Banner";
import BistroMenu from "../BistroMenu/BistroMenu";
import Category from "../Category/Category";
import ChefRecipe from "../ChefRecipe/ChefRecipe";
import Contact from "../Contact/Contact";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <BistroMenu></BistroMenu>
            <PopularMenu></PopularMenu>
            <Contact></Contact>
            <ChefRecipe></ChefRecipe>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;