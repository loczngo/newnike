import React, { useState } from "react";

function Cart() {
  const [data, setData] = useState([]);

  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th>Image</th>
            <th>name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, i) => {
            return (
              <tr key={i}>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Cart;
