
import Banner from '../pages/banner/Banner';
import Marquee from '../pages/marquee/Marquee';
import ExploreByCategory from '../pages/categories/ExploreByCategory';
import FeaturedJobs from '../pages/featuredJobs/FeaturedJobs';
import LatestJobs from '../pages/latestJobs/LatestJobs';
import JobsToday from '../pages/jobsToday/JobsToday';

const HomeComponents = () => {
    return (
        <div >
            <Banner />
            <Marquee />
            <ExploreByCategory />
            <JobsToday />
            <FeaturedJobs />
            <LatestJobs />
        </div>
    );
};

export default HomeComponents;