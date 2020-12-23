import React, { Component } from "react";
export const DataContext = React.createContext();

export class DataProvider extends Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          id: "1",
          name: "Rabidarun",
          src_img1: `${require("../assets/img/rapidarun1.jpg")}`,
          src_img2: `${require("../assets/img/rapidarun2.jpg")}`,
          price: 60,
          discounts: 0,
          count: 1, 
          title:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          sizes: [37, 39, 40, 41, 42],
          amount: [0, 20, 0, 1, 2],
        },
        {
          id: "2",
          name: "NMD R1 v2",
          src_img1: `${require("../assets/img/NMDR1V2_1.jpg")}`,
          src_img2: `${require("../assets/img/NMDR1V2_2.jpg")}`,
          price: 160,
          discounts: 10,
          count: 1,
          title:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          sizes: [37, 39, 40, 41, 42],
          amount: [0, 20, 0, 1, 2],
        },
        {
          id: "3",
          name: "ZK 2K",
          src_img1: `${require("../assets/img/ZK2K_1.jpg")}`,
          src_img2: `${require("../assets/img/ZK2K_2.jpg")}`,
          price: 60,

          discounts: 30,
          count: 1,
          title:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          sizes: [37, 39, 40, 41, 42],
          amount: [0, 20, 0, 1, 2],
        },
        {
          id: "4",
          name: "Ultra Boots 2020",
          src_img1: `${require("../assets/img/UB2020_1.jpg")}`,
          src_img2: `${require("../assets/img/UB2020_2.jpg")}`,
          price: 60,
          discounts: 30,
          count: 1,
          title:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          sizes: [37, 39, 40, 41, 42],
          amount: [0, 20, 0, 1, 2],
        },
        {
          id: "35",
          name: "4D RUN",
          src_img1: `${require("../assets/img/4DRUN_1.jpg")}`,
          src_img2: `${require("../assets/img/4DRUN_2.jpg")}`,
          price: 60,

          discounts: 30,
          count: 1,
          title:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          sizes: [37, 39, 40, 41, 42],
          amount: [0, 20, 0, 1, 2],
        },
        {
          id: "5",
          name: "X90004D",
          src_img1: `${require("../assets/img/X90004D_1.jpg")}`,
          src_img2: `${require("../assets/img/X90004D_2.jpg")}`,
          price: 60,

          discounts: 30,
          count: 1,
          title:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          sizes: [37, 39, 40, 41, 42],
          amount: [0, 20, 0, 1, 2],
        },
        {
          id: "6",
          name: "Super Star 2020",
          src_img1: `${require("../assets/img/SS2020_2.jpg")}`,
          src_img2: `${require("../assets/img/SS2020_1.jpg")}`,
          price: 60,

          discounts: 30,
          count: 1,
          title:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          sizes: [37, 39, 40, 41, 42],
          amount: [0, 20, 0, 1, 2],
        },
        {
          id: "7",
          name: "Tokio Solor HM",
          src_img1: `${require("../assets/img/TOKIO_2.jpg")}`,
          src_img2: `${require("../assets/img/TOKIO_1.jpg")}`,
          price: 60,

          discounts: 30,
          count: 1,
          title:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          sizes: [37, 39, 40, 41, 42],
          amount: [0, 20, 0, 1, 2],
        },
        {
          id: "8",
          name: "Alphatorison Boots",
          src_img1: `${require("../assets/img/Alpha_2.jpg")}`,
          src_img2: `${require("../assets/img/Alpha_1.jpg")}`,
          price: 60,

          discounts: 30,
          count: 1,
          title:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          sizes: [37, 39, 40, 41, 42],
          amount: [0, 20, 0, 1, 2],
        },
        {
          id: "9",
          name: "DAY JOGGERS",
          src_img1: `${require("../assets/img/DAY_1.jpg")}`,
          src_img2: `${require("../assets/img/DAY_2.jpg")}`,
          price: 60,

          discounts: 30,
          count: 1,
          title:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          sizes: [37, 39, 40, 41, 42],
          amount: [0, 20, 0, 1, 2],
        },
        {
          id: "10",
          name: "JUNG 96",
          src_img1: `${require("../assets/img/JUNG_2.jpg")}`,
          src_img2: `${require("../assets/img/JUNG_1.jpg")}`,
          price: 60,

          discounts: 30,
          count: 1,
          title:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          sizes: [37, 39, 40, 41, 42],
          amount: [0, 20, 0, 1, 2],
        },
        {
          id: "11",
          name: "Nite Jogger",
          src_img1: `${require("../assets/img/Nite_2.jpg")}`,
          src_img2: `${require("../assets/img/Nite_1.jpg")}`,
          price: 60,

          discounts: 30,
          count: 1,
          title:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          sizes: [37, 39, 40, 41, 42],
          amount: [0, 20, 0, 1, 2],
        },
        {
          id: "12",
          name: "Nike Air-Zoom",
          src_img1: `${require("../assets/img/nikezoom1.jpg")}`,
          src_img2: `${require("../assets/img/nikezoom2.jpg")}`,
          price: 60,

          discounts: 30,
          count: 1,
          title:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          sizes: [37, 39, 40, 41, 42],
          amount: [0, 20, 0, 1, 2],
        },
        {
          id: "13",
          name: "Nike Blazer",
          src_img1: `${require("../assets/img/blazer1.jpg")}`,
          src_img2: `${require("../assets/img/blazer2.jpg")}`,
          price: 60,

          discounts: 30,
          count: 1,
          title:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          sizes: [37, 39, 40, 41, 42],
          amount: [0, 20, 0, 1, 2],
        },
        {
          id: "14",
          name: "Nike Air Force 1 Crater",
          src_img1: `${require("../assets/img/crater1.jpg")}`,
          src_img2: `${require("../assets/img/crater2.jpg")}`,
          price: 60,

          discounts: 30,
          count: 1,
          title:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          sizes: [37, 39, 40, 41, 42],
          amount: [0, 20, 0, 1, 2],
        },
        {
          id: "15",
          name: " Air Zoom Tempo",
          src_img1: `${require("../assets/img/tempo1.jpg")}`,
          src_img2: `${require("../assets/img/tempo2.jpg")}`,
          price: 60,

          discounts: 30,
          count: 1,
          title:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          sizes: [37, 39, 40, 41, 42],
          amount: [0, 20, 0, 1, 2],
        },
        {
          id: "16",
          name: "Nike Metcon 6",
          src_img1: `${require("../assets/img/metcon1.jpg")}`,
          src_img2: `${require("../assets/img/metcon2.jpg")}`,
          price: 60,

          discounts: 30,
          count: 1,
          title:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          sizes: [37, 39, 40, 41, 42],
          amount: [0, 20, 0, 1, 2],
        },
        {
          id: "17",
          name: "Kybrid S2",
          src_img1: `${require("../assets/img/kybrid2.jpg")}`,
          src_img2: `${require("../assets/img/kybrid1.jpg")}`,
          price: 60,

          discounts: 30,
          count: 1,
          title:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          sizes: [37, 39, 40, 41, 42],
          amount: [0, 20, 0, 1, 2],
        },
        {
          id: "18",
          name: "Zoom Freak 2",
          src_img1: `${require("../assets/img/zoom1.jpg")}`,
          src_img2: `${require("../assets/img/zoom2.jpg")}`,
          price: 60,

          discounts: 30,
          count: 1,
          title:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          sizes: [37, 39, 40, 41, 42],
          amount: [0, 20, 0, 1, 2],
        },
        {
          id: "19",
          name: "Vapormax 2020",
          src_img1: `${require("../assets/img/vapo1.jpg")}`,
          src_img2: `${require("../assets/img/vapo12.jpg")}`,
          price: 60,

          discounts: 30,
          count: 1,
          title:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          sizes: [37, 39, 40, 41, 42],
          amount: [0, 20, 0, 1, 2],
        },
        {
          id: "20",
          name: "Lebron 16",
          src_img1: `${require("../assets/img/161.jpg")}`,
          src_img2: `${require("../assets/img/1612.jpg")}`,
          price: 60,

          discounts: 30,
          count: 1,
          title:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          sizes: [37, 39, 40, 41, 42],
          amount: [0, 20, 0, 1, 2],
        },
        {
          id: "21",
          name: "Lebron 18",
          src_img1: `${require("../assets/img/181.jpg")}`,
          src_img2: `${require("../assets/img/1812.jpg")}`,
          price: 60,

          discounts: 30,
          count: 1,
          title:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          sizes: [37, 39, 40, 41, 42],
          amount: [0, 20, 0, 1, 2],
        },
        {
          id: "22",
          name: "Nike Air Force 1 React",
          src_img1: `${require("../assets/img/react1.jpg")}`,
          src_img2: `${require("../assets/img/react12.jpg")}`,
          price: 60,

          discounts: 30,
          count: 1,
          title:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          sizes: [37, 39, 40, 41, 42],
          amount: [0, 20, 0, 1, 2],
        },
        {
          id: "23",
          name: "Lebron Witness 5",
          src_img1: `${require("../assets/img/wit1.jpg")}`,
          src_img2: `${require("../assets/img/wit12.jpg")}`,
          price: 60,

          discounts: 30,
          count: 1,
          title:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          sizes: [37, 39, 40, 41, 42],
          amount: [0, 20, 0, 1, 2],
        },
        {
          id: "24",
          name: "Nike SkillShot",
          src_img1: `${require("../assets/img/skill1.jpg")}`,
          src_img2: `${require("../assets/img/skill12.jpg")}`,
          price: 60,

          discounts: 30,
          count: 1,
          title:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          sizes: [37, 39, 40, 41, 42],
          amount: [0, 20, 0, 1, 2],
        },
        {
          id: "25",
          name: "Jordan 4 x Offwhite",
          src_img1: `${require("../assets/img/off1.jpg")}`,
          src_img2: `${require("../assets/img/off12.jpg")}`,
          price: 60,

          discounts: 30,
          count: 1,
          title:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          sizes: [37, 39, 40, 41, 42],
          amount: [0, 20, 0, 1, 2],
        },
        {
          id: "26",
          name: "Jordan 4 x Eminem",
          src_img1: `${require("../assets/img/eminem1.jpg")}`,
          src_img2: `${require("../assets/img/eminem12.jpg")}`,
          price: 60,

          discounts: 30,
          count: 1,
          title:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          sizes: [37, 39, 40, 41, 42],
          amount: [0, 20, 0, 1, 2],
        },
        {
          id: "27",
          name: 'Jordan 4 "Motor Sport"',
          src_img1: `${require("../assets/img/motor1.jpg")}`,
          src_img2: `${require("../assets/img/motor12.jpg")}`,
          price: 60,

          discounts: 30,
          count: 1,
          title:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          sizes: [37, 39, 40, 41, 42],
          amount: [0, 20, 0, 1, 2],
        },
        {
          id: "28",
          name: "Jordan 4 Metallic",
          src_img1: `${require("../assets/img/metallic1.jpg")}`,
          src_img2: `${require("../assets/img/metallic12.jpg")}`,
          price: 60,

          discounts: 30,
          count: 1,
          title:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          sizes: [37, 39, 40, 41, 42],
          amount: [0, 20, 0, 1, 2],
        },
        {
          id: "29",
          name: 'Jordan 4 "Fire Red"',
          src_img1: `${require("../assets/img/red12.jpg")}`,
          src_img2: `${require("../assets/img/red1.jpg")}`,
          price: 60,

          discounts: 30,
          count: 1,
          title:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          sizes: [37, 39, 40, 41, 42],
          amount: [0, 20, 0, 1, 2],
        },
        {
          id: "30",
          name: 'Jordan 4 "Pure Money"',
          src_img1: `${require("../assets/img/money1.jpg")}`,
          src_img2: `${require("../assets/img/money12.jpg")}`,
          price: 60,

          discounts: 30,
          count: 1,
          title:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          sizes: [37, 39, 40, 41, 42],
          amount: [0, 20, 0, 1, 2],
        },
        {
          id: "31",
          name: 'Jordan 1 "Chicago"',
          src_img1: `${require("../assets/img/chicago1.jpg")}`,
          src_img2: `${require("../assets/img/chicago12.jpg")}`,
          price: 60,

          discounts: 30,
          count: 1,
          title:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          sizes: [37, 39, 40, 41, 42],
          amount: [0, 20, 0, 1, 2],
        },
        {
          id: "32",
          name: "Jordan 5 x Offwhite",
          src_img1: `${require("../assets/img/512.jpg")}`,
          src_img2: `${require("../assets/img/51.jpg")}`,
          price: 60,

          discounts: 30,
          count: 1,
          title:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          sizes: [37, 39, 40, 41, 42],
          amount: [0, 20, 0, 1, 2],
        },
        {
          id: "33",
          name: 'Jordan 5 "Fire Red"',
          src_img1: `${require("../assets/img/fred1.jpg")}`,
          src_img2: `${require("../assets/img/fred12.jpg")}`,
          price: 60,

          discounts: 30,
          count: 1,
          title:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          sizes: [37, 39, 40, 41, 42],
          amount: [0, 20, 0, 1, 2],
        },
        {
          id: "34",
          name: 'Jordan 5 "Tokyo"',
          src_img1: `${require("../assets/img/tokyo1.jpg")}`,
          src_img2: `${require("../assets/img/tokyo12.jpg")}`,
          price: 60,

          discounts: 30,
          count: 1,
          title:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          sizes: [37, 39, 40, 41, 42],
          amount: [0, 20, 0, 1, 2],
        },
      ],
      cart: [],
      total: 0,
      selects: [
        {
          value: 0,
          label: "Name:A-Z",
        },
        {
          value : 1,
          label:"Name:Z-A"
        },
        {
          value: 2,
          label: "Highest Price",
        },
        {
          value: 3,
          label: "Lowest Price",
        },
        
      ],
      valueSelect: { label: "", value: "" },
      productPerPage: [],
      page: 0,
      province: [],
      sizeSelect: "",
    };
  }

  addCart = (id) => {
    const { products, cart,sizeSelect } = this.state;
    const check = cart.every((item) => {
      return item.id !== id;
    });
    if(sizeSelect === ""){
      alert("Please select size.")
      return;
    }
    if (check) {
      const data = products.filter((product) => {
        return product.id === id;
      });
      this.setState({ cart: [...cart, ...data] });
      alert("The product added to cart.");
    } else {
      alert("The product has been added to cart.");
    }
  };

  filter = (e) => {
    const { products} = this.state;
    this.setState({page:0})
    if (e.value === 0) {
      products.sort((a, b) => (a.name > b.name ? 1 : -1));
      this.setState({ productPerPage: products.slice(0,12) });
    }
    if (e.value === 1) {
      products.sort((a, b) => (a.name < b.name ? 1 : -1));
      this.setState({ productPerPage: products.slice(0,12) });
    }
    if (e.value === 2) {
      products.sort((a, b) =>
        a.price - (a.price * a.discounts) / 100 <
        b.price - (b.price * b.discounts) / 100
          ? 1
          : -1
      );
      this.setState({ productPerPage: products.slice(0,12) });
    }
    if (e.value === 3) {
      products.sort((a, b) =>
        a.price - (a.price * a.discounts) / 100 >
        b.price - (b.price * b.discounts) / 100
          ? 1
          : -1
      );
      this.setState({ productPerPage: products.slice(0,12) });
    }
  };

  filterSearch = (e) => {
    const {products} = this.state;
    let val = e.toLowerCase();
    if(val === ""){
      this.setState({productPerPage: products.slice(0,12)})
      return;
    }
    let matches = products.filter(v => v.name.toLowerCase().includes(val));
    this.setState({productPerPage:matches});
  }

  pagination = (numberPage) => {
    const { products} = this.state;
    const totalPage = (products.length)/12
    if(numberPage < 0 || numberPage > totalPage){
      return;
    }
    this.setState({page:numberPage});
    let productPerPage = [];
    productPerPage = products;
    let start , end ;
    //0
    if(numberPage === 0){
      start = numberPage;
      end = 12*(numberPage+1);
    }else{
      start = 12*numberPage+1;
      end = 12*(numberPage+1)+1;
    }
    productPerPage = productPerPage.slice(start,end);
    this.setState({productPerPage : productPerPage});
    return productPerPage;
  }

  sizeChoose = (size) => {
    this.setState({sizeSelect:size});
  }

  reduction = (id) => {
    const { cart } = this.state;
    cart.forEach((item) => {
      if (item.id === id) {
        item.count === 1 ? (item.count = 1) : (item.count -= 1);
      }
    });
    this.setState({ cart: cart });
    this.getTotal();
  };

  increase = (id) => {
    const { cart } = this.state;
    cart.forEach((item) => {
      if (item.id === id) {
        item.count += 1;
      }
    });
    this.setState({ cart: cart });
    this.getTotal();
  };

  removeProduct = (id) => {
    if (window.confirm("Do you want to delete this product?")) {
      const { cart } = this.state;
      cart.forEach((item, index) => {
        if (item.id === id) {
          cart.splice(index, 1);
        }
      });
      this.setState({ cart: cart });
      this.getTotal();
    }
  };

  getTotal = () => {
    const { cart } = this.state;
    const res = cart.reduce((prev, item) => {
      return (
        prev + (item.price - (item.price * item.discounts) / 100) * item.count
      );
    }, 0);
    this.setState({ total: res });
  };

  componentDidUpdate() {
    localStorage.setItem("dataCart", JSON.stringify(this.state.cart));
    localStorage.setItem("dataTotal", JSON.stringify(this.state.total));
    // localStorage.setItem("products", JSON.stringify(this.state.products));
  }

  componentDidMount() {

    const dataCart = JSON.parse(localStorage.getItem("dataCart"));
    if (dataCart !== null) {
      this.setState({ cart: dataCart });
    }
    const dataTotal = JSON.parse(localStorage.getItem("dataTotal"));
    if (dataTotal !== null) {
      this.setState({ total: dataTotal });
    }

    fetch('http://localhost:3000/province')
            .then(res => res.json())
            .then(json => {
                this.setState({
                  province: json,
                })
            }).catch((err) => {
                console.log(err);
            });
    }

  componentWillMount() {
    // fetch('http://localhost:3000/products')
    //         .then(res => res.json())
    //         .then(json => {
    //             this.setState({
    //               products: json,
    //             })
    //         }).catch((err) => {
    //             console.log(err);
    //         });
            this.setState({
              productPerPage:this.state.products.slice(0,12)
            })
    }

  render() {
    const {productPerPage, products, cart, total, selects,page,province,sizeSelect} = this.state;
    const {
      addCart,
      reduction,
      increase,
      removeProduct,
      getTotal,
      filter,
      pagination,
      filterSearch,
      sizeChoose
    } = this;
    return (
      <DataContext.Provider
        value={{
          products,
          addCart,
          cart,
          reduction,
          increase,
          removeProduct,
          total,
          getTotal,
          selects,
          filter,
          pagination, 
          productPerPage,
          page,
          province,
          filterSearch,
          sizeChoose,
          sizeSelect
        }}
      >
        {this.props.children}
      </DataContext.Provider>
    );
  }
}
