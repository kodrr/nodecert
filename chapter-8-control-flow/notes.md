callback is a handler for async operation/ops
promise is a way/abstraction of returning something from an asyn ops
i promise ko para madaling maghandle ng .then which is btw a returned promise by itself
        ni resolve mo para ma malagyan mo sya ng .then para pag recieve mo dun is ma prcess mo pa sya kung ano man ang gusto mong gawin don/repurpose or pag wala na is pwede mo na syang ihinto by either returning the data or i handle mo by callback

        pag nag .then ka ang return nun is promise ulit (actually same sa catch) kaya ka mag .then ulit sa susunod promise chain yun ay kung mag re 'return' ka mh something from that unang then

        kasi pwede namang may sync call ka na malaman mo agad yung result so gamitan mo ng callback
        pero pag along the way halimbawa kada .then mo may gagawin ka pa so i resolve mo or gawin mong Promise

        or pwede din naman callback pag may purpose ka pa sa sunod na retunr yung nga lang marumi kasi sa haduken, callback hell, Promise mas malinis basahin

        ni rereject mo naman para mahandle mo yung sa .catch mag throw agad ng error


Promise All - will execute the array of promise and will return a resolved array of values of each promises
                but if it has encountered one error any successfull resolved promises are ignored tas bato nya agad yung error


The Promise.allSettled() method returns a promise that fulfills after all of the given promises have either fulfilled or rejected, with an array of objects that each describes the outcome of each promise.
It is typically used when you have multiple asynchronous tasks that are not dependent on one another to complete successfully, or you'd always like to know the result of each promise.
        - pag nag ka error is array of object na may status and reason pag error, pag oks naman status and value lang


async / await

async function myAsyncFunc() {}
 - will alwasy returns a promise
 - await mo sya kasi na resolve na unlike Promise na matatwag mo palanag yung data kapag nag Promise.then ka sa await hinhantay mo na sya

 


