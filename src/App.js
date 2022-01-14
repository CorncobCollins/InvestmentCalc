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
        <div className="firstContainer">
          <InputForm />
          <Chart />
        </div>
        <DataTable />
      </ValueArrayProvider>
        <Footer />
    </div>
  );
}

export { App };
