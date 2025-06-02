import React, { use } from "react";
import { Link, useParams } from "react-router";
import { AuthContext } from "../../context/authContext/authContext";
import axios from "axios";
import Swal from "sweetalert2";

const ApplyJob = () => {
  const { id: jobId } = useParams();
  const { user } = use(AuthContext);

  const handleApplySubmitJob = (e) => {
    e.preventDefault();
    const form = e.target;
    // const name = form.name.value;
    // const email = user?.email || "unregistered";
    const linkedIn = form.linkedIn.value;
    const github = form.github.value;
    const resume = form.resume.value;

    const applyJob = {
      jobId  ,
      applicant: user.email,
      linkedIn,
      github,
      resume,
        
    }
    axios.post('http://localhost:3000/applications', applyJob)
    .then(res=>{
    if(res.data.insertedId){
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your Application has been submitted successfully",
            showConfirmButton: false,
            timer: 1500
          });
        }
    //   form.reset();
        
    })
    .catch(err=>{
    console.log(err)
    })
  }
  return (
    <div>
        <h3 className="text-3xl">Apply for this Job: <Link to={`/jobs/${jobId}}`}></Link></h3>
      <form onSubmit={handleApplySubmitJob}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          

          <label className="label">LinkedIn Link</label>
          <input type="url" name="linkedIn" className="input" placeholder="LinkedIn link" />

          <label className="label">GitHub link</label>
          <input type="url" name="github" className="input" placeholder="LinkedIn link" />

          <label className="label">Resume Link</label>
          <input type="url" name="resume" className="input" placeholder="Resume Link" />
          <input type="submit" value="Apply" className="btn" />
        </fieldset>
      </form>
    </div>
  );
};

export default ApplyJob;
