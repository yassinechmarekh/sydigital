import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="fixed inset-0 bg-blue-100 dark:bg-gunmetal grid min-h-full place-items-center z-50">
      <div className="container">
        <div className="text-center">
          <p className="text-base font-semibold text-caribbean-current dark:text-turquoise">404</p>
          <h1 className="mt-4 text-balance text-5xl font-semibold tracking-tight text-gunmetal dark:text-white sm:text-7xl">
            Page not found
          </h1>
          <p className="mt-6 text-pretty text-lg font-medium text-slate-600 dark:text-slate-300 sm:text-xl/8">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to="/"
              className="main-btn bg-caribbean-current dark:bg-turquoise text-base"
            >
              Go back home
            </Link>
            <Link to="/contact" className="font-semibold text-slate-600 hover:text-caribbean-current dark:text-slate-300 dark:hover:text-turquoise transition-colors">
              Contact support <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
