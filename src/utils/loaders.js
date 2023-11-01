export const loaderPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!res.ok) {
    throw {
      status: res.status,
      statusText: "Posts not found",
    };
  }

  const posts = await res.json();

  return { posts };
};

export const loaderPost = async ({ params }) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );

  if (!res.ok) {
    throw {
      status: res.status,
      statusText: "Post not found",
    };
  }

  const post = await res.json();

  return { post };
};
