import { Footer } from "../Components/Footer.js"
import { Header} from "../Components/Header"
import {NavBar}  from "../Components/Nav"
import { SignUp } from "../Components/SignUp"
import { ReadMore } from "../Components/ReadMore"
import { LearnFundamental } from "../Components/LearnFundamental"
import { LearnReact } from "../Components/LearnReact"
import { Questions } from "../Components/Questions"
import { Instructors } from "../Components/Instructors"
import { ContactInfo } from "../Components/ContactInfo"
import { SimpleRef } from "../Components/component"


export const Home = () => {


   
    const menuItems=[
        {text:"What You'll Learn",href:"/whatYouWill"},
        {text:"Home", href:"/home"},
        {text:"Contact",href:"/contact"},
        {text:"Abou Us",href:"/about"}, 
    ]



    return(
        <>
            <div>

                <NavBar items={menuItems}></NavBar>
                <Header></Header>
                <SignUp></SignUp>
                <ReadMore></ReadMore>
                <LearnFundamental></LearnFundamental>
                <LearnReact></LearnReact>
                <Questions></Questions>
                <Instructors></Instructors>
                <ContactInfo></ContactInfo> 
                <Footer></Footer>
                <SimpleRef></SimpleRef>

            </div>
        </>
    )
}