import React, { Component } from "react";
import axios from "axios";

const initData = {
  itemImg: "./img/test.png",
  date: "2022-03-30",
  tab_1: "Bids",
  tab_2: "History",
  tab_3: "Details",
  ownerImg: "/img/avatar_1.jpg",
  itemOwner: "My Wallet Address",
  created: "15 Jul 2021",
  title: "#1",
  content: "For the hidden",
  price_1: "1.5 ETH",
  price_2: "$500.89",
  count: "1 of 5",
  size: "14000 x 14000 px",
  volume: "64.1",
  highest_bid: "Background",
  bid_count: "Blue",
  btnText: "Place a Bid",
  bid2: "Power",
  bid3: "Blue Lightning",
  bid4: "Suit",
  bid5: "Blue",
  bid6: "Skin",
  bid7: "Black",
  bid8: "Eyes",
  bid9: "Purple",
  bid10: "Attribute",
  bid11: "Red Scar",
  bid12: "Hair",
  bid13: "Red",
  bid14: "Accessory",
  bid15: "Halo",
  bid16: "Text",
  bid17: "None",
};

const tabData_1 = [
  {
    id: "1",
    img: "/img/avatar_1.jpg",
    price: "14 ETH",
    time: "4 hours ago",
    author: "@arham",
  },
  {
    id: "2",
    img: "/img/avatar_2.jpg",
    price: "10 ETH",
    time: "8 hours ago",
    author: "@junaid",
  },
  {
    id: "3",
    img: "/img/avatar_3.jpg",
    price: "12 ETH",
    time: "3 hours ago",
    author: "@yasmin",
  },
];

const tabData_2 = [
  {
    id: "1",
    img: "/img/avatar_6.jpg",
    price: "32 ETH",
    time: "10 hours ago",
    author: "@hasan",
  },
  {
    id: "2",
    img: "/img/avatar_7.jpg",
    price: "24 ETH",
    time: "6 hours ago",
    author: "@artnox",
  },
  {
    id: "3",
    img: "/img/avatar_8.jpg",
    price: "29 ETH",
    time: "12 hours ago",
    author: "@meez",
  },
];

const sellerData = [
  {
    id: "1",
    img: "/img/avatar_1.jpg",
    seller: "@ArtNoxStudio",
    post: "Creator",
  },
  {
    id: "2",
    img: "/img/avatar_2.jpg",
    seller: "Virtual Worlds",
    post: "Collection",
  },
];

class ItemDetails extends Component {
  state = {
    initData: {},
    tabData_1: [],
    tabData_2: [],
    sellerData: [],
  };
  componentDidMount() {
    this.setState({
      initData: initData,
      tabData_1: tabData_1,
      tabData_2: tabData_2,
      sellerData: sellerData,
    });
    try {
      let maina = localStorage.getItem("newArr");
    } catch (e) {
      console.log("blnc", e);
    }
  }
  fetchData = async () => {
    try {
      let windows = {};
      windows.tronWeb = await window.tronWeb;

      let main = localStorage.getItem("load");
      console.log("getmintedtoken", main);

      let balanceOff = localStorage.getItem("balanceOff");
      console.log("getmintedtoken", balanceOff);

      let newArr = [];

      let maina = localStorage.getItem("newArr");
      console.log("getmintedtoken", maina);
      await axios
        .get(`https://sudeepojha.com.np/blockchain/api/v1/getjson/1`)
        .then((response) => {
          console.log("response", response);
          console.log("response", response.data);
          console.log("response", response.data.attributes[0]);
          newArr.push(response.data);
        })
        .catch((error) => {
          console.log("error", error);
        });
    } catch (e) {
      console.log("blnc", e);
    }
  };
  render() {
    return (
      <section className="item-details-area">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-12 col-lg-5">
              <div className="item-info">
                <div className="item-thumb text-center">
                  <img src={this.state.initData.itemImg} alt="" />
                </div>

                <div className="tab-content" id="nav-tabContent">
                  <div className="tab-pane fade" id="nav-profile">
                    <ul className="list-unstyled">
                      {this.state.tabData_2.map((item, idx) => {
                        return (
                          <li
                            key={`tdt_${idx}`}
                            className="single-tab-list d-flex align-items-center"
                          >
                            <p className="m-0">
                              Bid listed for <strong>{item.price}</strong>{" "}
                              {item.time} <br />
                              by <a href="/author">{item.author}</a>
                            </p>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  <div className="tab-pane fade" id="nav-contact">
                    {/* Single Tab List */}
                    <div className="owner-meta d-flex align-items-center mt-3">
                      <span>Owner</span>
                      <a
                        className="owner d-flex align-items-center ml-2"
                        href="/author"
                      >
                        <h6 className="ml-2">
                          {this.state.initData.itemOwner}
                        </h6>
                      </a>
                    </div>
                    <p className="mt-2">
                      Created : {this.state.initData.created}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              {/* Content */}
              <div className="content mt-5 mt-lg-0">
                <h3 className="m-0">{this.state.initData.title}</h3>
                <p>{this.state.initData.content}</p>
                {/* Owner */}
                <div className="owner d-flex align-items-center">
                  <span>Owned By</span>
                  <a
                    className="owner-meta d-flex align-items-center ml-3"
                    href="/author"
                  >
                    <h6 className="ml-2">{this.state.initData.itemOwner}</h6>
                  </a>
                </div>
                <div className="owner d-flex align-items-center">
                  <span>DNA</span>
                  <a
                    className="owner-meta d-flex align-items-center ml-3"
                    href="/author"
                  >
                    <h6 className="ml-2">3454356786</h6>
                  </a>
                </div>
                <div className="row items">
                  <div className="col-12 item px-lg-2">
                    <div className="card no-hover">
                      <h4 className="mt-0 mb-2">Properties</h4>
                      <div className="price">
                        <div>
                          <span>{this.state.initData.highest_bid}</span>
                          <span>{this.state.initData.bid_count}</span>
                        </div>
                        <div>
                          <span>{this.state.initData.bid2}</span>
                          <span>{this.state.initData.bid3}</span>
                        </div>
                        <div>
                          <span>{this.state.initData.bid4}</span>
                          <span>{this.state.initData.bid5}</span>
                        </div>
                        <div>
                          <span>{this.state.initData.bid6}</span>
                          <span>{this.state.initData.bid7}</span>
                        </div>
                        <div>
                          <span>{this.state.initData.bid8}</span>
                          <span>{this.state.initData.bid9}</span>
                        </div>
                        <div>
                          <span>{this.state.initData.bid10}</span>
                          <span>{this.state.initData.bid11}</span>
                        </div>
                        <div>
                          <span>{this.state.initData.bid12}</span>
                          <span>{this.state.initData.bid13}</span>
                        </div>
                        <div>
                          <span>{this.state.initData.bid14}</span>
                          <span>{this.state.initData.bid15}</span>
                        </div>
                        <div>
                          <span>{this.state.initData.bid16}</span>
                          <span>{this.state.initData.bid17}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ItemDetails;
