import React, { useEffect, useState } from "react";
import "./style.css";

// https://nextjswp4.wordpress.com/2025/04/27/top-6-apps-like-tiktok-you-should-try-in-2025/
const LBG_URI =
  "https://public-api.wordpress.com/wp/v2/sites/blogs0864.wordpress.com/posts?slug=top-6-apps-like-tiktok-you-should-try-in-2025";

const TEST_URI =
  "https://public-api.wordpress.com/wp/v2/sites/nextjswp4.wordpress.com/posts";

const WordpressBlog = () => {
  const [blogs, setBlogs] = useState([]);

  const fetchBlog = async () => {
    const res = await fetch(TEST_URI, {
      method: "GET",
    });
    const blogs = await res.json();

    console.log("blog >>>>>", blogs);
    setBlogs(blogs);
  };

  useEffect(() => {
    fetchBlog();
  }, []);
  return (
    <div className="w-full bg-white text-black p-8 xl:p-40 min-h-screen">
      {blogs &&
        blogs?.map((b, i) => {
          return (
            <div key={i} className="w-full">
              <img
                src={b?.jetpack_featured_media_url}
                alt=""
                className="h-auto max-h-[80vh] w-full object-cover mb-10 rounded-3xl"
              />
              <div className="mt-2 w-full">
                <div className="">
                  <div
                    className="blog-container"
                    dangerouslySetInnerHTML={{ __html: b?.content?.rendered }}
                  />
                </div>
              </div>
            </div>
          );
        })}

      <div className="faq-container mt-10">
        <div className="faq-item">
          <input type="checkbox" id="faq1" className="faq-checkbox" />
          <label htmlFor="faq1" className="faq-question">
            What is your return policy?
          </label>
          <div className="faq-answer">
            <p>
              We offer a 30-day money-back guarantee if you are not satisfied
              with your purchase.
            </p>
          </div>
        </div>

        <div className="faq-item">
          <input type="checkbox" id="faq2" className="faq-checkbox" />
          <label htmlFor="faq2" className="faq-question">
            How do I track my order?
          </label>
          <div className="faq-answer">
            <p>
              After placing an order, you’ll receive a tracking link via email
              to monitor your shipment.
            </p>
          </div>
        </div>

        {/* Add more FAQ items similarly */}
      </div>
    </div>
  );
};

export default WordpressBlog;
