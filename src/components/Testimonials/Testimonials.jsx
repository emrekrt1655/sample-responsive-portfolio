import './testimonials.scss'

export default function Testimonials(){

    const data = [
        {
          id: 1,
          name: "Show Preview Cover Letter",
          title: "Download Cover Letter",
          icon:
            "https://img.icons8.com/fluent/30/000000/send-letter-1.png",
          logo: "CL",
          desc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.",
        },
        {
          id: 2,
          name: "Show Preview CV",
          title: "Download CV",
          icon:
            "https://img.icons8.com/officel/30/000000/parse-from-clipboard.png",
          logo: "CV",
          desc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem recusandae perspiciatis ducimus vel hic temporibus. ",
          featured: true,
        },
        {
          id: 3,
          name: "Show Preview Certificate",
          title: "Download Certificate",
          icon:
            "https://img.icons8.com/office/30/000000/certificate.png",
          logo: "CERT",
          desc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
        },
      ];
    return(
        <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((d) => (
          <div key={d.id} className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              <div className="user">
                    {d.logo}
              </div>
              <img className="right" src={d.icon} alt="" />
            </div>
            <div className="center">
              {d.desc}
            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
    )
}