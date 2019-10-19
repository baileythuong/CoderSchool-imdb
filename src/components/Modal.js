import React from "react";

export default function Modal(props) {
  // console.log("modal", props.data);
  return (
    <div>
      <button
        type="button"
        //   href={}
        className="btn btn-outline-success btn-lg"
        data-toggle="modal"
        data-target={`#${props.data && props.data.key}`}
      >
        Official Trailer
      </button>

      <div className="modal fade" id={`${props.data && props.data.key}`} tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered" role="document">
    <div className="modal-content">
      <div className="modal-header">
        {/* <h5 className="modal-title" id="exampleModalLongTitle">{`${props.data.name}`}</h5> */}
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
      <iframe
            className="modal-content"
          width="854"
          height="480"
          src={`https://www.youtube.com/embed/${props.data && props.data.key}`}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-outline-success" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

      </div>
  );
}
