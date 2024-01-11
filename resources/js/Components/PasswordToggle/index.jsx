import React from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
const PasswordToggle = ({ showPassword, handleTogglePassword, label,id,value,onChange}) => {
    return (
        <div className="w-full md px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-md font-bold mb-2"
                htmlFor={id}
            >
                {label}
            </label>
        <div className="flex items-center">
            <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type={showPassword ? "text" : "password"}
                value={value}
                onChange={onChange}
                placeholder="******************"
            />
            <button
                type="button"
                onClick={handleTogglePassword}
                className="ml-2 focus:outline-none"
            >
                {showPassword ? (
                    <EyeSlashIcon className="h-6 w-6 text-gray-600" />
                ) : (
                    <EyeIcon className="h-6 w-6 text-gray-600" />
                )}
            </button>
        </div>
        </div>
    );
};

export { PasswordToggle };
