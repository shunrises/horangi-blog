import { components } from "./app/components/mdx";

type MDXComponents = {
  [key: string]: React.ComponentType<any>;
};

export function useMDXComponents(
  mdxComponents: MDXComponents = {}
): MDXComponents {
  return {
    ...components,
    ...mdxComponents,
  };
}
