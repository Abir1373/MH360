import galleryData from "../../../../assets/json files/gallery.json";

const HR = () => {
  const hrData = galleryData.filter((item) => item.category === "HR");

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 p-5">
      {hrData.map((item) => (
        <div className="card group bg-white shadow-lg rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
          <figure className="overflow-hidden">
            <img
              src={item.img}
              alt={item.category}
              className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </figure>

          <div className="card-body">
            <h2 className="card-title">{item.category}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HR;
