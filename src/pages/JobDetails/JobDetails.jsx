import React from 'react';
import { Link } from 'react-router';
import { useLoaderData } from 'react-router';

const JobDetails = () => {
    const {title, _id}=useLoaderData();
     
    return (
        <div>
            <h1>{title}</h1>
            <Link to={`/jobApply/${_id}`}><button className="btn btn-primary">Apply now</button></Link>
        </div>
    );
};

export default JobDetails;