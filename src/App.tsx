import React from 'react';
import './index.css';
import { FaMinus, FaPlus } from 'react-icons/fa';

function Minutes() {
    const minutes = 5;
    return (
        <div className={'Minutes'}>
            <div>
                <button
                    type={'button'}
                    className={'icon_button Minutes_button'}
                >
                    <FaMinus />
                </button>
            </div>
            <div
                className={'Minutes_label'}
                // htmlFor={'minutes'}
            >
                {minutes} Minutes
            </div>
            <div>
                <button
                    type={'button'}
                    className={'icon_button Minutes_button'}
                >
                    <FaPlus />
                </button>
            </div>
        </div>
    );
}

export { Minutes as App };

// function App() {
//     return (
//         <div className="App">
//             <header className="App-header">
//                 <img
//                     src={logo}
//                     className="App-logo"
//                     alt="logo"
//                 />
//                 <p>
//                     Edit <code>src/App.tsx</code> and save
//                     to reload.
//                 </p>
//                 <a
//                     className="App-link"
//                     href="https://reactjs.org"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                 >
//                     Learn React
//                 </a>
//             </header>
//         </div>
//     );
// }
