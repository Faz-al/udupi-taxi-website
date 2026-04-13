import { useEffect, useState } from "react";
import { client } from "../../sanity";
import { Link } from "react-router-dom";
import { urlFor } from "../../imageUrl";

export default function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    client
      .fetch(`*[_type == "service"]{
  _id,
  title,
  slug,
  image,
  description,
  excerpt
}`)
      .then((data) => setServices(data));
  }, []);

  return (
  <div className="py-32 bg-white">

    <div className="max-w-7xl mx-auto px-6">

      <div className="text-center mb-20">
        <h1 className="text-5xl font-semibold tracking-tight mb-4">
          Our Taxi Services
        </h1>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Premium travel solutions designed for comfort, reliability, and class.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">

        {services.map((service) => (
          <Link
            key={service._id}
            to={`/services/${service.slug.current}`}
            className="group"
          >

            <div className="relative rounded-3xl overflow-hidden bg-white border border-gray-200 shadow-sm hover:shadow-2xl transition-all duration-500">

              {/* Image */}
              {service.image && (
                <div className="overflow-hidden">
                  <img
                    src={urlFor(service.image).width(600).url()}
                    alt={service.title}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
              )}

              {/* Content */}
              <div className="p-6">

                <h3 className="text-xl font-semibold mb-2 group-hover:text-red-600 transition-colors">
                  {service.title}
                </h3>

 <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">
  {service.excerpt || service.description?.[0]?.children?.[0]?.text || "View details"}
</p>

                <span className="inline-flex items-center text-sm font-medium text-red-600">
                  View Service
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </span>

              </div>

            </div>

          </Link>
        ))}

      </div>

    </div>

  </div>
);
}