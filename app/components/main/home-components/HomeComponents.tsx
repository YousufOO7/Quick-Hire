
import Banner from '../pages/banner/Banner';
import Marquee from '../pages/marquee/Marquee';
import ExploreByCategory from '../pages/categories/ExploreByCategory';
import JobsToday from '../pages/jobsToday/JobsToday';
import FeaturedJobs from '../pages/featuredJobs/FeaturedJobs';
import LatestJobs from '../pages/latestJobs/LatestJobs';

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