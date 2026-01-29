import React, { useEffect } from 'react'
import { RootState, useAppDispatch } from '../../redux/store';
import { getDataGraph } from '../../redux/ExtraRedusers/Graph/getDataGraphExtraReducer';
import { useSelector } from 'react-redux';
import { createDataGraph } from '../../redux/ExtraRedusers/Graph/createDataGraphExtraReducer';
import { DataGraph} from '../../redux/Types/DataGraph';
import Graphs from './DisplayGraph';

const GraphMain = () => {
  const [dataGraph, setDataGraph] = React.useState<DataGraph>();
    const appDispatch = useAppDispatch();
    const dataGraphList = useSelector((state: RootState) => state.graph.dataGraph);
    const handleDataGraph = (e: React.ChangeEvent<HTMLInputElement>) => {
      setDataGraph({
        ...dataGraph,
        [e.target.name]: e.target.value
      } as DataGraph
      )
    }
    const handleCreateData = () => {
      appDispatch(createDataGraph(dataGraph!))
    }
    useEffect(() => {
        appDispatch(getDataGraph())
    }, [])
  return (
    <>
    <div>
      <h1>Graph Main</h1>
      <input type="number" name="emotionScore" placeholder='Title' onChange={handleDataGraph} />
      <input type="number" name="desireToStay_score" placeholder='Description' onChange={handleDataGraph} />
      <input type="number" name="tensionLevel" placeholder='tensionLevel' onChange={handleDataGraph} />
      <input type="number" name="entryOrder" placeholder='entryOrder' onChange={handleDataGraph} />
      <button onClick={handleCreateData}>Create</button>
    </div>
    <Graphs data={dataGraphList}/>
    </>
  )
}


// emotionScore: number;
//   desireToStay_score: number;
//   tensionLevel: number;
//   entryOrder: number;
//   entryTime: Date;
export default GraphMain
