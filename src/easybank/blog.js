const blogs = [
  {
    name: "By Claire Robinson",
    topic: "Receive money in any currency with no fees",
    content:
      "The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single...",
    image: "image-currency.jpg",
  },
  {
    name: "By Wilson Hutton",
    topic: "Treat yourself without worrying about money",
    content:
      "Our simple budgeting feature allows you to separate out your spanding and set realistic limits each month. That means you...",
    image: "image-restaurant.jpg",
  },
  {
    name: "By Wilson Hutton",
    topic: "Take your Easybank card wherever you go",
    content:
      "We want you to enjoy travels. This is why we don't charge any fees on purchaces while you're abroad. We'll even show you...",
    image: "image-plane.jpg",
  },
  {
    name: "By Claire Robinson",
    topic: "Our invite-only Beta accounts are now live!",
    content:
      "After a lot of hard work by the whole team, we're excited to launch our closed beta. It's easy to request an invite through the site...",
    image: "image-confetti.jpg",
  },
];

function Blog() {
  return (
    <section className="blogs">
      <h2>Latest Articles</h2>
      <div className="bloggs">
        {blogs.map((blog) => {
          return (
            <article key={blog.name} className="blog">
              <div>
                <img src={blog.image} alt="" />
              </div>
              <div>
                <span>{blog.name}</span>
                <h3>{blog.topic}</h3>
                <p>{blog.content}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Blog;
