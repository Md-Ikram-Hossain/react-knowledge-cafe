import { IoBookmarksSharp } from "react-icons/io5";

const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {
    const {id, title, cover, author, author_img, reading_time, posted_data,hashtags } = blog;

    return (
        <div className="mb-20 space-y-4">
            <img className="w-full mb-8" src={cover} alt={`Cover picture of the title ${title}`} />
            
            <div className="flex justify-between mb-4 ">
                <div className="flex">
                    <img className='w-14' src={author_img} alt="" />
                    <div className="ml-6">
                        <h3 className="text-2xl">{author}</h3>
                        <p>{posted_data}</p>
                    </div>

                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button onClick={() => handleAddToBookmark(blog)} className="ml-2 text-2xl text-red-600"> <IoBookmarksSharp></IoBookmarksSharp> </button>

                </div>
            </div>



            <h2 className="text-4xl">{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href="">{hash}</a></span>)
                }
            </p>
            <button onClick={() =>handleMarkAsRead(id,reading_time)} className="text-purple-800 font-bold underline">Mark As Read</button>
        </div>
    );
};

export default Blog;