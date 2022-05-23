// import { useParams } from "react-router-dom";
import { getInvoice, deleteInvoice } from "../data";
import { useParams, useNavigate, useLocation } from "react-router-dom";

export default function Invoice() {
  let navigate = useNavigate();
  let location = useLocation();
  let params = useParams();
  console.log(params.invoiceId);

  let invoice = getInvoice(parseInt(params.invoiceId, 10));
  // return <h2>Invoice : {params.invoiceId}</h2>;
  return (
    <main style={{ padding: "1rem" }}>
      <h2>Total Due: {invoice.amount}</h2>
      <p>
        {invoice.name}: {invoice.number}
      </p>
      <p>Due Date: {invoice.due}</p>
      <p>
        <button
          onClick={() => {
            deleteInvoice(invoice.number);
            navigate("/invoices" + location.search);
          }}
        >
          Delete
        </button>
      </p>
    </main>
  );
}
