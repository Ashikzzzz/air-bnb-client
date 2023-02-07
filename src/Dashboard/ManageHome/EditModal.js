import React from "react";
import { ToastContainer } from "react-toastify";
import DatePicker from "react-datepicker";
import UpdateHomeForm from "./UpdateHomeForm";

const EditModal = ({ home }) => {
  // console.log(home);
  return (
    <div>
      <input type="checkbox" id="editModal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="editModal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <div>
            <UpdateHomeForm home={home}></UpdateHomeForm>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
