import { CallbackFunctionText } from "@interfaces";

type IoptionsType = {
    value: string,
    label: string
};
interface ISelectInputnProps {
    options: IoptionsType[];
    selectedValue: string;
    onChangeSelect: CallbackFunctionText
};

export const SelectInput: React.FunctionComponent<ISelectInputnProps> = ({ options, selectedValue, onChangeSelect}) => {
    return(
        <select className="border h-12 bg-white border-main-yellow text-gray-900 placeholder-gray-400 outline-none px-5 w-full text-sm rounded-lg focus:bg-white focus:border-main-yellow focus:outline-none" aria-label="Default select example">
            {options.map((option, i)=> <option selected={selectedValue === option.value} key={i} value={option.value} onChange={()=> onChangeSelect(option.value)}>{option.label}</option>)}
        </select>
    )
}       

