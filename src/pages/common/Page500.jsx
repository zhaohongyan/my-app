import React from "react";
import { Link } from "react-router-dom";
import { Button, Result } from "antd";

const Page = () => {
  return (
    <Result
      status="500"
      title="500"
      subTitle="Sorry, something went wrong."
      extra={<Link to="/home"><Button type="primary">Back Home</Button></Link>}
    />
  );
};

export default Page;
