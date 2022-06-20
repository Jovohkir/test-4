import { useMemo } from "react";

export const useSortPost = (posts, sort) => {
  const SortedPosts = useMemo(() => {
    if (sort) {
      return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]));
    }
    return posts;
  }, [sort, posts]);
  return SortedPosts;
};

export const usePost = (posts, sort, query) => {
  const sortedPosts = useSortPost(posts, sort);
  const sortedAndsearchPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(query.toLowerCase())
    );
  }, [query, sortedPosts]);
  return sortedAndsearchPosts;
};
