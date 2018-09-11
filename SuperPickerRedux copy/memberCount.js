function memberCount(members, number){
    const helperArray = [];
    const finalTeams = [];
    const teamSize = Math.ceil(members.length/number);
    for(let i = 0; i < teamSize; i +=1){
        let temp = [];
        for(let j = 0; j < number; j +=1){
            let single = members.splice(Math.floor(Math.random()* members.length),1)
            if(!helperArray.includes(single[0])){
                helperArray.push(single[0]);
                temp.push(single[0]);
            }
        }
    finalTeams.push(temp);
    }
    finalTeams.forEach((val, ind, arr) => {
        arr[ind] = val.filter(Boolean);
    });
    return finalTeams;
}

module.exports = memberCount;