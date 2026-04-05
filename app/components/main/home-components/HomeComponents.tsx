
import Banner from '../pages/banner/Banner';
import Marquee from '../pages/marquee/Marquee';
import ExploreByCategory from '../pages/categories/ExploreByCategory';

const HomeComponents = () => {
    return (
        <div className='space-y-2'>
            <Banner />
            <Marquee />
            <ExploreByCategory />
        </div>
    );
};

export default HomeComponents;