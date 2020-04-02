import React from "react"
import styles from "../css/footer.module.css"
import links from "../constants/links"
import socialIcons from "../constants/social-icons"
import { Link } from "gatsby"

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        {links.map((link, index) => {
          return <Link to={link.path}>{link.text}</Link>
        })}
      </div>
      <div className={styles.icons}>
        {socialIcons.map((icon, index) => {
          return (
            <a
              key={`footer-soc-${index}`}
              href={icon.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {icon.icon}
            </a>
          )
        })}
      </div>
      <div className={styles.copyright}>
        copyright &copy; backroads travel company {new Date().getFullYear()} all
        rights reserved
      </div>
    </footer>
  )
}
