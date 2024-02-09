import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
    const { title, image_url, details, _id } = news;
    return (
        <div>
            <h4 className="text-2xl">
                <div className="card w-full bg-base-100 shadow-xl border-2 ">
                    <h2 className="card-title">{title}</h2>
                    <figure><img src={image_url} alt="Shoes" /></figure>
                    <div className="card-body">
                        <div className="card-actions justify-end">
                            {
                                details.length > 200 ? <p>{details.slice(0, 200)}<Link to={`news/${_id}`} className="text-blue-600 text-2xl"> read more....</Link></p> : <p>{details}</p>
                            }
                        </div>
                    </div>
                </div>
            </h4 >
        </div >
    );
};

export default NewsCard;