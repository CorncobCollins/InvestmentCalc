import React from "react";
import "./App.css";
import Header from "./Modules/Header.js";
import { InputForm } from "./Modules/InputForm";
import { Chart } from "./Modules/Chart";
import Footer from "./Modules/Footer";
import { ValueArrayProvider } from "./Modules/ValueArrayContext";
import DataTable from "./Modules/Table";

function App() {
  return (
    <div>
      <Header />
      <ValueArrayProvider>
        <div className="container-one">
          <InputForm />
          <Chart />
        </div>
        <div className="container-two">
          <DataTable />
        </div>
      </ValueArrayProvider>
      <Footer />
    </div>
  );
}

export { App };
