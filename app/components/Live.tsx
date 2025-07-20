import { getLive } from "../utils/api";
import React, { useEffect} from "react";
import LiveCard from "./LiveCard";
import { LiveData } from "./type/app";

type LiveItem = {
  img: string;
  title: string;
};

const Live = async() => {

   const liveData = await getLive();


  return (
    <section className='pt-6'>
      <div className='container'>
        <div className='flex space-x-3 overflow-scroll p-3 no-scrollbar'>
          {liveData.map((item) => (
            <LiveCard key={item.img} img={item.img} title={item.title} />
          ))}
        </div>
      </div>
    </section>
  );
};
    
export default Live;