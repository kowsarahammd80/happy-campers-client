import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <footer className="footer p-24 bg-base text-base-content">

        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>

        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
        <div >
          <span className="footer-title">Newsletter</span>
          <div className="form-control w-72">
            <p className="mb-10">They're halpful and funny (some times, we try)</p>
            <div className="relative">
              <input
                type="text"
                placeholder="Enter email id"
                className="input input-bordered w-full "
              />
              <button className="btn bg-black absolute top-0 right-0 rounded-l-none">
                Sign up
              </button>
            </div>
          </div>
        </div>
      
      </footer>

    </div>
  );
};

export default Footer;
