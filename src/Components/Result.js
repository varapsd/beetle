import React from 'react'
import { Table } from 'react-bootstrap'
function Result(props){
    let mainArr = []
    let check = [{"contactNumbers":["22435157","30281570","8961369388"],"Pincodes":[700069,700072,700013,700001,700069],"_id":"60cf0870dfa0ac22a9fa5981","institutionName":"Beetle Nut","branchName":"Rohan","address":"Platform Number 9 3/11","city":"Pasadena","branchInchanrge":"Mr Roast Master","__v":0},{"contactNumbers":["65537730","9830456531"],"Pincodes":[700072,700013],"_id":"60cf0870dfa0ac22a9fa5983","institutionName":"Beetle Nut","branchName":"Central Perk","address":"Platform Number 9 3/13","city":"Pasadena","branchInchanrge":"Mr Charu Sharma","__v":0}];
    for(let i =0;i<check.length;i++){
        let smlArr = [];
        smlArr.push(check[i].branchName);
        smlArr.push(check[i].branchInchanrge);
        let nums = ''
        for(let j = 0;j < check[i].contactNumbers.length;j++){
            if(j=0){
                nums += check[i].contactNumbers[i];
            }
            else{
                nums += '\n'+check[i].contactNumbers[i]
            }
        }
        smlArr.push(nums);
        let addr = check[i].city+'\n'+check[i].address;
        smlArr.push(addr);
        mainArr.push(smlArr);
    }
   
    const getTr = function(bList){
        let res = [];
        for(let i = 0; i < bList.length; i++) {
            let trData = ''
            trData += <td>{bList[i].branchInchanrge}</td>
            trData += <td>{bList[i].branchName}</td>
            trData += <td>{bList[i].contactNumbers[0]}</td>
            trData += <td>{bList[i].address}</td>
            res.push(trData);
        }
        return res;
    }
    console.log(mainArr);
    /*
    if(props.branches.length > 0){
        console.log('yes')
        return(
            <div>
                <tr>{getTr(props.branches)}</tr>
            </div>
        ) 
    }
    */
    return(
        <div>
            { props.branches.length > 0 && 
            <Table striped bordered hover>
                {props.branches.map(branch =>{
                    console.log(branch);
                })}
                <thead>
                    <tr>
                    <th>Branch Name</th>
                    <th>Incharge</th>
                    <th>Contact Numbers</th>
                    <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {mainArr.map(br=>(
                            <td>{br}</td>
                        ))}
                    </tr>
                </tbody>
            </Table>
        }
        </div>
    )
}

export default Result;