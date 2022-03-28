type IoptionsType = {
    value: string,
    label: string
};
interface ISelectInputnProps {
    options: IoptionsType[];
    selectedValue: string;
    onChangeSelect: void;
};

export const SelectInput: React.FunctionComponent<ISelectInputnProps> = ({ options, selectedValue, onChangeSelect}) => {
    return(
    <select className="form-select appearance-none
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding bg-no-repeat
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
            {options.map((option, i)=> <option selected={selectedValue === option.value} key={i} value={option.value} onChange={()=> onChangeSelect(option.value)}>{option.label}</option>)}
        </select>
        )
    }       

