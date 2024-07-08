import { useEffect, useState } from "react";
import { Table } from "reactstrap";

function AdminDashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(
          "https://kyc-project.onrender.com/api/v1/get-forms"
        );
        const _data = await res.json();
        setData(_data?.forms);
      } catch (err) {}
    }

    fetchData();
  }, []);

  return (
    <div>
      <Table size="sm">
        <thead>
          <tr>
            <th>Front ID</th>
            <th>Back ID</th>
            <th>Wallet Address</th>
            <th>Gmail</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((row, i) => (
            <tr key={i}>
              <td>
                <img
                  src={`https://kyc-project.onrender.com/${row.frontId}`}
                  alt=""
                  className="w-16 h-16 object-contain"
                />
              </td>
              <td>
                <img
                  src={`https://kyc-project.onrender.com/${row.backId}`}
                  alt=""
                  className="w-16 h-16 object-contain"
                />
              </td>
              <td>{row?.walletAddress}</td>
              <td>{row?.gmail}</td>
            </tr>
          ))}

          {data.length === 0 && (
            <p className="text-center w-full">No data found!</p>
          )}
        </tbody>
      </Table>
    </div>
  );
}

export default AdminDashboard;
