import { assets } from "../assets/assets"
import Title from "../components/Title"

const About = () => {
  return (
    <div className="">
      <div className="text-2xl text-center pt-8 border-t" >
        <Title text1="about" text2="us"/>
      </div>
      <div className="my-10 flex flex-col sm:flex-row gap-16">
        <img src={assets.about_img} className="w-full max-w-[450px]" alt="" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi beatae enim pariatur rerum dolor, sit inventore. Vel repudiandae, nemo exercitationem culpa architecto quisquam voluptatum laborum eaque officia a? Laborum, adipisci.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore blanditiis itaque debitis aperiam ipsa, ab sint nulla. Eius, exercitationem enim, minima velit quod, vitae tempore eos error delectus dolore expedita?</p>
        <b className="text-gray-800">Our Misstion</b>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi facilis sed tenetur voluptate autem illo quod nesciunt illum adipisci accusantium placeat provident ut tempora natus mollitia, exercitationem, id consectetur quisquam.
        Eum itaque voluptatibus, quibusdam illum est deserunt sed labore tempora quo. Totam reprehenderit beatae asperiores. Inventore ducimus incidunt ex amet nam facere quas libero cupiditate quo, nemo eius eum qui?
        Molestias, voluptatibus qui et sequi veniam vitae totam facere rem? A quasi animi asperiores, saepe ullam impedit distinctio, modi consequuntur repudiandae at culpa ab harum quam sapiente corporis, magni dolore?</p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1="why" text2="choose us"/>
      </div>
      <div className="flex flex-col"></div>
    </div>
  )
}

export default About