import "./languages.scss"


export default function Languages() {

  const skillsData = [
    {
      title: "Frameworks",
      list: [
        "React",
        "Angular",
        "Nodejs"
      ],
      img: "../../assets/frameworks.jfif",
    },
    {
      title: "Languages",
      list: [
        "HTML5",
        "Javascript",
        "Typescript",
        "CSS3",
        "Scss",
        "SQL"
      ],
      img: "../../assets/langs.jfif",
    },
    {
      title: "Libraries",
      list: [
        "Bootstrap",
        "Material UI",
        "Express",
        "Sequelize",
        "Mongoose",
        "mySql2"
      ],
      img: "../../assets/libs.png",
    },

  ]
  return (
    <div className="Languages" id="Languages">
      <h1>Languages and Technologey</h1>
      <div className="container">
        {skillsData.map((item) => (
          <div className={item.featured ? "card featured" : "card"}x>
            <div className="top">
              <h2>{item.title}</h2>
            </div>
            <div className="bottom">
              <ul>
                {item.list.map((listItem, index) => (
                  <li>{listItem}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}