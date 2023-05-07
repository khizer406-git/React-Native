import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { useEffect } from "react";

const StudentList = () => {
  const [data, setData] = useState(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("everytime");
  });

  useEffect(() => {
    console.log("page load");
    setData([
      {
        rollNum: 1,
        name: "Waseem Khan",
        address: "Karachi",
      },
      { rollNum: 2, name: "Aziz Shaikh", address: "Lahore" },
    ]);
  }, []);

  useEffect(() => {
    console.log("data updated");
    setCount(data.length);
  }, [data]);

  const addData = () => {
    const newData = data.slice();
    const rollNums = newData.map((d) => d.rollNum);
    const nextRollNum = Math.max(...rollNums) + 1;
    newData.push({
      rollNum: nextRollNum,
      name: "Raheel",
      address: "Islambad",
    });

    setData(newData);
    alert("hi");
  };

  return (
    <div className="main">
      <div style={{ color: "blue" }}>Mobile App Class</div>
      <div style={{ fontSize: 16 }}>Flex direction column</div>
      <div style={{ paddingTop: 16, paddingBottom: 16 }}>
        <button onClick={addData}>Add Data</button>
      </div>
      <div style={{ fontWeight: "bold", padding: 8 }}>
        Total Students: {count}
      </div>
      <div className="table">
        <div className="header">
          <div className="col1">Roll Number</div>
          <div className="col2">Name</div>
          <div className="col3">Address</div>
        </div>
        {
          /* data && */
          data?.map((d, i) => (
            <div className="row" key={"row_" + i}>
              <div className="col1">{d.rollNum}</div>
              <div className="col2">{d.name}</div>
              <div className="col3">{d.address}</div>
            </div>
          ))
        }
      </div>
      {/* <div className="table">
        <div className="row">
          <div style={{ width: "40%", fontWeight: "bold" }}>Roll Number</div>
          <div style={{ width: "60%" }}>{data[0].rollNum}</div>
        </div>
        <div className="row">
          <div style={{ width: "40%", fontWeight: "bold" }}>Name</div>
          <div style={{ width: "60%" }}>{data[0].name}</div>
        </div>
        <div className="row">
          <div style={{ width: "40%", fontWeight: "bold" }}>Address</div>
          <div style={{ width: "60%" }}>{data[0].address}</div>
        </div>
      </div> */}
    </div>
  );
};

export default StudentList;
