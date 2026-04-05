
import Banner from '../pages/banner/Banner';
import Marquee from '../pages/marquee/Marquee';
import ExploreByCategory from '../pages/categories/ExploreByCategory';
import JobsToday from '../pages/jobsToday/JobsToday';

const HomeComponents = () => {
    return (
        <div className='space-y-2'>
            <Banner />
            <Marquee />
            <ExploreByCategory />
            <JobsToday />
        </div>
    );
};

export default HomeComponents;