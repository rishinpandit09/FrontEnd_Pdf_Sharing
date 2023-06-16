import { Link } from "react-router-dom";
import "../card/Card.css";
function PdfCard(props) {
  const deleteData = async () => {
    // try {
    //   const response = await axios.post("/delete-file", {
    //     _id: ,
    //   });
    //   setItems(response.data);
    // } catch (error) {
    //   console.error(error);
    // }
  };
  return (
    <div className="card" style={{ width: "18rem" }}>
      <div class="card-body">
        <h5 class="card-title">{props.original_filename}</h5>
        <h6 class="card-subtitle mb-2 text-body-secondary">
          <Link to={props.s3_url}>PDF Link</Link>
        </h6>
        <h6>{props.uploader && <Link to={deleteData}> Delete</Link>}</h6>
      </div>
    </div>
  );
}
export default PdfCard;
