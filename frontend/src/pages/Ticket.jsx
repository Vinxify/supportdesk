import { useDispatch, useSelector } from "react-redux";
import { getTicket, reset } from "../features/ticket/ticketSlice";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "react-toastify";

function Ticket() {
  const { ticket, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.ticket
  );
  const params = useParams();
  const dispatch = useDispatch();
  const { ticketId } = useParams();

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    dispatch(getTicket(ticketId));
  }, [isError, message, ticketId]);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h3> Something went wrong</h3>;
  }

  return (
    <div>
      <header className='ticket-header'>
        <BackButton url='/tickets' />
        <h2>
          {ticket._id}
          <span className={`status status-${ticket.status}`}>
            {ticket.state}
          </span>
        </h2>
        <h3>
          Date Submitted: {new Date(ticket.createdAt).toLocaleString("en-UK")}
        </h3>
        <hr />
        <div className='ticket-desc'>
          <h3>Description of Issue</h3>
          <p>{ticket.description}</p>
        </div>
      </header>
    </div>
  );
}

export default Ticket;
