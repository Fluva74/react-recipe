export default function ImproveSkills() {
  const list = [
    "Learn new recepies",
    "Experiment with food",
    "Develop new styles",
    "Know nutrition facts",
    "Get cooking tips",
  ];

  return (
    <div className="section improve-skills">
      <div className="col img">
        <img src="/img/gallery/bb10.jpg" alt="" />
      </div>
      <div className="col typography">
        <h1 className="title">Improve Your Culinary Skills</h1>
        {list.map((item, index) => (
          <p className="skill-item" key={index}>
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}
