// src/App.js
import React from "react";
import PostList from "./components/PostList";

function App() {
  return (
    <div className="container py-4">
      <header className="pb-3 mb-4 border-bottom">
        <div className="d-flex align-items-center">
          <h1 className="fs-4 mb-0">Cloudflare Pages + React + Apollo 演示</h1>
        </div>
      </header>
      <main>
        <div className="p-4 mb-4 bg-light rounded-3">
          <div className="container-fluid py-2">
            <h3 className="fw-bold">使用 Apollo Client 的本地状态管理</h3>
            <p className="col-md-8">
              这个演示展示了如何在没有后端的情况下，使用 Apollo Client
              的本地状态管理功能来模拟 GraphQL API。
              这种方法适用于快速原型设计或静态网站部署，如 Cloudflare Pages。
            </p>
          </div>
        </div>
        <PostList />
      </main>
      <footer className="pt-3 mt-4 text-muted border-top">
        <div className="d-flex justify-content-between align-items-center">
          <span>&copy; 2025 Cloudflare Pages React Apollo 演示项目</span>
          <span>
            部署在{" "}
            <a
              href="https://pages.cloudflare.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cloudflare Pages
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
}

export default App;
