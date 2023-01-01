import { useParams } from "react-router-dom";

export default function AllPosts() {
    const {pageNumber} = useParams();
    return <h2 className="posts-container">All Posts; Page:{pageNumber}</h2>;
}