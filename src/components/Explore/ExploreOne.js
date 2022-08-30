import React, { Component } from "react";
import axios from "axios";
import { contractAddress, refDefaultAddress } from "../constant";

const initData = {
  pre_heading: "",
  heading: "My Mints",
  btn_1: "View All",
  btn_2: "Load More",
};

class ExploreOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  loadWeb3 = async () => {
    let windows = {};
    let mainAccount;
    let isConnected = false;
    let connection;
    try {
      windows.tronWeb = await window.tronWeb;
      if (
        windows.tronWeb &&
        windows.tronWeb.defaultAddress.base58 === "undefined"
      ) {
        connection = "TROn LINK is not available";
        isConnected = false;
        console.log(
          "Tron is not installed, please install it on your browser to connect."
        );
      } else {
        connection = "Connected to Tron LINK.";
        isConnected = true;

        this.fetchData();
        if (mainAccount) {
          if (isConnected === true) {
            let accountDetails = null;
          } else {
            console.log("Tron Not Connected");
          }
        } else {
          console.log("Please login or install tron wallet!");
        }
      }
    } catch (error) {
      console.log("error0", error);
    }
  };

  isLocked() {
    if (window.tronWeb.defaultAddress.base58 == null) {
      // console.log("error null");
    } else if (window.tronWeb.defaultAddress.base58 === 0) {
      // console.log("TRON LINK is locked");
    } else {
      // console.log("TRON LINK is unlocked");
    }
  }
  openDetail = async (e) => {
    try {
      //   console.log("name",e.target.value);
      //    localStorage.setItem("namecount", e.target.name);
      //    window.location.href="/item-details";
    } catch (e) {
      console.log("blnc", e);
    }
  };
  fetchData = async () => {
    try {
      let windows = {};
      windows.tronWeb = await window.tronWeb;

      let main = localStorage.getItem("load");
      console.log("getmintedtoken", main);

      let balanceOff = localStorage.getItem("balanceOff");
      console.log("getmintedtoken", balanceOff);

      let newArr = [];

      for (let i = 1; i <= balanceOff; i++) {
        await axios
          .get(`https://sudeepojha.com.np/blockchain/api/v1/getjson/${i}`)
          .then((response) => {
            newArr.push(response.data);
          })
          .catch((error) => {
            console.log("error", error);
          });
      }
      this.setState({ data: newArr });
      console.log("response", newArr);
    } catch (e) {
      console.log("blnc", e);
    }
  };
  componentDidMount() {
    try {
      setInterval(() => {
        //  let mainArr = [];
        //  let maina = localStorage.getItem("newArr");
        //  mainArr.push(maina);

        //  console.log("getmintedtoken", maina);
        //   console.log("getmintedtoken", mainArr);
        //  console.log("getmintedtoken",typeof mainArr);
        //  this.setState({data: mainArr});
        this.fetchData();
      }, 3000);
    } catch (e) {
      console.log("blnc", e);
    }
  }

  render() {
    return (
      <section className="explore-area load-more p-0">
        <div className="container">
          <div className="row">
            <div className="col-12">
              {/* Intro */}
              <div className="intro d-flex justify-content-between align-items-end m-0">
                <div className="intro-content">
                  <h3 className="mt-3 mb-0">My Mints</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="row     ">
            {this.state.data.map((item) => {
              console.log("item", item);
              return (
                <div className="col-12 col-sm-6 col-lg-3 item">
                  <div className="card">
                    <div className="image-over">
                      <a
                        // href="/item-details"
                        name="www"
                        onClick={this.openDetail}
                      >
                        <img
                          className="card-img-top"
                          id={item.edition}
                          src={item.image}
                          // src="https://ipfs.io/ipfs/QmPLVWrCuW6Bp1s7G4djhsAKdRGMkkEGcw3Ss5ahhETcMA"
                          alt=""
                        />
                      </a>
                    </div>
                    {/* Card Caption */}
                    <div className="card-caption col-12 p-0">
                      {/* Card Body */}
                      <div className="card-body">
                        <button
                          // href="/item-details"s
                          value="waqas"
                          name="waqas"
                        >
                          <h5 className="mb-0">{item.name}</h5>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="row">
            <div className="col-12 text-center">
              <a id="load-btn" className="btn btn-bordered-white mt-5" href="#">
                Load More
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ExploreOne;
