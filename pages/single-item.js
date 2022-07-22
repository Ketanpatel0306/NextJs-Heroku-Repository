import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { Config } from "../config";

const SingleItem = (props) => {
  const [save, setSave] = useState([]);
  let route = useRouter();
  let matchId = props.mainId;

  const DataFetch = async () => {
    const response = await fetch(`${Config.BaseUrl}/users`, {
      method: "GET",
      headers: { Accept: "application/json" },
    });
    const data = await response.json();

    let newData = data.data.filter((i) => {
      return i.id == matchId;
    });

    setSave(newData);
  };
  useEffect(() => {
    DataFetch();
  }, []);
  const GoBack = () => {
    route.push("/");
  };
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          backgroundColor: "yellow",
          alignItems: "center",
          height: "100%",
        }}
      >
        {save.map((item, index) => {
          return (
            <div
              key={index + "mapKey1"}
              style={{
                backgroundColor: index % 2 === 0 ? "pink" : "greenyellow",
                border: "1px solid black",
                padding: "0px 30px",
              }}
            >
              <button onClick={() => GoBack()}>back</button>
              <p>
                <b> Address: </b>
                {item.address}
              </p>
              <p>
                <b>City:</b> {item.city}
              </p>
              <p>
                <b>CreatedAt:</b> {item.createdAt}
              </p>
              <p>
                <b>Email:</b> {item.email}
              </p>
              <p>
                <b>First Name:</b> {item.first_name}
              </p>
              <p>
                <b> Last Name:</b> {item.last_name}
              </p>
              <p>
                <b> Password:</b> {item.password}
              </p>
              <p>
                <b> Phone:</b> {item.phone}
              </p>
              <p>
                <b> State:</b> {item.state}
              </p>
              <p>
                <b>Status:</b> {item.status ? "true" : "false"}
              </p>
              <p>
                <b>UId:</b> {item.u_id}
              </p>
              <p>
                <b>UpdatedAt:</b> {item.updatedAt}
              </p>
              <p>
                <b> Zip:</b> {item.zip}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SingleItem;

export async function getServerSideProps(context) {
  const mainId = context.query.itemId;
  return {
    props: { mainId }, // will be passed to the page component as props
  };
}
