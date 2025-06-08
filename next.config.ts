import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // MDX 파일도 페이지로 인식하도록
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

export default withMDX(nextConfig);
