import { PortableText } from "@portabletext/react";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "../sanity"; // adjust path if needed

const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

export default function PortableTextRenderer({ value }) {
  return (
    <div className="max-w-3xl mx-auto">

      <PortableText
        value={value}
        components={{
          types: {
            image: ({ value }) => (
              <div className="my-12">
                <img
                  src={urlFor(value).width(1200).url()}
                  alt={value?.alt || ""}
                  className="w-full rounded-2xl shadow-md object-cover"
                />
                {value?.alt && (
                  <p className="text-sm text-gray-700 text-center mt-3">
                    {value.alt}
                  </p>
                )}
              </div>
            ),
          },

          block: {
            h1: ({ children }) => (
              <h1 className="text-4xl md:text-5xl font-semibold mt-12 mb-6 text-gray-900 leading-tight">
                {children}
              </h1>
            ),
            h2: ({ children }) => (
              <h2 className="text-3xl md:text-4xl font-semibold mt-12 mb-5 text-gray-900">
                {children}
              </h2>
            ),
            h3: ({ children }) => (
              <h3 className="text-2xl md:text-3xl font-semibold mt-10 mb-4 text-gray-800">
                {children}
              </h3>
            ),
            normal: ({ children }) => (
              <p className="text-lg leading-relaxed text-gray-700 mb-6">
                {children}
              </p>
            ),
            blockquote: ({ children }) => (
              <blockquote className="border-l-4 border-gray-300 pl-5 italic text-gray-600 my-8">
                {children}
              </blockquote>
            ),
          },

          list: {
            bullet: ({ children }) => (
              <ul className="list-disc pl-6 space-y-3 my-8 text-gray-700 text-lg">
                {children}
              </ul>
            ),
            number: ({ children }) => (
              <ol className="list-decimal pl-6 space-y-3 my-8 text-gray-700 text-lg">
                {children}
              </ol>
            ),
          },

          listItem: {
            bullet: ({ children }) => (
              <li className="leading-relaxed">{children}</li>
            ),
            number: ({ children }) => (
              <li className="leading-relaxed">{children}</li>
            ),
          },

          marks: {
            strong: ({ children }) => (
              <strong className="font-semibold text-gray-900">
                {children}
              </strong>
            ),
            em: ({ children }) => (
              <em className="italic text-gray-800">{children}</em>
            ),
            link: ({ value, children }) => (
              <a
                href={value?.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline hover:text-blue-800 transition"
              >
                {children}
              </a>
            ),
          },
        }}
      />
    </div>
  );
}