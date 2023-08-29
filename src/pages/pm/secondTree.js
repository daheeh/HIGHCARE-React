import React, { useEffect, useState } from "react";
import OrganizationChart from "@dabeng/react-orgchart";
import './pm-member.css'
import { useDispatch, useSelector } from "react-redux";
import { callTreeviewTwoAPI } from '../../apis/PmAPICalls';

const SecondTree = () => {

  const dispatch = useDispatch();
  const ds =  useSelector(state => state.second) 
  
  useEffect(() => {
    dispatch(callTreeviewTwoAPI());
},[]);

    

  return <OrganizationChart datasource={ds} />;
};

export default SecondTree;
