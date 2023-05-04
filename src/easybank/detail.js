const details = [
  {
    head: "Online Banking",
    content:
      "Our modern web and mobile applications allow you to keep tarck of your finances wherever you are in the world.",
    image: "icon-online.svg",
  },
  {
    head: "Simple Budgeting",
    content:
      "See exactly where your money go each month. Receive notifications when you're close to your hitting limits.",
    image: "icon-budgeting.svg",
  },
  {
    head: "Fast Onboarding",
    content:
      "We don't do branches. Open your account in minuites online and start taking control of your finances right away.",
    image: "icon-onboarding.svg",
  },
  {
    head: "Open API",
    content:
      "Manage your savings, investiment, pension, and much more from one account. Tracking your money has never been easier.",
    image: "icon-api.svg",
  },
];

function Detail() {
  return (
    <section className="detailed">
      <article className="heading">
        <h2>Why choose Easybank?</h2>
        <p>
          We leverage open banking to turn your bank account into your financial
          hub. Control your finances like never before.
        </p>
      </article>
      <div className="services">
        {details.map((detail) => {
          return (
            <article key={detail.head}>
              <div>
                <img src={detail.image} alt="" />
              </div>
              <h3>{detail.head}</h3>
              <p>{detail.content}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Detail;
