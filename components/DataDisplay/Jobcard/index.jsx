const JobCard = ({ title, description, created_at, deadline }) => {
  return (
    <div className="bg-[#ffffff] lg:shadow-md p-3">
      <p className="font-[600]">{title}</p>
      <p>{description}</p>
      <button className="bg-blue-500 p-2 mt-3 rounded-md text-[#ffffff]">
        Easy apply
      </button>
      <p className="text-right mb-5">
        Post date: <span className="font-[700]">{created_at}</span>
      </p>
      <p className="text-left mb-5">
        Application deadline: <span className="font-[700]">{deadline}</span>
      </p>
      <hr></hr>
    </div>
  );
};

export default JobCard;
