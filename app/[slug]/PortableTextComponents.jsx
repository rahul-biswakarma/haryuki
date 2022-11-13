import sanityClient from "/sanityClient";
import Image from "next/image";
import { useNextSanityImage } from "next-sanity-image";

import { inter, roboto400 } from "app/Fonts";
import generateSlug from "/utils/generateSlug";

const portableTextComponents = {
  types: {
    image: ({ value }) => {
      return <SanityImage {...value} />;
    },
    sizeChart: ({ value }) => {
      return (
        <table
          className={`${roboto400.className} w-full border-separate border-spacing-2  text-text-1`}
        >
          <thead className="font-[400]">
            <tr key={`tr0`}>
              {value.rows[0].cells.map((col, index2) => (
                <th
                  className="bg-white/10 p-[15px] text-article text-thead"
                  key={`tr0th${index2}`}
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {value.rows.map((row, index) => {
              if (index !== 0) {
                return (
                  <tr key={`tr${index}`}>
                    {row.cells.map((col, index2) => (
                      <td
                        className="bg-white/10 text-article p-[15px] text-tbody"
                        key={`tr${index}td${index2}`}
                      >
                        {col}
                      </td>
                    ))}
                  </tr>
                );
              }
            })}
          </tbody>
        </table>
      );
    },
  },
  list: {
    bullet: ({ children }) => (
      <ul className="mb-[30px] text-article text-text-1 list-disc">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="mb-[20px] text-article text-text-1 list-decimal">
        {children}
      </ol>
    ),
    checkmarks: ({ children }) => (
      <ol className="mb-[20px] text-article text-text-1 list-none">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li
        className={`${inter.className} ml-[2rem] text-article text-li mb-[5px] font-[400]`}
      >
        {children}
      </li>
    ),
    checkmarks: ({ children }) => (
      <li
        className={`${inter.className} ml-[2rem] text-article text-li mb-[5px] font-[400]`}
      >
        ✅ {children}
      </li>
    ),
  },
  marks: {
    em: ({ children }) => <em className="font-[500] text-em">{children}</em>,
    link: ({ value, children }) => {
      const target = (value?.href || "").startsWith("http")
        ? "_blank"
        : undefined;
      return (
        <a
          href={value?.href}
          target={target}
          rel={target === "_blank" && "noindex nofollow"}
          className="text-link text-article"
        >
          {children}
        </a>
      );
    },
  },
  block: {
    h1: ({ children }) => (
      <h1 id={generateSlug(children)} className="text-6xl text-h1">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2
        id={generateSlug(children)}
        className={`${inter.className} font-[700] mt-[60px] mb-[20px] text-[2.6rem] text-h2`}
      >
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3
        id={generateSlug(children)}
        className={`${inter.className} font-[700] mt-[50px] mb-[10px] text-[2rem] text-h3`}
      >
        {children}
      </h3>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-purple-500 text-quote ">
        " <em>{children}</em> "
      </blockquote>
    ),
    normal: ({ children }) => (
      <p
        className={`${roboto400.className} text-article text-p font-[400] mb-[20px] leading-[28px]`}
      >
        {children}
      </p>
    ),
    p: ({ children }) => (
      <p
        className={`${roboto400.className} text-article text-p font-[400] mb-[20px] leading-[28px]`}
      >
        {children}
      </p>
    ),
  },
};

export default portableTextComponents;

const SanityImage = ({ asset }) => {
  const imageProps = useNextSanityImage(sanityClient, asset);

  if (!imageProps) return null;

  return (
    <Image
      {...imageProps}
      layout="responsive"
      sizes="(max-width: 800px) 100vw, 800px"
      className="mb-[30px]"
      alt=""
    />
  );
};
