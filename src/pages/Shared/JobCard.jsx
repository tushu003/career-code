import React from 'react';
import { CiLocationOn } from "react-icons/ci";
import { Link } from 'react-router';

const JobCard = ({job}) => {
    const {company, title, company_logo, jobType, category, salaryRange, location,_id, description, requirements, deadline} = job;
    return (
        <div>
          <div className="card bg-base-100  shadow-sm">
  <div className='flex gap-3 items-center p-4'>
  <figure>
    <img
      src={company_logo}
      className='w-16'
      alt="Shoes" />
  </figure>
  <div>
    <h3 className="text-2xl font-bold ">{company}</h3>
    <p className='flex items-center gap-1'><CiLocationOn /> {location}</p>
  </div>
  </div>
  <div className="card-body">
    <h2 className="card-title">
      {title}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    
    <p>{description}</p>
    <div className="card-actions ">
        {
            requirements.map(requirement => <div className="bg-base-300 rounded-lg p-1">{requirement}</div>)
        }
      
      
    </div>
    <div className='flex justify-between items-center mt-2'>
    <p className='text-blue-600'>Salary: {salaryRange.min}-{salaryRange.max}{salaryRange.currency}</p>
    <Link to={`/jobs/${_id}`}><div className="badge badge-outline hover:bg-blue-700 hover:text-white ease-in">Apply Now</div></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default JobCard;