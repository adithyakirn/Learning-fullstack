import { assets } from "../assets/assets"

const Footer = () => {
  return (
    <div className="">
        <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
            <div className="">
                <img src={assets.logo} className="mb-5 w-32" alt="" />
                <p className="w-full md:w-2/3 text-gray-600">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi, odit dolor vero, doloremque ipsam cum velit itaque sapiente voluptatibus illum reprehenderit? Incidunt aliquam optio enim cum, molestiae obcaecati quis impedit?</p>
            </div>
            <div className="">
                <p className="text-xl font-medium mb-5">COMPANY</p>
                <ul className="flex flex-col gap-1 text-gray-600"> 
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="">
                <p className="text-xl font-medium mb-5 uppercase">Get In Touch</p>
                <ul className="flex flex-col gap-1 text-gray-600"> 
                    <li>+91 918273645</li>
                    <li>randomemail@gmail.com</li>
                </ul>
            </div>
        </div>
            <div className="">
                <hr className=" text-gray-400"/>
                <p className="py-5 text-sm text-center">Copyright 2024@Forever.com - All Right Reserved</p>
            </div>
    </div>
  )
}

export default Footer