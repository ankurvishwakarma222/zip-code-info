import React, { useContext } from "react";
import Table from "react-bootstrap/Table";
import styled from "./LocationCard.module.css";
import { AppContext } from "../../globalStore/store";
const LocationInfo = () => {
  const { data } = useContext(AppContext);
  return (
    <>
      <div className="col-lg-10 mt-3">
        <div>
          <Table
            bordered
            responsive
            hover
            className={`${styled.tableCss} mb-0 text-center`}
          >
            <thead>
              <tr>
                <th>Sr.No</th>
                <th>Post Code</th>
                <th>Country Name</th>
                <th>State Name</th>
                <th>Place Name</th>
                <th>Longitude</th>
                <th>Latitude</th>
              </tr>
            </thead>
            <tbody>
              {data &&
                data.length > 0 &&
                data.map(
                  (
                    {
                      country,
                      state,
                      "place name": placeName,
                      longitude,
                      latitude,
                      postCode,
                      countryAbbreviation,
                      "state abbreviation": stateAbbreviation,
                    },
                    index
                  ) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{postCode}</td>
                        <td>
                          {country},{countryAbbreviation}
                        </td>
                        <td>
                          {state},{stateAbbreviation}
                        </td>
                        <td>{placeName}</td>
                        <td>{longitude}</td>
                        <td>{latitude}</td>
                      </tr>
                    );
                  }
                )}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default LocationInfo;
