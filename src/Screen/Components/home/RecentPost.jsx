import React from "react";
import { FaFolder } from "react-icons/fa";
import { Link } from "react-router-dom";

const RecentPosts = () => {
  const posts = [
    {
      id: 1,
      title: "Custom Point of Sale Software for Businesses",
      date: "April 7, 2023",
      image: "/Point-of-Sale.webp", // Replace with actual image URL
      link: "/post1",
    },
    {
      id: 2,
      title: "12 Tips for Writing Effective Emails",
      date: "June 5, 2021",
      image: "/12-Tips.webp", // Replace with actual image URL
      link: "/post2",
    },
    {
      id: 3,
      title: "American IT Company Proposed Technology",
      date: "March 5, 2021",
      image: "/Tech-City.webp", // Replace with actual image URL
      link: "/post3",
    },
    {
      id: 4,
      title: "Digital Productivity Tools for Startups",
      date: "February 28, 2021",
      image: "/Digital.webp", // Replace with actual image URL
      link: "/post4",
    },
    {
      id: 5,
      title: "The 5 Challenges of Small Business Digital Marketing",
      date: "January 20, 2021",
      image: "/Digital-Marketing.webp", // Replace with actual image URL
      link: "/post5",
    },
  ];

  return (
    <div className="container mx-auto px-24 py-12 ml-24    ">
      <div className="text-center mb-8 mr-24 ml-[-25px]">
        <h2 className="text-3xl mb-4">Recent Posts</h2>
        <div className="flex justify-center mb-4">
          <FaFolder className="text-[#0c6793] text-2xl" />
        </div>
        <p className="text-[#6e6e6e]">
          Latest News Update Around The World From Technology.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-[1100px] ml-10">
        {/* Render the first post with a fixed height and minimum width */}
        <div
          className="md:col-span-1 flex flex-col relative bg-cover bg-center overflow-hidden shadow-lg bg-black bg-opacity-[300px]" // Adjust the min-width as needed
          style={{
            backgroundImage: `url(${posts[0].image})`,
            height: '475px', // Adjust the height as needed
          }}
        >
          <div className="absolute bottom-0 left-0 right-0  p-4">
            <Link
              to={posts[0].link}
              className="text-white font-semibold text-lg"
            >
              {posts[0].title}
            </Link>
            <p className="text-gray-300">{posts[0].date}</p>
          </div>
        </div>

        {/* Render the remaining posts with a minimum width */}
        <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {posts.slice(1, 5).map((post) => (
            <div
              key={post.id}
              className="relative bg-cover bg-center overflow-hidden shadow-lg min-w-[200px]" // Adjust the min-width as needed
              style={{
                backgroundImage: `url(${post.image})`,
                height: '220px', // Adjust the height as needed
              }}
            >
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4">
                <Link
                  to={post.link}
                  className="text-white font-semibold text-lg"
                >
                  {post.title}
                </Link>
                <p className="text-gray-300">{post.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentPosts;
