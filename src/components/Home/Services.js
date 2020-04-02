import React from "react"
import { Title } from "../Title"
import styles from "../../css/services.module.css"
import services from "../../constants/services"
export const Services = () => {
  return (
    <section className={styles.services}>
      <Title title="our" subTitle="services" />
      <div className={styles.center}>
        {services.map((item, index) => {
          return (
            <article className={styles.service} key={index}>
              <span>{item.icon}</span>
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}
