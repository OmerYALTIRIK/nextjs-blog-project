import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import Layout from "../../components/Layout";
import styled from "styled-components";

const BlogDiv = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  padding: 20px;
  box-sizing: border-box;
`;

const BlogWrapper = styled.div`
  margin-top: 10px;
  display: grid;
  gap: 10px;
`;

export default ({ posts }) => {
  return (
    <Layout title="Blog">
      Burada yazılar yer alacak
      <BlogWrapper>
        {posts.map((post) => {
          // extract slug and frontmatter from post
          const { slug, frontmatter } = post;
          // extract frontmatter properties
          const { title, author, category, date, bannerImage, tags } = frontmatter;

          //JSX for individual blog listing
          return (
            <article key={title}>
              <Link href={`/blog/${slug}`}>
                <h1>{title}</h1>
              </Link>
              <h3>{author}</h3>
              <h3>{date}</h3>
            </article>
          );
        })}
      </BlogWrapper>
    </Layout>
  );
};

export async function getStaticProps() {
  // get list of files from posts folder
  const files = fs.readdirSync("posts");

  // get frontmatter & slug from each post
  const posts = files.map((fileName) => {
    const slug = fileName.replace(".md", "");
    const readFile = fs.readFileSync(`posts/${fileName}`, "utf-8");
    const { data: frontmatter } = matter(readFile);

    return {
      slug,
      frontmatter,
    };
  });

  // return the pages static props
  return {
    props: {
      posts,
    },
  };
}
