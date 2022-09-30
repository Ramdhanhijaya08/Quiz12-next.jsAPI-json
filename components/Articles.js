import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";

const Articles = () => {
  const [posts, setPosts] = useState([]);

  const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((Response) => {
        return Response.json();
      })
      .then((data) => {
        setPosts(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex-col my-10">
      <h1 className="text-5xl font-bold text-gray-800 text-center my-10">
        Ramdhan <span className="text-blue-600">Articles</span> 
        <br/>
        <span className="text-blue-600 text-center">Menggunakan rest API jsonplaceholder - POST</span>
      </h1>
      {posts.length > 0 && (
        <div className="flex justify-center items-center">
          <div className="grid md:grid-cols-4 grid-cols-1 gap-5">
            {posts.map((post) => (
              <div className="md:mx-0 mx-5 w-72 h-60 rounded-lg cursor-pointer hover:bg-blue-600 group hover:shadow-2x1 p-6 border border-gray-100">
                <h3
                  key={post.id}
                  className="font-semibold uppercase text-sm my-2 text-blue-600 text-start group-hover:text-white">
                  {post.title}
                </h3>
                <p className="font-normal text-sm text-gray-500 text-start group-hover:text-white">
                  {post.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Articles;
