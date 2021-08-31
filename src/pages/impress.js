import React from "react";
import Layout from "../components/layout";

export default function Impress({ location }) {
  return (
    <Layout location={location} title={"Marginalien"}>
      <div>
        <p>
          Verantwortlicher <br />
          Jasper Anders <br />
          Boeckhstr. 8 <br />
          76135 Karlsruhe
        </p>
      </div>
    </Layout>
  );
}
