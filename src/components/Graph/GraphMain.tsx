import React, { useEffect } from "react";
import { RootState, useAppDispatch } from "../../redux/store";
import { getDataGraph } from "../../redux/ExtraRedusers/Graph/getDataGraphExtraReducer";
import { useSelector } from "react-redux";
import { createDataGraph } from "../../redux/ExtraRedusers/Graph/createDataGraphExtraReducer";
import { DataGraph } from "../../redux/Types/DataGraph";
import Graphs from "./DisplayGraph";
import "./style.css";
import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router";

const GraphMain = () => {
  const [dataGraph, setDataGraph] = React.useState<DataGraph>();
  const appDispatch = useAppDispatch();
  const navigate = useNavigate();
  const dataGraphList = useSelector(
    (state: RootState) => state.graph.dataGraph
  );

  useEffect(() => {
    if (!localStorage.getItem("user")) {
      navigate("/login");
      return;
    }
    appDispatch(getDataGraph());
  }, []);
  const handleDataGraph = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDataGraph({
      ...dataGraph,
      [e.target.name]: e.target.value,
    } as DataGraph);
  };
  const handleCreateData = () => {
    appDispatch(createDataGraph(dataGraph!));
  };
  
  if (!localStorage.getItem("user")) {
    return 
  }
  

  return (
    <div className="graph-container">
    
       <div className="create-data-graph">
        <h1>הסיפור האישי שלי</h1>
        <h3>
          כאן המקום למדוד את הערכים הבאים ולתת להם ציון ללא מגבלות וללא כללים,
          בכדי לאפשר לך ולעקוב אחרי ההתקדמות הטיפול לזכור את נקודת ההתחלה, לראות
          את המסלול ואת הדרך, ולקבל כח להמשך, מכאן האיחול שלי הוא רק להמשיך
          ולהצליח ❤️{" "}
        </h3>

        <input
          type="number"
          name="emotionScore"
          placeholder=" ציון רגש"
          onChange={handleDataGraph}
        />
        <input
          type="number"
          name="desireToStay_score"
          placeholder="רצון להישאר יחד"
          onChange={handleDataGraph}
        />
        <input
          type="number"
          name="tensionLevel"
          placeholder="הרמוניה זוגית"
          onChange={handleDataGraph}
        />
        <input
          type="number"
          name="entryOrder"
          placeholder="תקווה לעתיד"
          onChange={handleDataGraph}
        />
        <Button onClick={handleCreateData}>הוסף ניקוד</Button>
      </div> 
        
      {dataGraphList ? (
       <Graphs data={dataGraphList} />
      ) : (
        <Typography variant="h4">אין נתונים להצגה</Typography>
      )}
    </div>
  );
};

export default GraphMain;
