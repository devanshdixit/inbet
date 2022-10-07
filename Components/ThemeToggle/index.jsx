import React from 'react';
import { FaSun, FaMoon} from "react-icons/fa";
import { ThemeContext } from '../../utils/ThemeContext';

const Toggle = () => {
    const { theme, setTheme } = React.useContext(ThemeContext);

    return (
        <div className="transition duration-500 ease-in-out rounded-full p-2 mr-3">
            {theme === 'dark' ? (
                <FaSun
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    className="text-gray-500 dark:text-gray-400 text-lg cursor-pointer"
                />
            ) : (
                    <FaMoon
                        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                        className="text-gray-500 dark:text-gray-400 text-lg cursor-pointer"
                    />
                )}
        </div>
    );
};

export default Toggle;