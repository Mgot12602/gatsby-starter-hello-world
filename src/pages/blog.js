import React from "react"
import Layout from "../components/layout"
import * as blogStyles from "../components/blog.module.css"

const blog = () => {
  return (
    <Layout>
      <div className={blogStyles.page}>
        <h1>this is our blog page</h1>
        <p className={blogStyles.text}>
          Occaecat id occaecat sit excepteur cillum elit dolor in ipsum quis
          cupidatat. Veniam elit reprehenderit Lorem amet velit eu mollit
          consectetur nisi non. Anim consequat cupidatat minim et sunt
          incididunt nisi sunt elit.
        </p>
      </div>
    </Layout>
  )
}

export default blog
