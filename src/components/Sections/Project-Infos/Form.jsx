import MyInput from "@/components/Global/Form/MyInput";
import { FormDescription } from "@/components/ui/form";
import { useForm, FormProvider } from "react-hook-form";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";
import { CiSquarePlus } from "react-icons/ci";
import MyTextarea from "@/components/Global/Form/MyTextarea";
import AcceptOurCondition from "@/components/Global/AcceptOurCondition";
import Inputimage from "@/components/Global/Form/inputimage";
import Inputsocial from "@/components/Global/Form/inputsocial";
import axios from "axios";

export default function Form() {
  const methods = useForm();
  const [logo, setLogo] = useState(null);
  const [images, setImages] = useState([]);
  const[formdt,setformdt]=useState({
    companyname:"",
    oldwebsite:"",
    policies:"",
   

  })

  const[socielmd,setsocielmd]=useState({})
  const handleLogoChange = (e) => {
    setLogo(e.target.files[0]); // Single file
  };

  const handleImagesChange = (e) => {
    setImages(Array.from(e.target.files)); // Multiple files
  };
  const [socialInputs, setSocialInputs] = useState([
    { id: "facebook", placeholder: "Facebook" },
    { id: "instagram", placeholder: "Instagram" },
    { id: "youtube", placeholder: "Youtube" },
    { id: "linkedin", placeholder: "Linkedin" },
  ]);

  const addSocialInput = () => {
    setSocialInputs([
      ...socialInputs,
      { id: `social-${socialInputs.length + 1}`, placeholder: "" },
    ]);
  };

  const handleChange = (e) => {
    const { id, value } = e.target
    setsocielmd(prevData => ({
      ...prevData,
         [id]: value,
      
   
    }))
  }
  const handleChangenormal = (e) => {
    const { name, value } = e.target
    setformdt(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = async (sochmichya) => {
   
    const formData = new FormData();

    formData.append('logo', logo); // Add logo
    images.forEach((image, index) => {
      formData.append(`images`, image); // Add multiple images
    });
    formData.append('companyname',formdt.companyname)
    formData.append('oldwebsite',formdt.oldwebsite)
    formData.append('policies',formdt.policies)
    formData.append('socialmedia',sochmichya)
  

    try {
      const response = await axios.post(`${import.meta.env.VITE_LINK_API}/project/add`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }).then(res=>res.data).then(data=>{
        alert('perfecto')
        console.log(data.message)
      }).catch(er=>{
        alert("catch lwst")
        console.log(er.message)
      })
     
    } catch (error) {
      console.error('Error uploading files', error);
    }
  };
  return (
    <div className={"mt-10"}>
      <FormProvider {...methods}>
        <form className={"w-full lg:w-2/3 mx-auto flex flex-col gap-y-6"}>
          <div className="group flex flex-col gap-y-2">
            <Label htmlFor="company_name" className={"label"}>
              Company Name
            </Label>
            <MyInput
              placeholder="Name of your Company"
              type="text"
              id="companyname"
              value={formdt.companyname}
              onchange={handleChangenormal}
required={true}             
            />
          </div>
          <div className="group flex flex-col gap-y-2">
            <Label htmlFor="old_website" className={"label"}>
              Old Website
            </Label>
            <MyInput
              placeholder="Your Old Website"
              type="text"
              required={false}  
              id="oldwebsite"
              value={formdt.oldwebsite}
              onchange={handleChangenormal}
            
            />
            <FormDescription>If you have a old website.</FormDescription>
          </div>
          <div className="group flex flex-col gap-y-2">
            <Label htmlFor="logo" className={"label"}>
              Upload your Logo
            </Label>
            <Inputimage placeholder="Upload your Logo" required={false}   onchange={handleLogoChange} type="file" id="logo" />
          </div>
          <div className="group flex flex-col gap-y-2">
            <Label htmlFor="logo" className={"label"}>
              Upload your Images
            </Label>
            <Inputimage
              placeholder="Upload your images"
              onchange={handleImagesChange}
              type="file"
              id="images"
              multiple
              required={false}
            />
          </div>

          
          <div className="flex flex-col gap-y-2">
            <Label className={"label"}>Social Links</Label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {socialInputs.map((input, index) => (
                <Inputsocial
                  key={input.id}
                  placeholder={input.placeholder}
                  
                  type="url"
                  required={false}
                  id={input.id}
                  onchange={handleChange}
                  

                />
              ))}
              <div
                className={"text-gunmetal dark:text-white hover:text-caribbean-current dark:hover:text-turquoise cursor-pointer transition-colors"}
                onClick={addSocialInput}
              >
                <CiSquarePlus size={40} />
              </div>
            </div>
          </div>


          <div className="group flex flex-col gap-y-2">
            <Label htmlFor="privacy_policy" className={"label"}>
              Privacy Policy
            </Label>
            <MyTextarea placeholder="Your Privacy Policy"   value={formdt.policies}
              onChange={handleChangenormal}
              name="policies" 
              required={false}
              id="privacy_policy" />
          </div>
          <AcceptOurCondition />
          <button type="submit" className={"main-btn text-base"}
          onClick={async(e)=>{
            e.preventDefault()
            console.log(socielmd)
            console.log(logo)
            console.log(images)
            console.log(formdt)
            let sochmichya=[]
            for (let key in socielmd) {
              await sochmichya.push({name:key,link:socielmd[key]})
       
          }
          console.log(sochmichya)
await handleSubmit(JSON.stringify(sochmichya))
         
          }}>
            Submit
          </button>
        </form>
      </FormProvider>
    </div>
  );
}
