import Link from "next/link";

export default function Post({ post }) {
  return (
    <div className="w-full sm:max-w-[24rem] bg-neutral-800 p-8 rounded-3xl">
      <div>{post.frontmatter.title}</div>
    </div>
  );
}
