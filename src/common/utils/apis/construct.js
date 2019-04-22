import Mock from 'mockjs'

import temp1 from './data.json'

temp1.rules.map(v=>{

    let size = v.data.size
    let data = v.data.template
    let mockData = []

    for (let i = 0; i < size; i++) {
        let tempData = {};
        for(let o in data) {
            tempData[o] = Mock.mock(data[o])
        }
        mockData.push(tempData)
    }

    v.data = mockData

    return v;

})

console.log(temp1)

temp1.rules.forEach(v => {
    Mock.mock(v.url, v.methon, v.data)
})

Mock.mock('/test',function(a,b,c){
    console.log(a,b,c)
})
