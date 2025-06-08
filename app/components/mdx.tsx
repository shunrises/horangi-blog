import Link from "next/link";
import Image from "next/image";
import { highlight } from "sugar-high";
import * as React from "react";

function Table({ data }) {
  let headers = data.headers.map((header, index) => (
    <th key={index}>{header}</th>
  ));
  let rows = data.rows.map((row, index) => (
    <tr key={index}>
      {row.map((cell, cellIndex) => (
        <td key={cellIndex}>{cell}</td>
      ))}
    </tr>
  ));

  return (
    <table>
      <thead>
        <tr>{headers}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

function CustomLink(props) {
  let href = props.href;

  if (href.startsWith("/")) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    );
  }

  if (href.startsWith("#")) {
    return <a {...props} />;
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
}

function RoundedImage(props) {
  return <Image alt={props.alt} className="rounded-lg" {...props} />;
}

function Code({ children, ...props }) {
  let codeHTML = highlight(children);
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
}

function slugify(str) {
  return str
    .toString()
    .toLowerCase()
    .trim() // Remove whitespace from both ends of a string
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/&/g, "-and-") // Replace & with 'and'
    .replace(/[^\w\-]+/g, "") // Remove all non-word characters except for -
    .replace(/\-\-+/g, "-"); // Replace multiple - with single -
}

export const components = {
  h1: ({ children, ...props }) => {
    const slug = slugify(children);
    return (
      <h1 id={slug} {...props}>
        <a href={`#${slug}`} className="anchor" />
        {children}
      </h1>
    );
  },
  h2: ({ children, ...props }) => {
    const slug = slugify(children);
    return (
      <h2 id={slug} {...props}>
        <a href={`#${slug}`} className="anchor" />
        {children}
      </h2>
    );
  },
  h3: ({ children, ...props }) => {
    const slug = slugify(children);
    return (
      <h3 id={slug} {...props}>
        <a href={`#${slug}`} className="anchor" />
        {children}
      </h3>
    );
  },
  h4: ({ children, ...props }) => {
    const slug = slugify(children);
    return (
      <h4 id={slug} {...props}>
        <a href={`#${slug}`} className="anchor" />
        {children}
      </h4>
    );
  },
  h5: ({ children, ...props }) => {
    const slug = slugify(children);
    return (
      <h5 id={slug} {...props}>
        <a href={`#${slug}`} className="anchor" />
        {children}
      </h5>
    );
  },
  h6: ({ children, ...props }) => {
    const slug = slugify(children);
    return (
      <h6 id={slug} {...props}>
        <a href={`#${slug}`} className="anchor" />
        {children}
      </h6>
    );
  },
  Image: RoundedImage,
  a: CustomLink,
  code: Code,
  Table,
};
