import React from "react";

const DeleteModal = ({ booking, id, modalHandler }) => {
  // console.log(booking);
  return (
    <div>
      <input type="checkbox" id="delete-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="delete-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <div>
            <h3 className="text-lg font-bold">
              Are You Want to Sure To delete {booking.title} Room?
            </h3>
            <div className="flex justify-center mt-10">
              <button
                onClick={() => modalHandler(booking._id)}
                className="btn btn-sm"
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
