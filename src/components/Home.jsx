import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { addToPastes, updateToPastes } from '../redux/pasteSlice';

const Home = () => {

    const [title, setTitle] = useState("");
    const [value, setValue] = useState("");
    const [searchParams, setSearchParams] = useSearchParams();
    const pasteId = searchParams.get("pasteId");
    const dispatch = useDispatch();


    function createPaste() {
        //yeh apan ne data create kiya hai, jaise jo ham likhenge woh yaha store hoiga
    const paste ={
        title:title,
        content:value,
        _id: pasteId || Date.now().toString(36),
        createAt:new Date().toISOString(),
    }

    if(pasteId){
            //update paste
            dispatch(updateToPastes(paste));
    }
    else{
        //create paste
        dispatch(addToPastes(paste));
    }
    //after creatin or updation
    setTitle("");
    setValue("");
    setSearchParams({});
    }
    return (
        <div>
            <div className='flex mt-16 flex-row gap-7 place-content-between'>
                <input
                    className="p-3 w-full border mt-2 rounded-2xl  border-gray-300  focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type='text'
                    placeholder='Enter title here'
                    value={title}
                    onChange={(e => setTitle(e.target.value))}
                />

               <button onClick={createPaste} className="px-6 py-3 mt-2 bg-white text-black rounded-xl shrink-0">
  {pasteId ? "Update My Paste" : "Create My Paste"}
</button>
            </div>
            <div>
                <textarea
                    className="min-w-[500px] p-4 w-full border mt-6 rounded-xl border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[300px]"
                    value={value}
                    placeholder='Enter content here'
                    onChange={(e) => setValue(e.target.value)}
                    rows={20}
                    cols={15} />
            </div>
        </div>
    )
}

export default Home