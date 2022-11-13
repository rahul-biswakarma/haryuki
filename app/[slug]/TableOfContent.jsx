import { inter, roboto400 } from "../Fonts";
import generateSlug from "/utils/generateSlug";

export default function TableOfContent({ headings }) {
  return (
    <div id="table-of-content">
      <h2
        className={`${inter.className} mb-[15px] text-h2 text-[20px] font-bold`}
      >
        Table of Content
      </h2>
      <div
        className={`${roboto400.className} flex flex-col gap-[10px] leading-[110%]`}
      >
        {headings.map((heading) => {
          return (
            <a
              key={generateSlug(heading.children[0].text)}
              className="font-table text-p hover:text-link hover:font-[500]"
              href={`#${generateSlug(heading.children[0].text)}`}
            >
              {heading.children[0].text}
            </a>
          );
        })}
      </div>
    </div>
  );
}
