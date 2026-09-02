const responsibilities = [
  {
    title: "ML Head, Programming Club",
    org: "NIT Jamshedpur",
    detail: "Conducted hackathons, events, and workshops for the club.",
  },
  {
    title: "Head, Machine Vision & Intelligence Lab",
    org: "NIT Jamshedpur",
    detail: "Coordinate multiple projects in the lab and conducted ML hackathons at college fests.",
  },
  {
    title: "ML Head, Society of Computer Science Engineers (SCSE)",
    org: "NIT Jamshedpur",
    detail: "Conducted events and hackathons.",
  },
];

const Responsibilities = () => {
  return (
    <section>
      <h2 className="text-lg font-semibold font-display mb-4">Responsibilities</h2>
      <ul className="space-y-2.5">
        {responsibilities.map((item) => (
          <li key={item.title} className="text-sm">
            <span className="font-medium">{item.title}</span>
            <span className="text-muted-foreground"> — {item.org}</span>
            <p className="text-muted-foreground mt-0.5">{item.detail}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Responsibilities;
