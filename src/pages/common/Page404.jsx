import React from "react";
import { Link } from "react-router-dom";
import { Button, Result } from "antd";

const Page = () => {
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={<Link to="/home"><Button type="primary">Back Home</Button></Link>}
    />
  );
};

export default Page;
