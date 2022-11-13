"use client";

import { use } from "react";
import Link from "next/link";
import Image from "next/image";
import dateFormat from "dateformat";
import sanityClient from "/sanityClient";
import imageUrlBuilder from "@sanity/image-url";
import { PortableText } from "@portabletext/react";

import { inter } from "../Fonts";
import TableOfContent from "./TableOfContent";
import PortableTextComponents from "./PortableTextComponents";

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
    'categories': categories[]->{title, slug, color},
    publishedAt,
    'headings': body[length(style) == 2 && string::startsWith(style, 'h')]
}`;
  const [post] = await sanityClient.fetch(query);
  return post;
}

export default function Post({ params }) {
  let slug = params.slug;
  let post = use(getData(slug));

  var now = new Date(post.publishedAt) || new Date();

  return (
    <>
      {post ? (
        <>
          <div
            className={`${inter.className} border-gray-900 border-b-2 bg-cover bg-center bg-no-repeat z-10`}
          >
            <div className="w-full h-full flex flex-col py-[9rem] px-x-pad backdrop-blur-xl bg-black/30">
              <div className="flex gap-gap mb-[1rem] items-center">
                <div className="text-p">{dateFormat(now, "mmmm dS, yyyy")}</div>
              </div>
              <h1
                className={`text-[4.7rem] font-bold leading-[110%] tracking-[-0.04em] w-[70%]`}
              >
                {post.title}
              </h1>
              <Image
                src={`${urlFor(post.mainImage).url()}`}
                alt={`${post.title}`}
                width={700}
                height={1200}
              />
              <div className="flex gap-gap items-center mt-[1rem]">
                {post.categories.map((category) => {
                  return (
                    <Link
                      key={category.title}
                      href={`/category/${category.slug.current}`}
                      className={`font-mono backdrop-blur-lg px-[20px] py-[3px] font-medium text-gray-500 text-[12px] border border-gray-600 contrast-more:text-current contrast-more:border-current rounded`}
                    >
                      {category.title}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="flex flex-row w-full px-x-pad gap-[3rem]">
            <div className="w-[65%]">
              <div className={`${inter.className} py-[3rem]`} id="content-body">
                <PortableText
                  value={post.body}
                  components={PortableTextComponents}
                />
              </div>
            </div>
            <div className="w-[35%] border-l-gray-900 border-l-2 px-[3rem] py-[3rem]">
              <TableOfContent headings={post.headings} />
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
}

{
  /* {post.mainImage && (
        <img src={urlFor(post.mainImage).url()} alt={post.title} />
      )}
      <div>
        {post.authorImage && (
          <img src={urlFor(post.authorImage).url()} alt={post.author} />
        )}
        <p>{post.author}</p>
      </div> */
}
