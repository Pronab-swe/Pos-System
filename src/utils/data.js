import Camera from "../assets/camera1.png"
import Computer1 from "../assets/computer1.png"
import Computer2 from "../assets/computer2.png"
import HardDisk from "../assets/harddisk.png"
import Keyboard from "../assets/keyboard.png"
import Laptop from "../assets/laptop.png"
import Mouse from "../assets/mouse.png"
import Ram from "../assets/ram.png"
export const AllProducts = [
    {
      id: "IT01",
      name: "CANON 1100D",
      price: 100,
      image: Camera,
      description: "Test descripotion",
    },
    {
      id: "IT02",
      name: "COMPUTER SET-1",
      price: 150,
      image: Computer1,
      description: "Test descripotion",
    },
    {
      id: "IT03",
      name: "COMPUTER SET-2",
      price: 200,
      image: Computer2,
      description: "Test descripotion",
    },
    {
      id: "IT04",
      name: "HARD DISK",
      price: 80,
      image: HardDisk,
      description: "Test descripotion",
    },
    {
      id: "IT05",
      name: "KEYBOARD",
      price: 50,
      image: Keyboard,
      description: "Test descripotion",
    },
    {
      id: "IT06",
      name: "LAPTOP",
      price: 120,
      image: Laptop,
      description: "Test descripotion",
    },
    {
      id: "IT07",
      name: "MOUSE",
      price: 20,
      image: Mouse,
      description: "Test descripotion",
    },
    {
      id: "IT08",
      name: "RAM",
      price: 60,
      image: Ram,
      description: "Test descripotion",
    },
  ];
  
  export function getProducts() {
    return AllProducts;
  }
  
  export function getProduct(id) {
    return AllProducts.find((item) => item.id === id);
  }
  
  export function getProductByName(name) {
    return AllProducts.find((item) => item.name === name);
  }
  