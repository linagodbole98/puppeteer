const express = require("express")
const fetchData = require("./sum")
const common = require("./common")

//  One
// test('test case', () => { 
//     expect(sum()).toThrowError(2)

//  })


//two
//  test('sum of two number', () => { 
//     expect(sum(1,2)).not.toBe(4)
//     expect(sum(1,2)).toBe(3)
//  })


//Three
// test("toEqual",()=>{
//     expect(sum()).toEqual({name:"Lina"})
// })

//four - callback
// test('callback testing', done => { 

//     function callback(data){
//         try{
//             expect(data).toBe('hello callback')
//             done()
//         }
//         catch(error){
//             done(error)
//         }
//     }
//     fetchData(callback)
//  })

//five - Promise
// test('promise testing', () => { 
//  return fetchData().then((data)=>{
//      expect(data).toBe('hello');
//     })
//  })


//Six - Async await
// test('async function', async() => { 
//     const data = await fetchData();
//     expect(data).toBe('done')
// })

//seven 
beforeEach (()=>{
    console.log(common());
})
test('fetch dat testing', () => { 
    except(fetchData()).toBe('hello')
 })