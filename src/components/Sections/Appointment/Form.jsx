import MyInput from "@/components/Global/Form/MyInput";
import React, { useEffect, useState } from "react";
import { Label } from "@/components/ui/label";
import MySelect from "@/components/Global/Form/MySelect";
import Mycheckbox from "@/components/Global/Form/Mycheckbox";
import MyTextarea from "@/components/Global/Form/MyTextarea";
import AcceptOurCondition from "@/components/Global/AcceptOurCondition";
import axios from "axios";
import { useToast } from "@/hooks/use-toast";

export default function Form() {

  const [planprime, setprimeplan] = useState("")
  const [contentrequir,setcontentrequir]=useState("")
  const { toast } = useToast()
  const[diabledbtn,setdosabledbtn]=useState(false)

  const [checkedPages, setCheckedPages] = useState({
    Home: false,
    About: false,
    Services: false,
    Contact: false,
    Appointment: false,
    Works: false,
    "FAQ's": false,
    "Privacy Policy": false,
    Other: false, // For the "Other" checkbox
  });
  const [otherslist, setOtherlists] = useState("")
  const plans = [
    "Basic Plan - $150",
    "Standard Plan - $250",
    "Premium Plan - $500",
  ];
  const pages = [
    "Home",
    "About",
    "Services",
    "Contact",
    "Appointment",
    "Works",
    "FAQ's",
    "Privacy Policy",
  ];
  const [showInputOther, setShowInputOther] = useState(false);
  const [formdata2, setformdata2] = useState({
    name: "",
    companyname: "",
    email: "",
    plan: "",
    message: "",
  })
  const handleChange = (e) => {
    const { name, value } = e.target
    setformdata2(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const sbmt = async (pagess) => {
    const respo = await axios.post(`${import.meta.env.VITE_LINK_API}/appointment/add`, {
      name: formdata2.name,
      companyname: formdata2.companyname,
      email: formdata2.email,
      plan: formdata2.plan,
      message: formdata2.message,
      pages: pagess
    }, {
      headers: {
        "Content-Type": "application/json",
      }
    }).then(res=>res.data).then(data=>{
      console.log(data.message)
      toast({
        description: "we received your appointment , our team will response you as soon as possible : ",
      })
      setdosabledbtn(false)
    }).catch(err=>{
      toast({
        description: "probleme : ",
      })
      setdosabledbtn(false)
      console.log(err.message)
    })
  }
 
  return (
    <div>
      <h2
        className={
          "py-2 text-2xl text-gunmetal dark:text-white relative after:absolute after:bottom-0 after:left-0 after:w-20 after:h-1 after:bg-turquoise"
        }
      >
        Take the First Step to Success !
      </h2>
      <form className={"flex flex-col gap-y-6"}>
        <div className={"flex flex-col sm:flex-row gap-x-4 gap-y-6 mt-6"}>
          <div className="w-full sm:w-1/2 group flex flex-col gap-y-2">
            <Label htmlFor="name" className={"label"}>
              Name
            </Label>
            <MyInput placeholder="Your Name " required={true}
              value={formdata2.name} name={"name"} onChange={handleChange}
              type="text" id="name" />
          </div>
          <div className="w-full sm:w-1/2 group flex flex-col gap-y-2">
            <Label htmlFor="email" className={"label"}>
              Email
            </Label>
            <MyInput placeholder="Your Email" required={true} value={formdata2.email} name={"email"} onChange={handleChange} type="email" id="email" />
          </div>
        </div>
        <div className="group flex flex-col gap-y-2">
          <Label htmlFor="company_name" className={"label"}>
            Company Name
          </Label>
          <MyInput
            placeholder="Name of your Company"
            type="text"
            id="company_name"
            required={true}
            value={formdata2.companyname} name={"companyname"} onChange={handleChange}
          />
        </div>
        <div className="group flex flex-col gap-y-2">
          <Label htmlFor="plan" className={"label"}>
            choose the plan that's right for you
          </Label>
          <MySelect
            placeholder="Select the plan"
            selectItems={plans}
            setformdata2={setformdata2}
            id="plan"
          />
        </div>
        <div className="flex flex-col gap-y-3">
          <Label className={"label normal-case"}>
            What the pages/sections do you want to be in your website ?
          </Label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {pages.map((item, index) => (
              <Mycheckbox key={index} label={item} id={item}
                setShowInputOther={setShowInputOther} setCheckedPages={setCheckedPages} />
            ))}
            <Mycheckbox
              label="Other"
              id="Other"

              onChange={(checked) => setShowInputOther(checked)}
              setShowInputOther={setShowInputOther}
              setCheckedPages={setCheckedPages}


            />
          </div>
          {showInputOther && (
            <MyInput
              placeholder="Ex: Team, Testimonials"
              type="text"
              id="other_pages"
              value={otherslist}
              onChange={(e) => {
                setOtherlists(e.target.value)

              }}
            />
          )}
        </div>
        <div className="group flex flex-col gap-y-2">
          <Label htmlFor="message" className={"label"}>
            Message
          </Label>
          <MyTextarea placeholder="Your Message" id="message" value={formdata2.message} name={"message"} onChange={handleChange} />
        </div>
        <AcceptOurCondition />
        <span>{contentrequir}</span>
        <button type="submit" onClick={async(e) => {
          e.preventDefault()
          setdosabledbtn(true)
          if(formdata2.name==""||formdata2.companyname==""||formdata2.plan==""||formdata2.message==""){
            setdosabledbtn(false)
            setcontentrequir("You Have To Fill All The Required Fields (*)")
          }else{
            const selectedPages = Object.keys(checkedPages).filter(
              (key) => {
                if (key != "Other") {
                  return checkedPages[key] === true
                }
              }
            );
            if (checkedPages.Other == true) {
              const othersel = otherslist.split(",")
              othersel.map(async(data) => {
               await selectedPages.push(data)
              })
  
            }
            console.log(formdata2)
            console.log(selectedPages)
                    
        
            console.log(planprime)

            if(selectedPages.length==0){
setcontentrequir("You Have To Fill All The Required Fields (*)")
            }else{
              await sbmt(selectedPages)
              setcontentrequir("")
            }
         
          }
          
        }} className={"main-btn text-base"} disabled={diabledbtn}>
          Submit
        </button>
      </form>
    </div>
  );
}
