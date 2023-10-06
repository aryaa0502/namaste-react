import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import AppBody from "./components/AppBody";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <AppBody />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:id",
        element: <RestaurantMenu />,
      }
    ],
    errorElement: <Error />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);


































{/* Hard coded res info cards (6) */}
        {/* <RestaurantCard
          resName="Meghna Foods"
          resCuisine="Biryani, South Indian"
          resRating="4.3"
          resEta="30 mins"
          resImage="https://source.unsplash.com/1600x900/?idli"
        />
        <RestaurantCard
          resName="KFC"
          resCuisine="Fried Chicken, Burgers, Fries"
          resRating="4.3"
          resEta="30 mins"
          resImage="https://source.unsplash.com/1600x900/?burger"
        />
        <RestaurantCard
          resName="Haldiram's"
          resCuisine="North Indian"
          resRating="4.3"
          resEta="20 mins"
          resImage="https://source.unsplash.com/1600x900/?pav"
        />
        <RestaurantCard
          resName="Call Me Chow"
          resCuisine="Chinese"
          resRating="4.3"
          resEta="30 mins"
          resImage="https://source.unsplash.com/1600x900/?noodles"
        />
        <RestaurantCard
          resName="Baker's Dozen"
          resCuisine="Cakes, Pastries, Bread"
          resRating="4.3"
          resEta="40 mins"
          resImage="https://source.unsplash.com/1600x900/?cake"
        />
        <RestaurantCard
          resName="Cafe Coffee Day"
          resCuisine="Coffee, Pasta"
          resRating="4.3"
          resEta="30 mins"
          resImage="https://source.unsplash.com/1600x900/?coffee"
        /> */}
        {/* Hard coded res info cards (6) */}


        {/* <RestaurantCard res = {resList[0]}/>
      <RestaurantCard res = {resList[1]}/>
      <RestaurantCard res = {resList[2]}/>
      <RestaurantCard res = {resList[3]}/>
      <RestaurantCard res = {resList[4]}/>
      <RestaurantCard res = {resList[5]}/>
      <RestaurantCard res = {resList[6]}/>
      <RestaurantCard res = {resList[7]}/>
      <RestaurantCard res = {resList[8]}/>
      <RestaurantCard res = {resList[9]}/>
      <RestaurantCard res = {resList[10]}/>
      <RestaurantCard res = {resList[11]}/>
      <RestaurantCard res = {resList[12]}/>
      <RestaurantCard res = {resList[14]}/>
      <RestaurantCard res = {resList[15]}/> */}