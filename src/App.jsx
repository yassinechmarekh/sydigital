import { React, useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./components/Global/Header";
import Footer from "./components/Global/Footer";
import About from "./Pages/About";
import Services from "./Pages/Services";
import { Toaster } from "@/components/ui/toaster"
import Blogs from "./Pages/Blogs";
import Contact from "./Pages/Contact";
import SingleBlog from "./Pages/SingleBlog";
import Appointment from "./Pages/Appointment";
import ProjectInfo from "./Pages/ProjectInfo";
import Policy from "./Pages/Policy";
import Singleproject from "./pages/singleproject";
import Projectspg from "./Pages/Projects";
import ProjectSingle from "./Pages/ProjectSingle";
import NotFound from "./Pages/NotFound";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <main className={"bg-blue-100 dark:bg-gunmetal"}>
        <Toaster />
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projectspg />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog/:slug" element={<SingleBlog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/project-info" element={<ProjectInfo />} />
          <Route path="/privacy-policy" element={<Policy />} />
          <Route path="/project/:id" element={<ProjectSingle />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
   
    </main>
  );
}

export default App;
