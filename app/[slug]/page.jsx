"use client";

import { use } from "react";
import sanityClient from "/sanityClient";
import imageUrlBuilder from "@sanity/image-url";
import { PortableText } from "@portabletext/react";
import { useNextSanityImage } from "next-sanity-image";
import Image from "next/image";

import { Space_Grotesk, Inter, Krona_One } from "@next/font/google";

const inter = Inter();
const kronoOne = Krona_One({
  weight: "400",
});
const spaceGrotesk = Space_Grotesk();

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

async function getData(slug) {
  const query = `*[_type == 'post' && slug.current == '${slug}']{
    title,
     _id,
     slug,
     mainImage{
        asset->{
            _id,
            url
        }
     },
     'author': author->name,
     'authorImage': author->image,
     body,
}`;
  const [post] = await sanityClient.fetch(query);
  return post;
}
const SanityImage = ({ asset }) => {
  const imageProps = useNextSanityImage(sanityClient, asset);

  if (!imageProps) return null;

  return (
    <Image
      {...imageProps}
      layout="responsive"
      sizes="(max-width: 800px) 100vw, 800px"
    />
  );
};

const portableTextComponents = {
  types: {
    image: ({ value }) => {
      return <SanityImage {...value} />;
    },
    sizeChart: ({ value }) => {
      return (
        <table>
          {value.rows.map((row, index) => {
            if (index == 0) {
              return (
                <tr>
                  {row.cells.map((col) => (
                    <th>{col}</th>
                  ))}
                </tr>
              );
            } else {
              return (
                <tr>
                  {row.cells.map((col) => (
                    <td>{col}</td>
                  ))}
                </tr>
              );
            }
          })}
        </table>
      );
    },
  },
  list: {
    // Ex. 1: customizing common list types
    bullet: ({ children }) => <ul className="mt-xl">{children}</ul>,
    number: ({ children }) => <ol className="mt-lg">{children}</ol>,

    // Ex. 2: rendering custom lists
    checkmarks: ({ children }) => (
      <ol className="m-auto text-lg">{children}</ol>
    ),
  },
  listItem: {
    // Ex. 1: customizing common list types
    bullet: ({ children }) => (
      <li style={{ listStyleType: "disclosure-closed" }}>{children}</li>
    ),

    // Ex. 2: rendering custom list items
    checkmarks: ({ children }) => <li>✅ {children}</li>,
  },
  marks: {
    // Ex. 1: custom renderer for the em / italics decorator
    em: ({ children }) => (
      <em className="text-gray-600 font-semibold">{children}</em>
    ),

    // Ex. 2: rendering a custom `link` annotation
    link: ({ value, children }) => {
      const target = (value?.href || "").startsWith("http")
        ? "_blank"
        : undefined;
      return (
        <a
          href={value?.href}
          target={target}
          rel={target === "_blank" && "noindex nofollow"}
        >
          {children}
        </a>
      );
    },
  },
  block: {
    // Ex. 1: customizing common block types
    h1: ({ children }) => <h1 className="text-2xl">{children}</h1>,
    h2: ({ children }) => <h2 className="text-xl">{children}</h2>,
    h3: ({ children }) => <h3 className="text-lg">{children}</h3>,
    h1: ({ children }) => <h1 className="text-2xl">{children}</h1>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-purple-500">{children}</blockquote>
    ),
  },
};

export default function Post({ params }) {
  let slug = params.slug;
  let post = use(getData(slug));

  return (
    <div>
      <div
        className={`${inter.className} w-full py-[7rem] px-x-pad border-white/30 border-b-[2px]`}
      >
        <h2 className="text-[4rem] font-bold">{post.title}</h2>
      </div>
      {/* {post.mainImage && (
        <img src={urlFor(post.mainImage).url()} alt={post.title} />
      )}
      <div>
        {post.authorImage && (
          <img src={urlFor(post.authorImage).url()} alt={post.author} />
        )}
        <p>{post.author}</p>
      </div> */}
      <div className="px-x-pad">
        <div id="content-body">
          <PortableText value={post.body} components={portableTextComponents} />
        </div>
      </div>
    </div>
  );
}
