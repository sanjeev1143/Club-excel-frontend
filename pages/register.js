import Head from "next/head"
import Form from "@/components/form"
import styled from "styled-components"

const MainCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  background: transparent;
`
export default function Home() {
  return (
    <>
      <Head>
        <title>Registration Form</title>
        <meta
          name="description"
          content="Generated by create next app"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link
          rel="icon"
          href="/clubexcellogo.png"
        />
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Jura:wght@500&family=Montserrat&family=Poppins:wght@500&family=Roboto+Mono:wght@300&display=swap"
          rel="stylesheet"
        />
      </Head>

      <MainCont>
        <Form />
      </MainCont>
    </>
  )
}
