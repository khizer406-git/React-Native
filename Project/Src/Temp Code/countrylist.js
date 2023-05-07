import { useEffect, useState } from "react";

const CountryList = () => {
  const [data, setData] = useState();
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("https://10.0.2.2:8081/api.eatachi.co/api/country")
      .then((response) => {
        return response.json();
      })
      .then((countries) => {
        setData(countries);
      })
      .catch((err) => alert(err));
  }, []);

  useEffect(() => {
    if (data) setCount(data.length);
  }, [data]);

  return (
    <div className="main">
      <div style={{ color: "blue" }}>Mobile App Class</div>
      <div style={{ fontSize: 16 }}>List of Countries</div>
      <div style={{ paddingTop: 16, paddingBottom: 16 }}>
        {/* <button onClick={addData}>Add Data</button> */}
      </div>
      <div style={{ fontWeight: "bold", padding: 8 }}>
        Total Countries: {count}
      </div>
      <div className="table">
        <div className="header">
          <div className="col1">Code</div>
          <div className="col2">Name</div>
          <div className="col3">Currency</div>
        </div>

        {
          /* data && */
          data?.map((d, i) => (
            <div className="row" key={"row_" + i}>
              <div className="col1">{d.CountryCode}</div>
              <div className="col2">{d.Name}</div>
              <div className="col3">{d.CurrencyName}</div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default CountryList;
