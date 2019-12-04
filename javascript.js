var popPromise = d3.json("")//insert json file created from node.js
popPromise.then(function(popData)
{
    console.log("state population data working",popData);
    getData(popData);
},
function(err){console.log("ERROR in popPromise",err)})
var getData = function(popData)
{
    states = [{name: "Alabama", total: [], male: [], female: [], both: [], white: [], black: [], asian: [], multiracial: []}] //each array within each state object will need to be summed; I will also have to copy paste the Alabama object for each state
    popData.forEach(function(d)
    {
        if(d.AGE == 40) //this is the average age of CS professionals according to https://datausa.io/profile/cip/computer-science-6
            {
                totalAccumulator = 0;
                if(typeof d != "undefined") //this isn't doing anything. Is there a better way to check for undefined
                    {
                    if(d.RACE < 7)
                        {totalAccumulator += d.POPESTIMATE2017; console.log("states",states);console.log("totalAccumulator", totalAccumulator);}
                    if(d.SEX == 0)//both sexes
                        {states[d.STATE-1].both.push(d.POPESTIMATE2017)} 
                    if(d.SEX == 1)//male
                        {states[d.STATE-1].male.push(d.POPESTIMATE2017)}
                    if(d.SEX == 2)//female
                        {states[d.STATE-1].female.push(d.POPESTIMATE2017)}
                    if(d.RACE == 1)//white
                        {states[d.STATE-1].white.push(d.POPESTIMATE2017)}
                    if(d.RACE == 2)//black
                        {states[d.STATE-1].black.push(d.POPESTIMATE2017)}
                    if(d.RACE == 4)//asian
                        {states[d.state-1].asian.push(d.POPESTIMATE2017)} //this isn't working likely because not all data points represent asians
                    if(d.RACE == 6) //two or more races;
                        {states[d.STATE-1].multiracial.push(d.POPESTIMATE2017)} //nothing is being pushed. Maybe bc problem with asian if statement
                    }
            }
    }) ;
    console.log(states);
}