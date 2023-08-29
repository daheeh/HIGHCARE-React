import React, { useEffect, useState } from "react";
import OrganizationChart from "@dabeng/react-orgchart";
import { DndProvider } from "react-dnd";
import './pm-member.css'
import { useDispatch, useSelector } from "react-redux";
import { callTreeviewTwoAPI } from '../../apis/PmAPICalls';
import { GET_TREEVIEW_TWO } from "../../modules/TreeModule";

const SecondTree = () => {

  const dispatch = useDispatch();
  const ds =  useSelector(state => state.treeview) 
  
  useEffect(() => {
    dispatch(callTreeviewTwoAPI());
},[]);

    

  return <OrganizationChart datasource={ds} />;
};

export default SecondTree;
