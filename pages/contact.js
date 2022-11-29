import ContactForm from "../components/contact-form";
import Head from 'next/head'
import { Fragment } from "react";

export default function Contact () {
  return (
    <Fragment>
      <Head>
        <title>Contact Me</title>
      </Head>
      <ContactForm />
    </Fragment>
  )
}
