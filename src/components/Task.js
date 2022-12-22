import React, { useEffect, useState } from "react";
import MaterialTable from "material-table";
import "./Task.css";
import { useDispatch, useSelector } from "react-redux";
import { EmployeeDetailsFetch } from "../redux/action/action";
import moment from "moment";

const Task = () => {
  const dispatch = useDispatch();
  // const emplyeData = useSelector((state) => state.emplyeeData);
  const [search, setSearch] = useState();
  const [name, setName] = useState("");
  const [actionType, setActionType] = useState("");
  const [applicationType, setApplicationType] = useState("");
  const [formDate, setFormDate] = useState("");

  const [applicationId, setApplicationId] = useState("");
  let columns = [
    { title: "Log ID", field: "logId" },
    { title: "Application Type", field: "applicationType" },
    { title: "Application ID", field: "applicationId" },
    { title: "Action", field: "actionType" },
    { title: "Action Details", field: "actionDetails" },
    { title: "Date Time", field: "creationTimestamp" },
  ];

  useEffect(() => {
    (async () => {
      try {
        setSearch(await dispatch(EmployeeDetailsFetch()));
        // await dispatch(EmployeeDetailsFetch());
      } catch (error) {
        console.log("error raised", error);
      }
    })();
  }, []);

  const handleSubmit = () => {
    const filtered = search.filter((search) => {
      return (
        search.applicationId === parseInt(applicationId) ||
        search.logId === parseInt(name) ||
        search.actionType === actionType ||
        search.applicationType === applicationType ||
        moment(search.creationTimestamp).format("YYYY-MM-DD") ===
          moment(formDate).format("YYYY-MM-DD")
      );
    });
    setSearch(filtered);
    const url = new URL(window.location.href);
    url.searchParams.set("logId", name);
    url.searchParams.set("applicationId", applicationId);
    url.searchParams.set("actionType", actionType);
    url.searchParams.set("applicationType", applicationType);
    window.history.pushState({}, "", url.toString());
  };

  return (
    <>
      <div className="Container">
        <form className="form-Container">
          <div class="row">
            <div class="col">
              <label>Employee Name</label>
              <input
                onChange={(e) => setName(e.target.value)}
                type="text"
                class="form-control"
                placeholder="Employee Name"
              />
            </div>
            <div class="col">
              <label>Action Type</label>
              <select
                name="application"
                id="dog-names"
                className="form-control"
                onChange={(e) => setActionType(e.target.value)}
              >
                <option value=""></option>
                <option value="DARI_REFRESH_TOKEN">DARI_REFRESH_TOKEN</option>
                <option value="DARI_APP_LOGIN">DARI_APP_LOGIN</option>
                <option value="INITIATE_APPLICATION">
                  INITIATE_APPLICATION
                </option>
                <option value="SUBMIT_APPLICATION">SUBMIT_APPLICATION</option>
                <option value="SUBMIT_APPLICATION">ADD_EMPLOYEE</option>
              </select>
            </div>

            <div class="col">
              <label>Application Type</label>
              <select
                name="application"
                id="dog-names"
                className="form-control"
                onChange={(e) => setApplicationType(e.target.value)}
              >
                <option value=""></option>
                <option value="CERT_TITLE_DEED_PLOT">
                  CERT_TITLE_DEED_PLOT
                </option>
                <option value="LEASE_REGISTRATION">LEASE_REGISTRATION</option>
                <option value="ADD_POA">ADD_POA</option>
                <option value="LEASE_REGISTRATION">LEASE_REGISTRATION</option>
                <option value="LEASE_REGISTRATION">ADD_COMPANY</option>
                <option value="LEASE_REGISTRATION">
                  {" "}
                  ADD_COMPANY_EMPLOYEE
                </option>
                <option value="LEASE_REGISTRATION"> CERT_PROP_OWNERSHIP</option>
              </select>
            </div>
            <div class="col">
              <label>Date</label>
              {/* <Moment format="YYYY/MM/DD">{this.props.dateToFormat}</Moment> */}
              <input
                type="date"
                class="form-control"
                onChange={(e) => setFormDate(e.target.value)}
              />
            </div>

            <div class="col">
              <label>Application Id</label>
              <input
                type="text"
                class="form-control"
                placeholder="2898690"
                onChange={(e) => setApplicationId(e.target.value)}
              />
            </div>
            <div class="col">
              <button
                type="button"
                class="btn btn-primary mt-4"
                onClick={() => handleSubmit()}
              >
                Search
              </button>
            </div>
          </div>
        </form>
        <MaterialTable
          title=""
          columns={columns}
          data={search}
          options={{
            pageSize: 10,
            pageSizeOptions: [10],
            search: false,
          }}
        />
      </div>
    </>
  );
};

export default Task;
