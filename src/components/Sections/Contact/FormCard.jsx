import React, { useState } from "react";
import ContactInput from "./Form/ContactInput";
import ContactTextarea from "./Form/ContactTextarea";
import axios from "axios";

import { useToast } from "@/hooks/use-toast";


export default function FormCard() {
  const[diabledbtn,setdosabledbtn]=useState(false)
  const { toast } = useToast()
  const [statefill, setstatefill] = useState("")
  const [formData, setFormData] = useState({
    firstName: '',
    message: '',
    email: '',
    phone: '',
    lastName: ''

  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const onSubmit = async () => {
    console.log("wsl hna")
    console.log(formData.phone)
    try {


      const rep = await axios.post(`${import.meta.env.VITE_LINK_API}/contact/add`, {
        firstName: formData.firstName, lastName: formData.lastName, email: formData.email, phone: formData.phone, message: formData.message
      }, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (rep && rep.status === 200) {

        console.log(rep.data.message)
        toast({
          description: "Your message has been sent.",
        })
        setdosabledbtn(false)
      } else {

        toast({
          description: "probleme : ",
        })
        setdosabledbtn(false) 
      }
    }
    catch (error) {
      console.log(error.message)
      toast({
        description: "catch : ",
      })
      setdosabledbtn(false)

    }
  }
  return (
    <div
      className={
        "flex flex-col gap-y-4 py-8 px-6 bg-caribbean-current/60 dark:bg-caribbean-current/30 backdrop-blur-sm border border-caribbean-current dark:border-turquoise rounded-xl"
      }
    >
      <h3 className={"text-3xl text-white font-semibold capitalize"}>
        Get In Touch
      </h3>
      <p className={"text-slate-100 dark:text-slate-300"}>
        We’re here to help. Drop us a message, and we'll get back to you as soon
        as possible.
      </p>
      <form className={"flex flex-col gap-y-4"}>
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="w-full sm:w-1/2">
            <ContactInput value={formData.firstName} name="firstName" onchange={handleChange} placeholder="First Name * " type="text" />
          </div>
          <div className="w-full sm:w-1/2">
            <ContactInput placeholder="Last Name *" name="lastName" value={formData.lastName} onchange={handleChange} type="text" />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="w-full sm:w-1/2">
            <ContactInput placeholder="Email *" name="email" value={formData.email} onchange={handleChange} type="email" />
          </div>
          <div className="w-full sm:w-1/2">
            <ContactInput placeholder="Phone *" name="phone" value={formData.phoneNumber} onchange={handleChange} type="tel" />
          </div>
        </div>
        <ContactTextarea placeholder="Message *" name="message" value={formData.message} onchange={handleChange} />
        <span className="text-slate-100">{statefill}</span>
        <button
          type="submit"
          className={
            "main-btn text-base bg-white dark:bg-turquoise text-caribbean-current dark:text-gunmetal"
          }
          onClick={(e) => {
            e.preventDefault()
            setdosabledbtn(true)
            if (formData.email == "" || formData.firstName == "" || formData.lastName == "" || formData.phone == "") {
              setstatefill("You Have To Fill All The Required Fields (*)")
              setdosabledbtn(false)
            } else {
              setstatefill("")
              onSubmit()
            }

          }}
          disabled={diabledbtn}
        >
          Send
        </button>
      </form>
    </div>
  );
}
