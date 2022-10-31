"use client";

import { use } from "react";
import Head from "next/head";
import sanityClient from "/sanityClient";
import imageUrlBuilder from "@sanity/image-url";
import { PortableText } from "@portabletext/react";

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

export default function Post({ params }) {
  let slug = params.slug;
  let post = use(getData(slug));

  return (
    <div>
      <div
        className={`${inter.className} w-full py-[7rem] px-x-pad border-white/30 border-b-[2px]`}
      >
        <div></div>
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
          <PortableText value={post.body} />
        </div>
      </div>
    </div>
  );
}
