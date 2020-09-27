import React from "react";
import { Link } from "react-router-dom";
import { Button, Result } from "antd";

const Page = () => {
  return (
    <Result
      status="403"
      title="403"
      subTitle="Sorry, you are not authorized to access this page."
      extra={<Link to="/home"><Button type="primary">Back Home</Button></Link>}
    />
  );
};

export default Page;
