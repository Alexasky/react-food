import { useState } from 'react';

function Search({ cb = Function.prototype }) {
    const [value, setValue] = useState('');

    const handleKey = (e) => {
        if (e.key === 'Enter') {
            handleSubmit();
        }
    };
    const handleSubmit = () => {
        cb(value);
    };

    return (
        <div className='input-field col s6 '>
            <input
                id='input-search'
                placeholder='search'
                type='search'
                onKeyDown={handleKey}
                onChange={(e) => setValue(e.target.value)}
                value={value}
            />
            <button
                className='btn'
                onClick={handleSubmit}
                style={{ position: 'absolute', top: 0, right: 0 }}
            >
                Search
            </button>
        </div>
    );
}

export { Search };
