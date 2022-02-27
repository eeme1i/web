import Link from "next/link";

export default function Post({ post }) {
  return (
    <div className="">
      <div>{post.frontmatter.title}</div>
    </div>
  );
}
