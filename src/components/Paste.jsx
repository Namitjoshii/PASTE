import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromPastes } from '../redux/pasteSlice';

const Paste = () => {

    const pastes = useSelector((state) => state.paste.pastes);
    const [searchTerm, setSearchTerm] = useState("");
    const dispatch = useDispatch();

    const filteredData = pastes.filter(
        (paste) => paste.title.
            toLowerCase().includes(searchTerm.toLowerCase())
    );

    function handleDelete(pasteId) {
        dispatch(removeFromPastes(pasteId));
    }

    function handleEdit(pasteId) {
        dispatch(updateToPastes(pasteId));
    }

    return (
        <div>
            <input
                className='p-2 rounded-2xl min-w-[600px] bg-pink-500 text-black   '
                type='search'
                placeholder='search here'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)} />
            <div className='flex flex-col gap-5 mt-5'>
                {
                    filteredData.length > 0 &&
                    filteredData.map(
                        (paste) => {
                            return (
                                <div className='border' key={paste._id}>
                                    <div>
                                        {paste.title}
                                    </div>
                                    <div>
                                        {paste.content}
                                    </div>
                                    <div className='flex flex-row gap-4 place-content-evenly'>
                                        <button onClick={() => handleEdit(paste._id)}>
                                            Edit
                                        </button>

                                        <button>

                                            View
                                        </button>

                                        <button onClick={() => handleDelete(paste?._id)}>
                                            Delete
                                        </button>

                                        <button>
                                            Copy
                                        </button>
                                        <button>
                                            Share
                                        </button>
                                        <div>
                                            {paste.createdAt}
                                        </div>
                                    </div>


                                </div>
                            )
                        }
                    )
                }

            </div>
        </div>


    )
}

export default Paste
