import ArrayIndexAndLength from "./ArrayIndexAndLength";
import FilterFunction from "./FilterFunction";
import FindFunction from "./FindFunction";
import FindIndex from "./FindIndex";
import ForLoops from "./ForLoops";
import JSONStringify from "./JSONStringify";
import MapFunction from "./MapFunction";

function WorkingWithArrays() {
    var functionScoped = 2;
    let blockScoped = 5;
    const constant1 = functionScoped - blockScoped;
    let numberArray1 = [1, 2, 3, 4, 5];
    let stringArray1 = ['string1', 'string2'];
    let variableArray1 = [
        functionScoped,   blockScoped,
        constant1,        numberArray1,   stringArray1
    ];
    console.log(numberArray1);
    console.log(stringArray1);
    console.log(variableArray1);
    return (
        <>
            <h2>Working with Arrays</h2>
            numberArray1 = { numberArray1 }<br/>
            stringArray1 = { stringArray1 }<br/>
            variableArray1 = { variableArray1 }<br/>
            <ArrayIndexAndLength/>
            <ForLoops/>
            <MapFunction/>
            <JSONStringify/>
            <FindFunction/>
            <FindIndex/>
            <FilterFunction/>
        </>
    );
}
export default WorkingWithArrays