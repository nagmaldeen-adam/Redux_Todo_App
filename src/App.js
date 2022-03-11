import React from 'react';
import './App.scss';
import {addItem,deleteItem ,updateItem} from './ReduxContaint';
import {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
 const App = () => {
     const {data} = useSelector(state => state.Teast);
     const [item ,setItem] =useState("");
     const [desc,setdesc] =useState("");
     const [nItem ,setnItem] =useState("");
     const [nDesc,setnDesc] =useState("");
     const [Edit ,setEdit] =useState(false);
     const [id ,setId] =useState(null);
     const  dispatch = useDispatch();

     
     return(
         <div className='app'>
             <div className='appContainer'>
            <h3>redux tolkit with todo app</h3>

                <div className='todoContainer'>
                <input type='text'value={item} placeholder="Enter Your Item Title"
                onChange= {(e) => setItem(e.target.value)}  />
                <input type='text'value={desc} placeholder="Enter Your Item Description"
                onChange={(e) => setdesc(e.target.value)}   />
                <button onClick={
                ()=>{ item != '' && desc != '' && dispatch(addItem({id:data.length +1,item,desc}))
                setdesc('');
                setItem('');}}
                className='button'>Add</button>
                </div>

            <div className="addItem">
            {data.length > 0 ? data.map( data => <div  key={data.id} className="post">
             <div className='postText'>
            <p className='first'>{ data.item} </p>
            <p>{data.desc}</p>
            </div>

            <div className='postbutton'>
            <button
            onClick={() => {setEdit(true)
               setId(data.id)}}>update</button>
            <button onClick={() => { 
                dispatch(deleteItem(data.id))}}>delete</button>
            </div>

                <br />
                {Edit && id == data.id && (
                    <>
                    <div className='edit'>
                    <input type='text' placeholder="add your item" 
                    onChange={(e) =>setnItem(e.target.value)}/>
                    <input type='text' placeholder="edit your description" 
                     onChange={(e) =>setnDesc(e.target.value)}/>
                    <button 
                    onClick={() => {dispatch(updateItem({id:data.id ,item:nItem,desc:nDesc}))
                setEdit(false)}}
                    >update</button>
                    </div>
                    </>
                )}
            </div>

            ) : <div className="text">there is no item or description to show</div>}
                </div>
            </div>
         </div>

     )
 }
 export default App;
