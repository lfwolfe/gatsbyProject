import React from "react"
import Title from "../Title"
import styles from "../../css/about.module.css"
import img from "../../images/defaultBcg.jpeg"

export const About = () => {
  return (
    <section className={styles.about}>
      <Title title="about" subTitle="us" />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <img src={img} alt="about company" />
        </article>
        <article className={styles.aboutInfo}>
          <h4>explore the difference</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
            consectetur a in.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
            consectetur a in.
          </p>
          <button type="button" className="btn-primary">
            read more
          </button>
        </article>
      </div>
    </section>
  )
}
