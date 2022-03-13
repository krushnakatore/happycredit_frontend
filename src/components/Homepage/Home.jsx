import React, { useEffect, useState } from "react";
import "./home.css";
import { Navbar } from "../navbar/Navbar";
import Input from "antd/lib/input/Input";
import icons, { SearchOutlined } from "@ant-design/icons";

export const Home = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    getData();
  }, []);
  async function getData() {
    await fetch(`http://localhost:3456/product`)
      .then((res) => res.json())
      .then((d) => {
        console.log(d);
        setProduct(d);
      });
  }

  console.log("p", product);
  return (
    <div>
      <Navbar />
      <div className="mainWrapper">
        <div className="homeWrapperHeading">All deals and coupons.</div>
        <div className="homeWrapperPara">
          The best online deals and coupons, including Klarna exclusives,
          updated daily.
        </div>
        <div className="homeWrapper">
          <div className="homeWrapperLeft">
            <div className="homeWrapperLeft">
              <div className="homeWrapperLeftList">
                <div className="homeWrapperLeftList1">
                  <ul>
                    <strong>
                      <h3>Categories</h3>
                    </strong>
                  </ul>
                  <ul>All Deals</ul>
                  <ul>Babies & Kids</ul>
                  <ul>Clothing & Apprael</ul>
                  <ul>Computers &Accesories</ul>
                  <ul>Consumer Electronics</ul>
                  <ul>Education</ul>
                  <ul>Gifts</ul>
                  <ul>Health and Beauty</ul>
                  <ul>Houlday and Occasions</ul>
                  <ul>Household</ul>
                  <ul>See all 14</ul>
                </div>
              </div>
              <hr />
              <div className="homeWrapperLeftList2">
                <ul>Filters</ul>
                <input
                  type="checkbox"
                  name="Only Coupons"
                  value="Only Coupons"
                ></input>
                <label>Only Coupons</label>
                <br />
                <input
                  type="checkbox"
                  name="Exclusives"
                  value="Exclusives"
                ></input>
                <label>Exclusives</label>
                <br />
                <input
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  value="Bike"
                ></input>
                <label>BOGO and more</label>
              </div>
              <hr />
              <div className="homeWrapperLeftList3">
                <ul>Discount</ul>
                <input
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  value="Bike"
                ></input>
                <label>0-49% off</label>
                <br />
                <input
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  value="Bike"
                ></input>
                <label>50-80% off</label>
              </div>
            </div>
          </div>
          <div className="homeWrapperRight">
            <div className="homeWrapperRightProducts">
              <div className="homeWrapperRightProdSearch">
                <div className="homeWrapperRightProdSearchIcon">
                  <SearchOutlined />
                </div>
                <Input
                  className="homeWrapperRightProdSearchInput"
                  placeholder="search"
                ></Input>
              </div>
              <div className="homeWrapperRightProdfeatures">
                <div>98 deals</div>
                <div>
                  <select>
                    <option value="Featured">Featured</option>
                    <option value="A-Z">A-Z</option>
                    <option value="Newest">Newest</option>
                  </select>
                </div>
              </div>
              <div className="homeWrapperRightProdList">
                {product.map((prod) => {
                  return (
                    <div key={prod._id} className="homeWrapperRightProdSingle">
                      <div className="homeWrapperRightProdSingleImg">
                        <img src={prod.images} alt="product" />
                      </div>
                      <div className="homeWrapperRightProdName">
                        <strong>{prod.product_name}</strong>
                      </div>
                      <div>{prod.tagline}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
