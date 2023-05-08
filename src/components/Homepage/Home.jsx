import React, { useEffect, useState } from 'react';
import './home.css';
import { Navbar } from '../navbar/Navbar';
import Input from 'antd/lib/input/Input';
import icons, { SearchOutlined } from '@ant-design/icons';
import { Product } from '../popup/Product';
import { Footer } from '../footer/Footer';

export const Home = () => {
  const [product, setProduct] = useState([]);
  const [c, setC] = useState(false);
  const [data, setData] = useState();
  const [height, setHeight] = useState(0);
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getData();
  }, []);
  async function getData() {
    setLoading(true);
    await fetch(`https://claraback.onrender.com/product`)
      .then((res) => res.json())
      .then((d) => {
        setProduct(d);
        setLoading(false);
      });
  }

  //coupons

  async function handleChange1(e) {
    setLoading(true);
    if (e.target.checked) {
      await fetch(`https://claraback.onrender.com/product`)
        .then((res) => res.json())
        .then((d) => {
          setProduct(
            d.filter((ele) => {
              return ele.type_name === 'only coupons';
            })
          );
          setLoading(false);
        });
    } else {
      setLoading(true);
      getData();
      setLoading(false);
    }
  }
  async function handleChange2(e) {
    setLoading(true);
    if (e.target.checked) {
      await fetch(`https://claraback.onrender.com/product`)
        .then((res) => res.json())
        .then((d) => {
          setProduct(
            d.filter((ele) => {
              return ele.type_name === 'exclusives';
            })
          );
          setLoading(false);
        });
    } else {
      setLoading(true);
      getData();
      setLoading(false);
    }
  }
  async function handleChange3(e) {
    setLoading(true);
    if (e.target.checked) {
      await fetch(`https://claraback.onrender.com/product`)
        .then((res) => res.json())
        .then((d) => {
          setProduct(
            d.filter((ele) => {
              return ele.type_name === 'BOGO and more';
            })
          );
          setLoading(false);
        });
    } else {
      setLoading(true);
      getData();
      setLoading(false);
    }
  }

  //discount

  async function handleDiscount1(e) {
    setLoading(true);
    if (e.target.checked) {
      await fetch(`https://claraback.onrender.com/product`)
        .then((res) => res.json())
        .then((d) => {
          setProduct(
            d.filter((ele) => {
              return ele.discount < 50;
            })
          );
          setLoading(false);
        });
    } else {
      setLoading(true);
      getData();
      setLoading(false);
    }
  }

  async function handleDiscount2(e) {
    setLoading(true);
    if (e.target.checked) {
      await fetch(`https://claraback.onrender.com/product`)
        .then((res) => res.json())
        .then((d) => {
          setProduct(
            d.filter((ele) => {
              return ele.discount >= 50;
            })
          );
          setLoading(false);
        });
    } else {
      setLoading(true);
      getData();
      setLoading(false);
    }
  }

  //sorting from a to z;

  async function handleSort(e) {
    let abc = e.target.value;

    if (abc == 'A-Z') {
      setLoading(true);
      await fetch(`https://claraback.onrender.com/product/sort`)
        .then((res) => res.json())
        .then((d) => {
          setProduct(d);
          setLoading(false);
        });
    } else if (abc == 'Newests') {
      setLoading(true);
      await fetch(`https://claraback.onrender.com/product`)
        .then((res) => res.json())
        .then((d) => {
          setProduct(
            d.filter((ele) => {
              return ele.discount >= 50;
            })
          );
          setLoading(false);
        });
    } else {
      setLoading(true);
      getData();
      setLoading(false);
    }
  }

  useEffect(() => {
    setHeight(window.innerHeight);
  }, [height]);

  if (show) {
    var obj = {
      opacity: '0.7',
    };
  }

  return (
    <div>
      <div style={obj}>
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
                        <h3 style={{ color: 'black' }}>Categories</h3>
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
                <hr className="hr" />
                <div className="homeWrapperLeftList2">
                  <ul>Filters</ul>
                  <input type="checkbox" onChange={handleChange1}></input>
                  <label>Only Coupons</label>
                  <br />
                  <input
                    type="checkbox"
                    name="Exclusives"
                    value="Exclusives"
                    onChange={handleChange2}
                  ></input>
                  <label>Exclusives</label>
                  <br />
                  <input
                    type="checkbox"
                    value="Bike"
                    onChange={handleChange3}
                  ></input>
                  <label>BOGO and more</label>
                </div>
                <hr className="hr" />
                <div className="homeWrapperLeftList3">
                  <ul>Discount</ul>
                  <input
                    type="checkbox"
                    value="Bike"
                    onChange={handleDiscount1}
                  ></input>
                  <label>0-49% off</label>
                  <br />
                  <input
                    type="checkbox"
                    value="Bike"
                    onChange={handleDiscount2}
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
                    <select name="sort" onChange={handleSort}>
                      <option value="Featured">Featured</option>
                      <option value="A-Z">A-Z</option>
                      <option value="Newest">Newest</option>
                    </select>
                  </div>
                </div>
                <div className="homeWrapperRightProdList">
                  {loading ? (
                    <div>Loading...</div>
                  ) : (
                    <>
                      {product.map((prod) => {
                        return (
                          <div
                            key={prod._id}
                            className="homeWrapperRightProdSingle"
                            onClick={() => {
                              setC((prev) => !prev);
                              setData(prod);
                              setShow(true);
                            }}
                          >
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
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
      {show ? (
        <>
          <Product value={data} height={height} show={show} setShow={setShow} />
        </>
      ) : (
        ''
      )}
    </div>
  );
};
