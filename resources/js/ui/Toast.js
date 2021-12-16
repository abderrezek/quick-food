import { h } from "preact";

const Toast = ({ message }) => {
    return (
    <div className="toast align-items-center text-white bg-success border-0" role="alert" ariaLive="assertive" ariaAtomic="true">
      <div className="d-flex">
        <div className="toast-body">
          {message}
        </div>

        <button type="button" className="btn-close btn-close-white me-2 m-auto" dataBsDismiss="toast" ariaLabel="Close"></button>
      </div>
    </div>
    );
};

export default Toast;