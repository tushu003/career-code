import React from 'react';
import JobCard from '../Shared/JobCard';

const HotJobs = ({jobs}) => {
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                {
                    jobs.map(job=><JobCard key={job._id} job={job}></JobCard>)
                }
            </div>
        </div>
    );
};

export default HotJobs;