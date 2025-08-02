
const NewsLetterBox = () => {
    const onSubmitHandler = (event :React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
    }
  return (
    <div className="text-center my-10">
        <p className="text-2xl font-medium text-gray-800">Subscribe Now & get 20% off</p>
        <p className="text-gray-400 mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. At vitae odit necessitatibus aut culpa distinctio, sit delectus velit placeat porro ipsum magni eaque cupiditate deleniti exercitationem. Nihil ea a numquam!</p>
        <form onSubmit={ onSubmitHandler} className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3">
            <input className="w-full sm:flex-1 outline-none" required type="email" placeholder="Eneter your email" />
            <button className="bg-black text-white text-xs px-10 py-4 cursor-pointer" type="submit">SUBSCRIBE</button>
        </form>
    </div>
  )
}

export default NewsLetterBox