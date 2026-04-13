import { PortableText } from '@portabletext/react'

export default function PortableTextRenderer({ value }) {
  return (
    <PortableText
      value={value}
      components={{
        types: {
          image: ({ value }) => (
            <img
              src={value?.asset?.url}
              alt={value?.alt || ''}
              className="my-6 rounded-xl"
            />
          ),
        },
      }}
    />
  )
}