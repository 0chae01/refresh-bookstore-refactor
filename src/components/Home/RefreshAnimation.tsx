import React from "react";

const RefreshAnimation = () => {
  return (
    <div className="w-full h-[500px] flex flex-row justify-start items-center">
      <div className="absolute rounded-full w-[800px] right-0 h-[800px] blur-lg opacity-30 bg-point animate-[move1_25s_linear_infinite_alternate]"></div>
      <div className="absolute rounded-full left-[30%] w-[500px] h-[500px] opacity-10 bg-point animate-[move4_15s_linear_infinite_alternate]"></div>
      <div className="absolute rounded-full left-0 w-[600px] h-[600px] opacity-20 blur-2xl bg-point animate-[move3_25s_linear_infinite_alternate] duration-100"></div>
      <div className="absolute rounded-full right-[30%] w-[400px] h-[400px] blur-xl opacity-20 bg-point animate-[move2_20s_linear_infinite_alternate] duration-100"></div>
      <div className="absolute rounded-full left-[5%] w-[400px] h-[400px] blur-xl  bg-light_green animate-[move1_20s_linear_infinite_alternate] duration-100"></div>
    </div>
  );
};

export default RefreshAnimation;
