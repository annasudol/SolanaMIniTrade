import { CallbackFunctionText } from "@interfaces";
import { DetailedHTMLProps, LabelHTMLAttributes } from "react";

type IoptionsType = {
    value: string,
    label: string
};
interface ISelectInputnProps {
    options: IoptionsType[];
    selectedValue: string;
    onChangeSelect: CallbackFunctionText;
    id: string;
};

export const SelectInput: React.FunctionComponent<ISelectInputnProps> = ({ options, selectedValue, onChangeSelect, id}) => {
    return(
        <>
            <label htmlFor={id} className="block mb-1 mt-4 ml-4 text-sm font-medium text-gray-900 dark:text-gray-300">{id}</label>
            <select id={id} onChange={(e)=> onChangeSelect(e.target.value)} className="border h-12 bg-white border-main-yellow text-gray-900 placeholder-gray-400 outline-none px-5 w-full text-sm rounded-lg focus:bg-white focus:border-main-yellow focus:outline-none" aria-label="Default select example">
                {options.map((option, i)=> <option selected={selectedValue === option.value} key={i} value={option.value}>{option.label}</option>)}
            </select>
        </>
    )
}       

