import {test} from '@playwright/test'


test.beforeEach(async()=>{
    console.log("This is before Each")
})

test.afterEach(async()=>{
    console.log("This is After Each")
})


test.describe('Group1',()=>{
    
test('Test1',async()=>{
    console.log("This is Test 1")
})


test('Test2',async()=>{
    console.log("This is Test 2")
})

})


test.describe('Group2',()=>{
    test('Test3',async()=>{
        console.log("This is Test 3")
    })
    
    
    test('Test4',async()=>{
        console.log("This is Test 4")
    })
})

