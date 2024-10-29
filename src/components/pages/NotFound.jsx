import React from "react";
import PageLayout from "../layouts/PageLayout";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <PageLayout>
      <div className="flex h-screen w-full flex-col items-center justify-center">
        <h1 className="text-center text-4xl font-bold text-primary transition-colors duration-300 ease-in-out hover:animate-rainbowText">
          Cannot Get {location.pathname} <br />
          404 - Page Not Found
        </h1>
        <p className="mt-5 text-lg text-neutral-500">
          The page you are looking for is not found
        </p>
        <Link
          to="/"
          className="mt-5 font-bold text-dark hover:underline dark:text-light"
        >
          &laquo; Back To Home
        </Link>
      </div>
    </PageLayout>
  );
}

export default NotFound;
