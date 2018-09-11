function teamCount(members, teams){
    const minMembers = Math.floor(members.length / teams);
    const finalTeams = [];
    const helperArray = [];
    for (let i = 0; i < teams; i += 1){
        let temp = []; 
        for (let j = 0; j < minMembers; j += 1){
            let single = members.splice(Math.floor(Math.random() * members.length), 1)
            if(!helperArray.includes(single[0])){
                helperArray.push(single[0]);
                temp.push(single[0]);
            }
        }
        finalTeams.push(temp);
    }
    if(members.length){
        finalTeams.forEach((val) => {
            single = members.splice(0, 1);
            val.push(single[0]);
        })
    };
    finalTeams.forEach((val, ind, arr) => {
        arr[ind] = val.filter(Boolean)
    });
    return finalTeams;
}

module.exports = teamCount