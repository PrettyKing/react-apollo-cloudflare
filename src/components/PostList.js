// src/components/PostList.js
import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_POSTS, GET_POST } from "../graphql/queries";

function PostList() {
  const [selectedPostId, setSelectedPostId] = useState(null);
  const { loading, error, data } = useQuery(GET_POSTS);
  const { data: postData } = useQuery(GET_POST, {
    variables: { id: selectedPostId },
    skip: !selectedPostId,
  });

  if (loading) return <p>加载中...</p>;
  if (error) return <p>错误： {error.message}</p>;

  return (
    <div>
      <h2 className="mb-4">文章列表</h2>

      {selectedPostId && postData?.post ? (
        <div className="mb-4">
          <div className="card">
            <div className="card-header d-flex justify-content-between align-items-center">
              <h5 className="mb-0">{postData.post.title}</h5>
              <button
                className="btn btn-sm btn-outline-secondary"
                onClick={() => setSelectedPostId(null)}
              >
                返回列表
              </button>
            </div>
            <div className="card-body">
              <h6 className="card-subtitle mb-3 text-muted">
                作者: {postData.post.author}
              </h6>
              <p className="card-text">{postData.post.content}</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="row">
          {data.posts.map((post) => (
            <div className="col-md-4 mb-4" key={post.id}>
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">{post.title}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    作者: {post.author}
                  </h6>
                  <p className="card-text">
                    {post.content.substring(0, 100)}...
                  </p>
                  <button
                    className="btn btn-sm btn-primary"
                    onClick={() => setSelectedPostId(post.id)}
                  >
                    阅读更多
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default PostList;
