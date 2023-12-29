import React from "react"
import Head from "next/head"

export default function PageMeta({ title, description, icon }) {
  return (
    <Head>
      <title>
        {title || "Club Excel - One of the Top Coding Club in NIST"}
      </title>
      <meta
        name="description"
        content={
          description ||
          "Unlocking the Future: Join Our Coding Club and Shape Tomorrow's Technology."
        }
      />
      <link
        rel="icon"
        href={icon || "/clubexcellogo.png"}
      />
    </Head>
  )
}
